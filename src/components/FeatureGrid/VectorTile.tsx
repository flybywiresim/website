import Image from 'next/legacy/image';
import { twMerge } from 'tailwind-merge';

type VectorTileProps = {
    text: string;
    vectorSrc: string;
    vectorAlt?: string;
    watermarkText?: string;
    className?: string;
};

/**
 * Vector Graphic Tile
 * Tile with vector graphic as main visual, cyan bold text in bottom right,
 * and repeating diagonal text watermark in background
 */

const VectorTile = ({
    text,
    vectorSrc,
    vectorAlt = '',
    watermarkText = 'FLYBYWIRE',
    className,
}: VectorTileProps) => {
    // Generate repeated watermark text for the diagonal pattern
    const watermarkRows = Array(12).fill(null);
    const watermarkCols = Array(8).fill(null);

    return (
        <div
            className={twMerge(
                'relative flex items-end justify-end rounded-3xl overflow-hidden h-full w-full',
                className,
            )}
            style={{ background: 'linear-gradient(to top, #0f1620, #172844)' }}
        >
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
                className="relative z-10 p-4 md:p-6 font-display font-bold text-right text-base md:text-lg lg:text-xl"
                style={{ color: '#02dbfe' }}
            >
                {text}
            </span>
        </div>
    );
};

export default VectorTile;
