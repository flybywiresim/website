import { useState, useEffect, useLayoutEffect, useRef, useCallback, type Ref } from 'react';
import { createPortal } from 'react-dom';
import { NavigationButton, BlurPlaceholder, FALLBACK_BLUR } from '../Projects/Carousel/CarouselPrimitives';

export type ViewerImage = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    blurDataURL?: string;
};

type ViewerModalProps = {
    images: ViewerImage[];
    startIndex?: number;
    getSourceElement?: (index: number) => HTMLElement | null;
    onClose: () => void;
};

const DURATION = 400;
const SLIDE_DURATION = 500;
const EASING = 'ease-in-out';
const DEFAULT_ASPECT = 16 / 9;
const RADIUS = 16;
const REST_CLIP = `inset(0px round ${RADIUS}px)`;

type Pose = { x: number; y: number; scale: number; box: number[]; radius: number; opacity: number };

const restPose = ({ width: w, height: h }: DOMRect): Pose => (
    { x: 0, y: 0, scale: 1, box: [-w / 2, -h / 2, w / 2, h / 2], radius: RADIUS, opacity: 1 }
);

const hiddenPose = (rest: DOMRect): Pose => {
    const pose = restPose(rest);
    return { ...pose, scale: 0.95, box: pose.box.map((v) => v * 0.95), opacity: 0 };
};

const mix = (from: number, to: number, k: number) => from + (to - from) * k;

const mixPose = (from: Pose, to: Pose, k: number): Pose => ({
    x: mix(from.x, to.x, k),
    y: mix(from.y, to.y, k),
    scale: mix(from.scale, to.scale, k),
    box: from.box.map((v, i) => mix(v, to.box[i], k)),
    radius: mix(from.radius, to.radius, k),
    opacity: mix(from.opacity, to.opacity, k),
});

const applyPose = (el: HTMLElement, pose: Pose, { width: w, height: h }: DOMRect) => {
    const { x, y, scale, box: [l, t, r, b] } = pose;
    const inset = [h / 2 + (t - y) / scale, w / 2 - (r - x) / scale, h / 2 - (b - y) / scale, w / 2 + (l - x) / scale];
    Object.assign(el.style, {
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
        clipPath: `inset(${inset.map((v) => `${Math.max(0, v)}px`).join(' ')} round ${pose.radius / scale}px)`,
        opacity: `${pose.opacity}`,
    });
};

const present = (...els: (HTMLElement | null)[]) => els.filter((el): el is HTMLElement => el !== null);

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const imageIn = (el: HTMLElement) => (el instanceof HTMLImageElement ? el : el.querySelector('img'));

const loadedImageIn = (el: HTMLElement | null | undefined) => {
    const img = el && imageIn(el);
    return img?.complete && img.naturalWidth ? img : null;
};

const sourceAspect = (el: HTMLElement | null | undefined) => {
    const img = el && imageIn(el);
    if (!img) return null;
    if (img.naturalWidth && img.naturalHeight) return img.naturalWidth / img.naturalHeight;
    const { width, height } = img.getBoundingClientRect();
    return getComputedStyle(img).objectFit === 'fill' && width && height ? width / height : null;
};

const resolveAspect = (image: ViewerImage, source: HTMLElement | null | undefined) => (
    image.width && image.height ? image.width / image.height : sourceAspect(source)
);

const sourcePose = (el: HTMLElement | null | undefined, rest: DOMRect): Pose | null => {
    if (!el) return null;
    const clip = el.getBoundingClientRect();
    const onScreen = clip.width > 0 && clip.height > 0 && clip.right > 0 && clip.bottom > 0
        && clip.left < window.innerWidth && clip.top < window.innerHeight;
    if (!onScreen) return null;
    const content = (imageIn(el) ?? el).getBoundingClientRect();
    const cx = rest.left + rest.width / 2;
    const cy = rest.top + rest.height / 2;
    return {
        x: content.left + content.width / 2 - cx,
        y: content.top + content.height / 2 - cy,
        scale: Math.max(content.width / rest.width, content.height / rest.height),
        box: [clip.left - cx, clip.top - cy, clip.right - cx, clip.bottom - cy],
        radius: parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0,
        opacity: 1,
    };
};

