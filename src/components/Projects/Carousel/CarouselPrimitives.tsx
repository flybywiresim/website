import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

export type CarouselTheme = 'light' | 'dark';

// Fallback blur placeholder

const FALLBACK_BLUR_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="8" height="8" fill="#0f1620"/></svg>';

export const FALLBACK_BLUR = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(FALLBACK_BLUR_SVG)}`;

export const useCarouselTheme = (theme: CarouselTheme) => {
    const isLight = theme === 'light';
    return {
        buttonBg: isLight ? 'bg-secondary' : 'bg-light',
        dotActiveColor: isLight ? 'bg-dark' : 'bg-light',
        dotInactiveColor: isLight ? 'bg-dark/30' : 'bg-light/30',
        containerTheme: isLight ? 'bg-light text-dark' : 'bg-secondary text-light',
    };
};

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);

        const listener = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
};

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
            aria-hidden="true"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </button>
);

export const DotIndicator = ({
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
        aria-label={isActive ? 'Current slide' : 'Go to slide'}
        aria-current={isActive ? 'true' : undefined}
    />
);

export const CarouselControls = ({
    total,
    currentIndex,
    onPrevious,
    onNext,
    onGoTo,
    theme,
    showNavButtons = true,
    className,
}: {
    total: number;
    currentIndex: number;
    onPrevious: () => void;
    onNext: () => void;
    onGoTo: (index: number) => void;
    theme: CarouselTheme;
    showNavButtons?: boolean;
    className?: string;
}) => {
    const { buttonBg, dotActiveColor, dotInactiveColor } = useCarouselTheme(theme);

    return (
        <div className={twMerge('shrink-0 grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center', className)}>
            {total > 1 && (
                <div className="flex items-center gap-2 md:col-start-2 md:justify-center">
                    {Array.from({ length: total }).map((_, index) => (
                        <DotIndicator
                            key={index}
                            isActive={currentIndex === index}
                            onClick={() => onGoTo(index)}
                            activeColor={dotActiveColor}
                            inactiveColor={dotInactiveColor}
                        />
                    ))}
                </div>
            )}

            {showNavButtons && (
                <div className="flex items-center gap-6 justify-self-end md:col-start-3">
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
