import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import useReducedMotion from '../../../hooks/useReducedMotion';

export type CarouselTheme = 'light' | 'dark';

const FALLBACK_BLUR_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="8" height="8" fill="#0f1620"/></svg>';

export const FALLBACK_BLUR = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(FALLBACK_BLUR_SVG)}`;

export const DESCRIPTION_BACKDROP = 'before:pointer-events-none before:absolute before:-inset-12 before:-z-10 before:rounded-3xl before:bg-black/60 before:blur-3xl '
    + 'before:opacity-0 motion-safe:before:transition-opacity motion-safe:before:duration-500';

export const BOTTOM_GRADIENT = 'bg-gradient-to-t from-black/60 via-transparent to-transparent';

export const BlurPlaceholder = ({ src, className }: { src: string; className?: string }) => (
    <div
        className={twMerge('absolute inset-0 bg-cover bg-center', className)}
        style={{ backgroundImage: `url("${src}")`, filter: 'blur(20px)', transform: 'scale(1.2)' }}
    />
);

export const TileImage = ({
    src,
    alt,
    blurDataURL,
    alignLeft = false,
}: {
    src: string;
    alt: string;
    blurDataURL?: string;
    alignLeft?: boolean;
}) => {
    const [phase, setPhase] = useState<'loading' | 'fading' | 'done'>('loading');

    return (
        <>
            {blurDataURL && phase !== 'done' && <BlurPlaceholder src={blurDataURL} className={alignLeft ? 'bg-left' : undefined} />}
            <Image
                src={src}
                alt={alt}
                fill
                className={twMerge(
                    'object-cover',
                    alignLeft && 'object-left',
                    phase === 'loading' ? 'opacity-0' : 'animate-[reveal-fade-in_500ms_ease-in-out_forwards]',
                )}
                sizes="(max-width: 768px) 24rem, 43rem"
                onLoad={() => setPhase('fading')}
                onAnimationEnd={() => setPhase('done')}
            />
        </>
    );
};

export const useCarouselTheme = (theme: CarouselTheme) => {
    const isLight = theme === 'light';
    return {
        buttonBase: 'bg-navy-light border-2 border-navy-light text-quasi-white',
        buttonHover: 'hover:bg-transparent hover:border-cyan-dark hover:text-cyan-dark',
        dotActiveColor: isLight ? 'bg-light' : 'bg-quasi-white',
        dotInactiveColor: isLight ? 'bg-light/30' : 'bg-quasi-white/30',
        containerTheme: isLight ? 'bg-light text-dark' : 'bg-secondary text-light',
    };
};

const AUTOPLAY_INTERVAL = 5000;

const BUTTON_BASE = 'group relative flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-150 text-light';

export const NavigationButton = ({
    onClick,
    direction,
    className,
}: {
    onClick: () => void;
    direction: 'previous' | 'next';
    className?: string;
}) => (
    <button
        type="button"
        onClick={onClick}
        className={twMerge(BUTTON_BASE, className)}
        aria-label={direction === 'previous' ? 'Previous slide' : 'Next slide'}
    >
        <svg
            className={twMerge('h-4 w-4', direction === 'next' && 'rotate-180')}
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
        >
            <path d="M10.3 1.3a1 1 0 0 1 0 1.4L5.4 8l4.9 5.3a1 1 0 1 1-1.4 1.4l-5.6-6a1 1 0 0 1 0-1.4l5.6-6a1 1 0 0 1 1.4 0z" />
        </svg>
    </button>
);

export const DotIndicator = ({
    isActive,
    onClick,
    activeColor,
    inactiveColor,
    progress,
}: {
    isActive: boolean;
    onClick: () => void;
    activeColor: string;
    inactiveColor: string;
    progress?: { running: boolean; onComplete: () => void };
}) => (
    <button
        type="button"
        onClick={onClick}
        className="flex items-center justify-center p-1.5"
        aria-label={isActive ? 'Current slide' : 'Go to slide'}
        aria-current={isActive ? 'true' : undefined}
    >
        <span
            className={twMerge(
                'relative block h-2 overflow-hidden rounded-full motion-safe:transition-[width] motion-safe:duration-300',
                isActive ? 'w-16' : 'w-2 hover:opacity-75',
                inactiveColor,
            )}
        >
            {isActive && progress && (
                <span
                    className={twMerge('absolute left-0 top-0 bottom-0 rounded-full', activeColor)}
                    style={{
                        animation: `carousel-progress ${AUTOPLAY_INTERVAL}ms linear`,
                        animationPlayState: progress.running ? 'running' : 'paused',
                        animationFillMode: 'forwards',
                    }}
                    onAnimationEnd={progress.onComplete}
                />
            )}
        </span>
    </button>
);

export const CarouselControls = ({
    total,
    currentIndex,
    onPrevious,
    onNext,
    onGoTo,
    theme,
    showNavButtons = true,
    paused = false,
    className,
}: {
    total: number;
    currentIndex: number;
    onPrevious: () => void;
    onNext: () => void;
    onGoTo: (index: number) => void;
    theme: CarouselTheme;
    showNavButtons?: boolean;
    paused?: boolean;
    className?: string;
}) => {
    const { buttonBase, buttonHover, dotActiveColor, dotInactiveColor } = useCarouselTheme(theme);
    const buttonBg = `${buttonBase} ${buttonHover}`;
    const reducedMotion = useReducedMotion();
    const [isPlaying, setIsPlaying] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const controlsRef = useRef<HTMLDivElement>(null);
    const onNextRef = useRef(onNext);
    onNextRef.current = onNext;
    const autoplayActive = isPlaying && isVisible && !paused && !reducedMotion;

    useEffect(() => {
        const el = controlsRef.current;
        if (!el) return undefined;
        const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0 });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const handleAutoStep = useCallback(() => onNextRef.current(), []);

    return (
        <div ref={controlsRef} className={twMerge('shrink-0 grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center', className)}>
            {!reducedMotion && (
                <div className="flex items-center md:col-start-1">
                    <button
                        type="button"
                        onClick={() => setIsPlaying((p) => !p)}
                        className={twMerge(BUTTON_BASE, buttonBg)}
                        aria-label={isPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                    >
                        <svg className="h-4 w-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            {isPlaying ? (
                                <>
                                    <rect x="1" y="0" width="5" height="16" rx="1.5" />
                                    <rect x="10" y="0" width="5" height="16" rx="1.5" />
                                </>
                            ) : (
                                <path d="M3.5 2.2a1 1 0 0 1 1.5-.86l9.2 5.3a1 1 0 0 1 0 1.72l-9.2 5.3a1 1 0 0 1-1.5-.86z" />
                            )}
                        </svg>
                    </button>
                </div>
            )}

            {total > 1 && (
                <div className="hidden md:flex items-center md:col-start-2 md:justify-center">
                    <div className={twMerge('flex h-12 items-center rounded-full px-3', buttonBase)}>
                        {Array.from({ length: total }).map((_, index) => (
                            <DotIndicator
                                key={index}
                                isActive={currentIndex === index}
                                onClick={() => onGoTo(index)}
                                activeColor={dotActiveColor}
                                inactiveColor={dotInactiveColor}
                                progress={currentIndex === index ? { running: autoplayActive, onComplete: handleAutoStep } : undefined}
                            />
                        ))}
                    </div>
                </div>
            )}

            {showNavButtons && (
                <div className="flex items-center gap-4 justify-self-end md:col-start-3">
                    <NavigationButton
                        onClick={onPrevious}
                        direction="previous"
                        className={buttonBg}
                    />
                    <NavigationButton
                        onClick={onNext}
                        direction="next"
                        className={buttonBg}
                    />
                </div>
            )}
        </div>
    );
};