const ViewerLayer = ({
    index,
    image,
    layerRef,
    getPlaceholder,
    onNaturalSize,
}: {
    index: number;
    image: ViewerImage;
    layerRef: Ref<HTMLDivElement>;
    getPlaceholder: (index: number) => HTMLImageElement | null;
    onNaturalSize: (index: number, width: number, height: number) => void;
}) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [status, setStatus] = useState<'loading' | 'fading' | 'ready'>('loading');
    const [hasSnapshot, setHasSnapshot] = useState(false);

    useLayoutEffect(() => {
        if (loadedImageIn(imgRef.current)) {
            setStatus('ready');
            return;
        }
        const placeholder = getPlaceholder(index);
        const canvas = canvasRef.current;
        if (!placeholder || !canvas) return;
        canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
        canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
        canvas.getContext('2d')?.drawImage(placeholder, 0, 0, canvas.width, canvas.height);
        setHasSnapshot(true);
    }, [getPlaceholder, index]);

    return (
        <div ref={layerRef} className="absolute inset-0 overflow-hidden">
            {status !== 'ready' && !hasSnapshot && <BlurPlaceholder src={image.blurDataURL ?? FALLBACK_BLUR} />}
            {status !== 'ready' && <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />}
            <img
                ref={imgRef}
                src={image.src}
                alt={image.alt}
                decoding="async"
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                    opacity: status === 'loading' ? 0 : 1,
                    transition: status === 'fading' ? 'opacity 300ms ease-out' : undefined,
                }}
                onLoad={(e) => {
                    setStatus((s) => (s === 'loading' ? 'fading' : s));
                    onNaturalSize(index, e.currentTarget.naturalWidth, e.currentTarget.naturalHeight);
                }}
                onTransitionEnd={() => setStatus('ready')}
            />
        </div>
    );
};

