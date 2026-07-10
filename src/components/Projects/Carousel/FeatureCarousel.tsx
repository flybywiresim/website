import { Children, cloneElement, useState, useCallback, ReactNode, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { CarouselControls, useCarouselTheme } from './CarouselPrimitives';

type FeatureCarouselProps = {
    children: ReactNode;
    theme?: 'light' | 'dark';
    className?: string;
};

const INACTIVE_W_REM = 24; // w-96
const GAP_REM = 1; // gap-4

/**
 * FeatureCarousel — Tiles expand from 1:1 to 16:9 when active on md+ viewports.
 * On sm viewports, tiles remain locked at 1:1 (w-96).
 */
const FeatureCarousel = ({ children, theme = 'dark', className }: FeatureCarouselProps) => {
    const slides = Children.toArray(children);
    const total = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

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

    const translateX = -(currentIndex * (INACTIVE_W_REM + GAP_REM));
    const { containerTheme } = useCarouselTheme(theme);

    return (
        <div className={twMerge('flex flex-col gap-6', containerTheme, className)}>
            {/* Viewport */}
            <div className="w-full">
                <div
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Feature carousel"
                    className="flex h-96 items-center gap-4 will-change-transform transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(${translateX}rem)`, width: '100%' }}
                >
                    {slides.map((slide, index) => {
                        const isActive = index === currentIndex;
                        const isFinale = index === total - 1;
                        // Prioritise the first slide for LCP on initial render.
                        const priority = index === 0;
                        return (
                            <div
                                key={index}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`Slide ${index + 1} of ${total}`}
                                aria-hidden={!isActive}
                                className={twMerge(
                                    'shrink-0 h-96 w-96',
                                    isActive ? 'cursor-default' : 'cursor-pointer',
                                    isActive && (isFinale ? 'w-full' : 'md:w-[42.6667rem]'),
                                    hasMounted && 'transition-width duration-500 ease-in-out',
                                )}
                                onClick={() => handleGoTo(index)}
                            >
                                {cloneElement(
                                    slide as React.ReactElement<{ isActive?: boolean; priority?: boolean }>,
                                    { isActive, priority },
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Description */}
                <div
                    className={twMerge(
                        'md:hidden mt-6 px-5 flex items-center justify-center',
                        theme === 'light' ? 'text-dark' : 'text-light',
                    )}
                    style={{ height: '12.5rem', overflowY: 'auto' }}
                >
                    {(slides[currentIndex] as React.ReactElement | undefined)?.props?.description}
                </div>
            </div>

            {/* Controls */}
            <CarouselControls
                total={total}
                currentIndex={currentIndex}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onGoTo={handleGoTo}
                theme={theme}
            />
        </div>
    );
};

export default FeatureCarousel;
