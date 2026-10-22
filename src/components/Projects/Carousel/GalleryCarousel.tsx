import { Children, cloneElement, useState, useCallback, useEffect, useRef, ReactElement, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { CarouselControls, useCarouselTheme } from './CarouselPrimitives';
import ViewerModal, { type ViewerImage } from '../../Utils/ViewerModal';
import useScrollReveal from '../../../hooks/useScrollReveal';

type GalleryCarouselProps = {
    children: ReactNode;
    title?: string;
    theme?: 'light' | 'dark';
    className?: string;
};

type SlideElement = ReactElement<{
    imageSrc?: string;
    imageAlt?: string;
    blurDataURL?: string;
    onClick?: () => void;
    isActive?: boolean;
}>;

const INACTIVE_W_REM = 24;
const GAP_REM = 1;

const GalleryCarousel = ({ children, title, theme = 'dark', className }: GalleryCarouselProps) => {
    const slides = Children.toArray(children) as SlideElement[];
    const total = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalStartIndex, setModalStartIndex] = useState<number | null>(null);
    const [isHoveringLink, setIsHoveringLink] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const [hasMounted, setHasMounted] = useState(false);
    const { ref: revealRef, revealed, shouldAnimate } = useScrollReveal<HTMLDivElement>();

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
    }, [total]);

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    const handleGoTo = useCallback((index: number) => {
        setCurrentIndex(index % total);
    }, [total]);

    const imageSlides = slides.flatMap((slide, index) => (slide.props?.imageSrc ? [index] : []));

    const viewerImages: ViewerImage[] = imageSlides.map((index) => {
        const { imageSrc, imageAlt, blurDataURL } = slides[index].props;
        return { src: imageSrc!, alt: imageAlt || 'Screenshot', blurDataURL };
    });

    const handleTileClick = (index: number) => {
        if (index !== currentIndex) {
            setCurrentIndex(index);
            return;
        }
        const viewerIndex = imageSlides.indexOf(index);
        if (viewerIndex !== -1) setModalStartIndex(viewerIndex);
    };

    const getSlideElement = (viewerIndex: number) => (
        trackRef.current?.children[imageSlides[viewerIndex]]?.firstElementChild ?? null
    ) as HTMLElement | null;

    const handleCloseModal = useCallback(() => setModalStartIndex(null), []);

    const translateX = -(currentIndex * (INACTIVE_W_REM + GAP_REM));
    const { containerTheme } = useCarouselTheme(theme);

    return (
        <div ref={revealRef} className={twMerge('flex flex-col gap-6', containerTheme, className)}>
            {title && (
                <h2 className={twMerge(!revealed && 'motion-safe:opacity-0', shouldAnimate && 'reveal-fade-in')}>{title}</h2>
            )}
            <div className="relative w-full">
                <div
                    ref={trackRef}
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Gallery carousel"
                    className="flex h-96 w-full items-center gap-4 motion-safe:will-change-transform motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-in-out"
                    style={{ transform: `translateX(${translateX}rem)` }}
                    onPointerOver={(e) => setIsHoveringLink(!!(e.target as Element).closest('a'))}
                    onPointerLeave={() => setIsHoveringLink(false)}
                >
                    {slides.map((slide, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <div
                                key={index}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`Slide ${index + 1} of ${total}`}
                                aria-hidden={!isActive}
                                className={twMerge(
                                    'shrink-0 h-96 cursor-pointer w-96',
                                    !revealed && 'reveal-hidden',
                                    shouldAnimate && 'reveal-animate',
                                    isActive && (slide.props?.imageSrc ? 'md:w-[42.6667rem]' : 'w-full'),
                                    hasMounted && 'motion-safe:transition-[width] motion-safe:duration-500 motion-safe:ease-in-out',
                                )}
                                style={{ animationDelay: `${200 + index * 100}ms` }}
                                onClick={() => handleTileClick(index)}
                            >
                                {cloneElement(slide, { onClick: () => handleTileClick(index), isActive })}
                            </div>
                        );
                    })}
                </div>
            </div>

            <CarouselControls
                total={total}
                currentIndex={currentIndex}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onGoTo={handleGoTo}
                theme={theme}
                paused={modalStartIndex !== null || isHoveringLink}
            />

            {modalStartIndex !== null && (
                <ViewerModal
                    images={viewerImages}
                    startIndex={modalStartIndex}
                    getSourceElement={getSlideElement}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default GalleryCarousel;
