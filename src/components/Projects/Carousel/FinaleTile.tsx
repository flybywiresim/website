import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type FinaleTileProps = {
    title: string;
    features?: string[];
    description?: string;
    className?: string;
    fullWidthWhenActive?: boolean;
    isActive?: boolean;
};

/**
 * Finale Tile
 * Cyan gradient background with navy text.
 * Title centered, feature labels scattered around it when active.
 */
const FinaleTile = ({
    title,
    features,
    description,
    className,
    fullWidthWhenActive = true, // eslint-disable-line
    isActive = false,
}: FinaleTileProps) => {
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => setAnimateIn(true), 500);
            return () => clearTimeout(timer);
        }
        setAnimateIn(false);
        return () => {};
    }, [isActive]);

    return (
        <div
            className={twMerge(
                'group relative flex h-full overflow-hidden rounded-3xl border-2 border-transparent',
                className,
            )}
        >
            {/* Background */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(45deg, #02cefd, #01cfff, #02cefd)' }} />

            {/* Center title */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <span
                    className={twMerge(
                        'font-bold text-center text-xl text-[#0a1929] transition-transform duration-300',
                        !isActive && 'group-hover:scale-105',
                    )}
                >
                    {title}
                </span>
            </div>

            {/* Feature labels */}
            {features?.map((feature, index) => {
                const positions = [
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
                const pos = positions[index % positions.length];
                return (
                    <span
                        key={index}
                        className="absolute z-10 hidden md:block text-xl font-bold text-[#0a1929]"
                        style={{
                            ...pos,
                            opacity: animateIn ? 0.5 : 0,
                            transform: animateIn ? 'scale(1)' : 'scale(0)',
                            transition: animateIn
                                ? `opacity 0.1s ease-out ${index * 80}ms, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 80}ms`
                                : 'opacity 0.1s ease-out, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
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
