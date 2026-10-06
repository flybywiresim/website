import { Children, cloneElement, useState, useCallback, ReactNode, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { CarouselControls, useCarouselTheme } from './CarouselPrimitives';
import useScrollReveal from '../../../hooks/useScrollReveal';

type FeatureCarouselProps = {
    children: ReactNode;
    title?: string;
    theme?: 'light' | 'dark';
    className?: string;
};

const INACTIVE_W_REM = 24;
const GAP_REM = 1;

/**
 * FeatureCarousel — Tiles expand from 1:1 to 16:9 when active on md+ viewports.
 * On sm viewports, tiles remain locked at 1:1 (w-96).
 */
const FeatureCarousel = ({ children, title, theme = 'dark', className }: FeatureCarouselProps) => {
    const slides = Children.toArray(children);
    const total = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
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

    const translateX = -(currentIndex * (INACTIVE_W_REM + GAP_REM));
    const { containerTheme } = useCarouselTheme(theme);

    return (
        <div ref={revealRef} className={twMerge('flex flex-col gap-6', containerTheme, className)}>
            {title && (
                <h2 className={twMerge(!revealed && 'motion-safe:opacity-0', shouldAnimate && 'reveal-fade-in')}>{title}</h2>
            )}
            <div className="w-full">
                <div
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Feature carousel"
                    className="flex h-96 items-center gap-4 motion-safe:will-change-transform motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-in-out"
                    style={{ transform: `translateX(${translateX}rem)`, width: '100%' }}
                >
                    {slides.map((slide, index) => {
                        const isActive = index === currentIndex;
                        const isFinale = index === total - 1;
                        return (
                            <div
                                key={index}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`Slide ${index + 1} of ${total}`}
                                aria-hidden={!isActive}
                                className={twMerge(
                                    'shrink-0 h-96 w-96',
                                    !revealed && 'reveal-hidden',
                                    shouldAnimate && 'reveal-animate',
                                    isActive ? 'cursor-default' : 'cursor-pointer',
                                    isActive && (isFinale ? 'w-full' : 'md:w-[42.6667rem]'),
                                    hasMounted && 'motion-safe:transition-[width] motion-safe:duration-500 motion-safe:ease-in-out',
                                )}
                                style={{ animationDelay: `${200 + index * 100}ms` }}
                                onClick={() => handleGoTo(index)}
                            >
                                {cloneElement(
                                    slide as React.ReactElement<{ isActive?: boolean }>,
                                    { isActive },
                                )}
                            </div>
                        );
                    })}
                </div>

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
