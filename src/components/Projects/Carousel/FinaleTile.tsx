import { Children, type ReactNode, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import useReducedMotion from '../../../hooks/useReducedMotion';

type FinaleTileProps = {
    title: string;
    features?: string[];
    description?: string;
    background?: string;
    backgroundImage?: string;
    className?: string;
    isActive?: boolean;
    children?: ReactNode;
};

const DEFAULT_BACKGROUND = 'linear-gradient(45deg, #02cefd, #01cfff, #02cefd)';

const FEATURE_POSITIONS = [
    { top: '15%', left: '20%' },
    { top: '15%', right: '20%' },
    { top: '45%', left: '10%' },
    { top: '45%', right: '10%' },
    { bottom: '15%', left: '20%' },
    { bottom: '15%', right: '20%' },
    { top: '30%', left: '15%' },
    { top: '30%', right: '15%' },
    { top: '62%', left: '15%' },
    { top: '62%', right: '15%' },
];

/**
 * Finale Tile
 * Simple title text. Features animate in sequentially when active.
 * Children (e.g. a call to action) are revealed beneath the title once the tile has expanded.
 * `background` takes any CSS background; text colour can be set through `className`.
 * `backgroundImage` is drawn blurred beneath `background`, so pair it with a translucent `background` to tint it.
 */
const FinaleTile = ({
    title,
    features,
    backgroundImage,
    background = backgroundImage ? undefined : DEFAULT_BACKGROUND,
    className,
    isActive = false,
    children,
}: FinaleTileProps) => {
    const reducedMotion = useReducedMotion();
    const [animateIn, setAnimateIn] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isActive) {
            if (reducedMotion) {
                setAnimateIn(true);
                return () => {};
            }
            const timer = setTimeout(() => setAnimateIn(true), 250);
            return () => clearTimeout(timer);
        }
        setAnimateIn(false);
        return () => {};
    }, [isActive, reducedMotion]);

    useEffect(() => {
        const content = contentRef.current;
        if (content) content.style.width = isActive ? '' : `${content.offsetWidth}px`;
    }, [isActive]);

    return (
        <div
            className={twMerge(
                'group relative flex h-full overflow-hidden rounded-3xl border-2 border-transparent text-[#0a1929]',
                isActive && 'cursor-default',
                className,
            )}
        >
            {backgroundImage && (
                <div
                    className="absolute inset-0 scale-110 bg-cover bg-center blur-md"
                    style={{ backgroundImage: `url("${backgroundImage}")` }}
                />
            )}
            {background && <div className="absolute inset-0" style={{ background }} />}

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                <span
                    className={twMerge(
                        'font-bold text-xl motion-safe:transition-transform motion-safe:duration-300',
                        !isActive && 'motion-safe:can-hover:group-hover:scale-105',
                    )}
                >
                    {title}
                </span>
                {children && (
                    <div
                        className={twMerge(
                            'grid motion-safe:transition-[grid-template-rows,visibility] motion-safe:duration-500 motion-safe:ease-in-out',
                            animateIn ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]',
                        )}
                    >
                        <div className="min-h-0">
                            <div ref={contentRef} className="flex flex-col items-center gap-4 pt-4">
                                {Children.toArray(children).map((child, index) => (
                                    <div
                                        key={index}
                                        className={twMerge(
                                            'motion-safe:transition-[transform,opacity] motion-safe:ease-in-out',
                                            animateIn ? 'translate-y-0 opacity-100 motion-safe:duration-500' : 'translate-y-2 opacity-0 motion-safe:duration-200',
                                        )}
                                        style={{ transitionDelay: animateIn ? `${index * 300}ms` : undefined }}
                                    >
                                        {child}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {features?.map((feature, index) => {
                const delay = animateIn ? index * 100 : 0;
                return (
                    <span
                        key={index}
                        className="absolute z-10 hidden md:block text-xl font-bold"
                        style={{
                            ...FEATURE_POSITIONS[index % FEATURE_POSITIONS.length],
                            opacity: animateIn ? 0.65 : 0,
                            transform: animateIn || reducedMotion ? 'scale(1)' : 'scale(0)',
                            transition: reducedMotion
                                ? 'none'
                                : `opacity 0.1s ease-out ${delay}ms, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                        }}
                    >
                        {feature}
                    </span>
                );
            })}
        </div>
    );
};

export default FinaleTile;
