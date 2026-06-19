import React, { useState, useCallback, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { CarouselControls, useCarouselTheme, useMediaQuery } from './CarouselPrimitives';

type FeatureCarouselProps = {
    children: ReactNode;
    theme?: 'light' | 'dark';
    className?: string;
};

const INACTIVE_W_REM = 24; // w-96
const GAP_REM = 1; // gap-4
const EXPAND_BREAKPOINT = '(min-width: 768px)'; // md breakpoint

/**
 * FeatureCarousel — Tiles expand from 1:1 to 16:9 when active on md+ viewports.
 * On sm viewports, tiles remain locked at 1:1 (w-96).
 */
const FeatureCarousel = ({ children, theme = 'dark', className }: FeatureCarouselProps) => {
    const slides = React.Children.toArray(children);
    const total = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const shouldExpand = useMediaQuery(EXPAND_BREAKPOINT);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
    }, [total]);

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    const handleGoTo = useCallback((index: number) => {
        setCurrentIndex(index % total);
    }, [total]);

    // translateX always uses w-96 (24rem) since tiles are always w-96 in the DOM.
    // The active tile only visually expands via width style on md+, but translate stays consistent.
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
                    style={{ transform: `translateX(${translateX}rem)` }}
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
                                    'shrink-0 h-96 cursor-pointer transition-[width] duration-500 ease-in-out',
                                    'w-96',
                                    isActive && shouldExpand ? 'md:w-[42.6667rem]' : '',
                                )}
                                onClick={() => handleGoTo(index)}
                            >
                                {React.cloneElement(slide as React.ReactElement<{ isActive?: boolean }>, { isActive })}
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Description */}
                {(() => {
                    const activeSlide = slides[currentIndex] as React.ReactElement | undefined;
                    const desc = activeSlide?.props?.description;
                    if (!desc) return null;

                    return (
                        <div
                            className={twMerge(
                                'overflow-hidden md:hidden mt-6',
                                theme === 'light' ? 'text-dark' : 'text-light',
                            )}
                            style={{ width: `${INACTIVE_W_REM}rem` }}
                        >
                            <div
                                key={currentIndex}
                                className="w-full h-full rounded-none leading-relaxed animate-[fade-in_0.5s_ease-in-out]"
                            >
                                {desc}
                            </div>
                        </div>
                    );
                })()}
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
