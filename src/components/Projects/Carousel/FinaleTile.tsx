import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import useReducedMotion from '../../../hooks/useReducedMotion';

type FinaleTileProps = {
    title: string;
    features?: string[];
    description?: string;
    className?: string;
    isActive?: boolean;
};

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
 */
const FinaleTile = ({
    title,
    features,
    className,
    isActive = false,
}: FinaleTileProps) => {
    const reducedMotion = useReducedMotion();
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if (isActive) {
            if (reducedMotion) {
                setAnimateIn(true);
                return () => {};
            }
            const timer = setTimeout(() => setAnimateIn(true), 500);
            return () => clearTimeout(timer);
        }
        setAnimateIn(false);
        return () => {};
    }, [isActive, reducedMotion]);

    return (
        <div
            className={twMerge(
                'group relative flex h-full overflow-hidden rounded-3xl border-2 border-transparent',
                className,
            )}
        >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(45deg, #02cefd, #01cfff, #02cefd)' }} />

            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <span
                    className={twMerge(
                        'font-bold text-center text-xl text-[#0a1929] motion-safe:transition-transform motion-safe:duration-300',
                        !isActive && 'motion-safe:can-hover:group-hover:scale-105',
                    )}
                >
                    {title}
                </span>
            </div>

            {features?.map((feature, index) => {
                const delay = animateIn ? index * 100 : 0;
                return (
                    <span
                        key={index}
                        className="absolute z-10 hidden md:block text-xl font-bold text-[#0a1929]"
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
