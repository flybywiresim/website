import React, { useState, useCallback, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type CarouselProps = {
    children: ReactNode;
    theme?: 'light' | 'dark';
    className?: string;
};

const NavigationButton = ({
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
        className={twMerge(
            'group relative flex h-12 w-12 items-center justify-center rounded-full transition-all hover:opacity-80 text-light',
            className,
        )}
        aria-label={direction === 'previous' ? 'Previous slide' : 'Next slide'}
    >
        <svg
            className={twMerge(
                'h-6 w-6 transition-transform group-hover:scale-110',
                direction === 'previous' ? '' : 'rotate-180',
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </button>
);

const DotIndicator = ({
    isActive,
    onClick,
    activeColor,
    inactiveColor,
}: {
    isActive: boolean;
    onClick: () => void;
    activeColor: string;
    inactiveColor: string;
}) => (
    <button
        type="button"
        onClick={onClick}
        className={twMerge(
            'h-2 rounded-full transition-all duration-300',
            isActive ? `w-8 ${activeColor}` : `w-2 ${inactiveColor} hover:opacity-75`,
        )}
        aria-label={`Go to slide ${isActive ? 'active' : 'inactive'}`}
    />
);

/**
 * Carousel - A responsive horizontal carousel component for displaying tiles
 * All tiles are visible in a row as squares, with the active tile (left-most) as focus
 */
const Carousel = ({ children, theme = 'dark', className }: CarouselProps) => {
    const slides = Array.isArray(children) ? children : [children];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const handleGoTo = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    const handleTheme = () => {
        switch (theme) {
        case 'light':
            return 'bg-light text-dark';
        case 'dark':
            return 'bg-secondary text-light';
        default:
            return 'text-light';
        }
    };

    const buttonBg = theme === 'light' ? 'bg-secondary' : 'bg-light';
    const dotActiveColor = theme === 'light' ? 'bg-dark' : 'bg-light';
    const dotInactiveColor = theme === 'light' ? 'bg-dark/30' : 'bg-light/30';

    // Calculate translateX offset: each inactive tile is 24rem width + gap-4 (1rem) = 25rem per tile
    const translateX = `-${currentIndex * 25}rem`;

    return (
        <div className={twMerge('flex flex-col gap-8', handleTheme(), className)}>

            {/* Carousel Viewport */}
            <div className="shrink-0 relative w-full overflow-visible">
                <div
                    className="flex h-96 w-full items-center gap-4 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(${translateX})` }}
                >
                    {slides.map((slide, index) => {
                        const isActive = index === currentIndex;
                        // When active: 16:9 aspect ratio (height h-96 = 24rem, width = 24rem * 16/9 = 42.67rem)
                        // When inactive: 1:1 aspect ratio (width = height = 24rem = w-96)
                        return (
                            <div
                                key={index}
                                className={twMerge(
                                    'shrink-0 transition-all duration-500 ease-in-out h-96 cursor-pointer',
                                    isActive && 'pointer-events-none',
                                )}
                                style={{ width: isActive ? 'calc(24rem * 16 / 9)' : '24rem' }}
                                onClick={() => handleGoTo(index)}
                            >
                                {React.cloneElement(slide as React.ReactElement<{ isActive?: boolean }>, { isActive })}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="shrink-0 grid grid-cols-[1fr_auto_1fr] items-center">
                {/* Dot Indicators - Horizontally Centered */}
                {slides.length > 1 && (
                    <div className="flex items-center justify-center gap-2 col-start-2">
                        {slides.map((_, index) => (
                            <DotIndicator
                                key={index}
                                isActive={currentIndex === index}
                                onClick={() => handleGoTo(index)}
                                activeColor={dotActiveColor}
                                inactiveColor={dotInactiveColor}
                            />
                        ))}
                    </div>
                )}

                {/* Buttons - Far Right */}
                <div className="flex items-center gap-6 justify-self-end col-start-3">
                    <NavigationButton onClick={handlePrevious} direction="previous" className={buttonBg} />
                    <NavigationButton onClick={handleNext} direction="next" className={buttonBg} />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