const ViewerModal = ({ images, startIndex = 0, getSourceElement, onClose }: ViewerModalProps) => {
    const getSourceRef = useRef(getSourceElement);
    getSourceRef.current = getSourceElement;

    const [index, setIndex] = useState(startIndex);
    const indexRef = useRef(index);
    indexRef.current = index;
    const measuredAspects = useRef<Record<number, number>>({});
    const [aspect, setAspect] = useState(
        () => resolveAspect(images[startIndex], getSourceElement?.(startIndex)) ?? DEFAULT_ASPECT,
    );
    const [slide, setSlide] = useState<{ from: number; direction: 1 | -1 } | null>(null);
    const closingRef = useRef(false);

    const backdropRef = useRef<HTMLDivElement>(null);
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);
    const incomingRef = useRef<HTMLDivElement>(null);
    const outgoingRef = useRef<HTMLDivElement>(null);

    const zoomWrapperRef = useRef<HTMLDivElement>(null);
    const zoomRef = useRef(1);
    const panRef = useRef({ x: 0, y: 0 });
    const isDraggingRef = useRef(false);
    const wasDraggedRef = useRef(false);
    const dragStartRef = useRef({ x: 0, y: 0 });
    const panStartRef = useRef({ x: 0, y: 0 });

    const applyZoomPan = useCallback(() => {
        const wrapper = zoomWrapperRef.current;
        const frame = frameRef.current;
        if (!wrapper || !frame) return;
        const z = zoomRef.current;
        if (z <= 1) {
            panRef.current = { x: 0, y: 0 };
        } else {
            const { width, height } = frame.getBoundingClientRect();
            panRef.current = {
                x: Math.min(0, Math.max(width * (1 - z), panRef.current.x)),
                y: Math.min(0, Math.max(height * (1 - z), panRef.current.y)),
            };
        }
        const noTransition = isDraggingRef.current || prefersReducedMotion();
        wrapper.style.transition = noTransition ? 'none' : 'transform 150ms ease-out';
        wrapper.style.transformOrigin = '0 0';
        wrapper.style.transform = `translate(${panRef.current.x}px, ${panRef.current.y}px) scale(${Math.max(z, 1)})`;
        const dragCursor = isDraggingRef.current ? 'grabbing' : 'grab';
        frame.style.cursor = z > 1 ? dragCursor : '';
    }, []);

    const resetZoom = useCallback(() => {
        zoomRef.current = 1;
        panRef.current = { x: 0, y: 0 };
        applyZoomPan();
    }, [applyZoomPan]);

    const poseRef = useRef<Pose | null>(null);
    const clockRef = useRef<Animation | null>(null);

    const animateFrame = useCallback((frame: HTMLElement, rest: DOMRect, to: Pose, from = poseRef.current ?? to) => {
        clockRef.current?.cancel();
        const clock = frame.animate([], { duration: DURATION, easing: EASING });
        clockRef.current = clock;
        const show = (pose: Pose) => {
            poseRef.current = pose;
            applyPose(frame, pose, rest);
        };
        const tick = () => {
            if (clock.playState === 'idle') return;
            const progress = clock.effect?.getComputedTiming().progress;
            if (clock.playState === 'finished' || progress == null) {
                show(to);
                return;
            }
            show(mixPose(from, to, progress));
            requestAnimationFrame(tick);
        };
        show(from);
        requestAnimationFrame(tick);
        return clock;
    }, []);

    useLayoutEffect(() => {
        const html = document.documentElement;
        const widthWithScrollbar = html.getBoundingClientRect().width;
        const { overflow, paddingRight } = html.style;
        html.style.overflow = 'hidden';
        const compensation = html.getBoundingClientRect().width - widthWithScrollbar;
        if (compensation > 0) html.style.paddingRight = `${compensation}px`;
        return () => {
            html.style.overflow = overflow;
            html.style.paddingRight = paddingRight;
        };
    }, []);

    useLayoutEffect(() => {
        const frame = frameRef.current;
        if (!frame || prefersReducedMotion()) return undefined;
        const rest = frame.getBoundingClientRect();
        animateFrame(frame, rest, restPose(rest), sourcePose(getSourceRef.current?.(indexRef.current), rest) ?? hiddenPose(rest));
        const fades = present(backdropRef.current, prevRef.current, nextRef.current)
            .map((el) => el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: DURATION, easing: EASING }));
        return () => {
            clockRef.current?.cancel();
            fades.forEach((a) => a.cancel());
        };
    }, [animateFrame]);

    const handleClose = useCallback(() => {
        const frame = frameRef.current;
        if (!frame || closingRef.current) return;
        closingRef.current = true;
        if (prefersReducedMotion()) {
            onClose();
            return;
        }
        resetZoom();

        const opened = clockRef.current?.playState === 'finished';
        frame.style.transform = 'none';
        const rest = frame.getBoundingClientRect();
        animateFrame(
            frame,
            rest,
            sourcePose(getSourceRef.current?.(indexRef.current), rest) ?? hiddenPose(rest),
            opened ? restPose(rest) : undefined,
        ).finished.then(() => onClose(), () => {});

        const timing: KeyframeAnimationOptions = { duration: DURATION, easing: EASING, fill: 'forwards' };
        present(backdropRef.current, prevRef.current, nextRef.current).forEach((el) => {
            const from = getComputedStyle(el).opacity;
            el.getAnimations().forEach((a) => a.cancel());
            el.animate([{ opacity: from }, { opacity: 0 }], timing);
        });
    }, [animateFrame, onClose, resetZoom]);

    useEffect(() => {
        const frame = frameRef.current;
        if (!frame) return undefined;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (closingRef.current) return;

            const rect = frame.getBoundingClientRect();
            const cursorX = e.clientX - rect.left;
            const cursorY = e.clientY - rect.top;

            const oldZoom = zoomRef.current;
            const factor = e.deltaY > 0 ? 0.9 : 1.1;
            const newZoom = Math.max(1, Math.min(oldZoom * factor, 5));

            if (newZoom <= 1) {
                panRef.current = { x: 0, y: 0 };
            } else {
                const ratio = newZoom / oldZoom;
                panRef.current = {
                    x: cursorX - ratio * (cursorX - panRef.current.x),
                    y: cursorY - ratio * (cursorY - panRef.current.y),
                };
            }

            zoomRef.current = newZoom;
            applyZoomPan();
        };

        frame.addEventListener('wheel', handleWheel, { passive: false });
        return () => frame.removeEventListener('wheel', handleWheel);
    }, [applyZoomPan]);

    const handleFrameMouseDown = useCallback((e: React.MouseEvent) => {
        if (zoomRef.current <= 1) return;
        e.preventDefault();
        isDraggingRef.current = true;
        wasDraggedRef.current = false;
        dragStartRef.current = { x: e.clientX, y: e.clientY };
        panStartRef.current = { ...panRef.current };
        if (frameRef.current) frameRef.current.style.cursor = 'grabbing';

        const handleMouseMove = (ev: MouseEvent) => {
            if (!isDraggingRef.current) return;
            const dx = ev.clientX - dragStartRef.current.x;
            const dy = ev.clientY - dragStartRef.current.y;
            if (Math.abs(dx) > 3 || Math.abs(dy) > 3) wasDraggedRef.current = true;
            panRef.current = {
                x: panStartRef.current.x + dx,
                y: panStartRef.current.y + dy,
            };
            applyZoomPan();
        };

        const handleMouseUp = () => {
            isDraggingRef.current = false;
            if (frameRef.current) {
                frameRef.current.style.cursor = zoomRef.current > 1 ? 'grab' : '';
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [applyZoomPan]);

    const handleFrameClick = useCallback(() => {
        if (wasDraggedRef.current) {
            wasDraggedRef.current = false;
            return;
        }
        if (zoomRef.current > 1) {
            resetZoom();
            return;
        }
        handleClose();
    }, [handleClose, resetZoom]);

    useLayoutEffect(() => {
        const outgoing = outgoingRef.current;
        const incoming = incomingRef.current;
        if (!slide || !outgoing || !incoming) return undefined;

        const timing: KeyframeAnimationOptions = { duration: SLIDE_DURATION, easing: EASING };
        const offset = slide.direction * 100;
        const animations = [
            outgoing.animate([{ transform: 'translateX(0)' }, { transform: `translateX(${-offset}%)` }], timing),
            incoming.animate([{ transform: `translateX(${offset}%)` }, { transform: 'translateX(0)' }], timing),
        ];
        animations[1].finished.then(() => setSlide(null), () => {});
        return () => animations.forEach((a) => a.cancel());
    }, [slide]);

    const go = useCallback((direction: 1 | -1) => {
        if (images.length < 2 || slide || closingRef.current) return;
        const next = (index + direction + images.length) % images.length;
        resetZoom();
        setAspect(
            measuredAspects.current[next]
            ?? resolveAspect(images[next], getSourceRef.current?.(next))
            ?? aspect,
        );
        if (!prefersReducedMotion()) setSlide({ from: index, direction });
        setIndex(next);
    }, [images, index, aspect, slide, resetZoom]);

    const getPlaceholder = useCallback((i: number) => loadedImageIn(getSourceRef.current?.(i)), []);

    const handleNaturalSize = useCallback((i: number, width: number, height: number) => {
        const measured = width / height;
        measuredAspects.current[i] = measured;
        if (i === indexRef.current) {
            setAspect((current) => (Math.abs(current / measured - 1) > 0.01 ? measured : current));
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
            if (e.key === 'ArrowLeft') go(-1);
            if (e.key === 'ArrowRight') go(1);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleClose, go]);

    const hasNavigation = images.length > 1;
    const layers = slide ? [slide.from, index] : [index];

    return createPortal(
        <div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={(e) => e.stopPropagation()}
        >
            <div ref={backdropRef} className="absolute inset-0 bg-black/90" onClick={handleClose} />

            {hasNavigation && (
                <div ref={prevRef} className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
                    <NavigationButton
                        onClick={() => go(-1)}
                        direction="previous"
                        className="bg-light/20 hover:bg-light/40 backdrop-blur-sm"
                    />
                </div>
            )}

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                    ref={frameRef}
                    className="pointer-events-auto relative cursor-pointer overflow-hidden"
                    style={{
                        width: `min(90vw, ${90 * aspect}vh)`,
                        aspectRatio: `${aspect}`,
                        clipPath: REST_CLIP,
                    }}
                    onClick={handleFrameClick}
                    onMouseDown={handleFrameMouseDown}
                >
                    <div ref={zoomWrapperRef} className="absolute inset-0">
                        {layers.map((i) => (
                            <ViewerLayer
                                key={i}
                                index={i}
                                image={images[i]}
                                layerRef={i === index ? incomingRef : outgoingRef}
                                getPlaceholder={getPlaceholder}
                                onNaturalSize={handleNaturalSize}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {hasNavigation && (
                <div ref={nextRef} className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                    <NavigationButton
                        onClick={() => go(1)}
                        direction="next"
                        className="bg-light/20 hover:bg-light/40 backdrop-blur-sm"
                    />
                </div>
            )}
        </div>,
        document.body,
    );
};

export default ViewerModal;
