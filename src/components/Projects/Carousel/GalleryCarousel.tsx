import { Children, cloneElement, useState, useCallback, useEffect, useRef, ReactNode } from 'react';
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

const INACTIVE_W_REM = 24;
const GAP_REM = 1;

const GalleryCarousel = ({ children, title, theme = 'dark', className }: GalleryCarouselProps) => {
    const slides = Children.toArray(children);
    const total = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalStartIndex, setModalStartIndex] = useState<number | null>(null);
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

    const handleTileClick = useCallback((index: number) => {
        if (index === currentIndex) {
            setModalStartIndex(index);
        } else {
            setCurrentIndex(index);
        }
    }, [currentIndex]);

    const getSlideElement = useCallback(
        (index: number) => (trackRef.current?.children[index]?.firstElementChild as HTMLElement | null | undefined) ?? null,
        [],
    );

    const handleCloseModal = useCallback(() => setModalStartIndex(null), []);

    const translateX = -(currentIndex * (INACTIVE_W_REM + GAP_REM));
    const { containerTheme } = useCarouselTheme(theme);

    const viewerImages: ViewerImage[] = slides.map((slide) => {
        const { imageSrc, imageAlt, blurDataURL } = (slide as React.ReactElement).props;
        return { src: imageSrc, alt: imageAlt || 'Screenshot', blurDataURL };
    });

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
                    className="flex h-96 items-center gap-4 motion-safe:will-change-transform motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-in-out"
                    style={{ transform: `translateX(${translateX}rem)`, width: 'max-content' }}
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
                                    isActive && 'md:w-[42.6667rem]',
                                    hasMounted && 'motion-safe:transition-[width] motion-safe:duration-500 motion-safe:ease-in-out',
                                )}
                                style={{ animationDelay: `${200 + index * 100}ms` }}
                                onClick={() => handleTileClick(index)}
                            >
                                {cloneElement(
                                    slide as React.ReactElement<{ onClick?: () => void; isActive?: boolean }>,
                                    { onClick: () => handleTileClick(index), isActive },
                                )}
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
                paused={modalStartIndex !== null}
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
