import Image from 'next/legacy/image';
import { twMerge } from 'tailwind-merge';

type VectorTileProps = {
    title: string;
    vectorSrc: string;
    vectorAlt?: string;
    watermarkText?: string;
    description?: string;
    className?: string;
    isActive?: boolean;
};

/**
 * Vector Graphic Tile
 * Tile with vector graphic as main visual, cyan bold text in bottom right,
 * and repeating diagonal text watermark in background
 */

const VectorTile = ({
    title,
    vectorSrc,
    vectorAlt = '',
    watermarkText = 'FLYBYWIRE',
    description = '',
    className,
    isActive = false,
}: VectorTileProps) => {
    // Generate repeated watermark text for the diagonal pattern
    const watermarkRows = Array(12).fill(null);
    const watermarkCols = Array(8).fill(null);

    return (
        <div
            className={twMerge(
                'relative h-96 w-full overflow-hidden rounded-3xl border-2 border-transparent transition-colors duration-150',
                !isActive && 'hover:border-[#00cae5]',
                className,
            )}
        >
            {/* Background - Absolutely positioned to cover full tile */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0f1620, #172844)' }}>
                {/* Diagonal watermark background */}
                <div
                    className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none select-none"
                    style={{ transform: 'rotate(-45deg) scale(4)' }}
                >
                    <div className="flex flex-col gap-0 items-center justify-center h-full">
                        {watermarkRows.map((_, rowIdx) => (
                            <div
                                key={rowIdx}
                                className="flex gap-3 whitespace-nowrap"
                                style={{ marginLeft: rowIdx % 2 === 0 ? '0' : '4rem' }}
                            >
                                {watermarkCols.map((_, colIdx) => (
                                    <svg
                                        key={colIdx}
                                        className="text-xs md:text-sm"
                                        style={{
                                            display: 'inline-block',
                                            verticalAlign: 'middle',
                                            overflow: 'visible',
                                        }}
                                        width={watermarkText.length * 8}
                                        height="16"
                                    >
                                        <text
                                            x="0"
                                            y="12"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="0.5"
                                            style={{
                                                fontFamily: 'Arial, Helvetica, sans-serif',
                                                fontWeight: 'bold',
                                                fontSize: 'inherit',
                                            }}
                                        >
                                            {watermarkText}
                                        </text>
                                    </svg>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Two fixed containers: square (w-96) + right side (w-[calc(56/3rem)]) */}
            <div className="relative flex w-full justify-between items-end">
                {/* Fixed 1:1 Square Container */}
                <div className="relative flex h-96 w-96 shrink-0 items-end justify-end overflow-hidden rounded-l-3xl">
                    {/* Vector graphic */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="relative w-3/4 h-3/4">
                            <Image
                                src={vectorSrc}
                                alt={vectorAlt}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>

                    {/* Text label */}
                    <span
                        className="relative z-10 p-4 md:p-6 font-display font-bold text-left text-base md:text-lg lg:text-xl"
                        style={{ color: '#02dbfe' }}
                    >
                        {title}
                    </span>
                </div>

                {/* Right Side - Fixed width: total (128/3rem) - left (24rem) = 56/3rem */}
                <div className="flex h-96 w-[18.67rem] shrink-0 grow-0 min-w-0">
                    {description && (
                        <span className="p-4 md:p-6 font-display text-right text-white" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                            {description}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VectorTile;
