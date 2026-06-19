import Image from 'next/image';
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

const watermarkRows = Array.from({ length: 12 });
const watermarkCols = Array.from({ length: 8 });

/**
 * Vector Graphic Tile
 * Dark gradient with vector graphic, cyan text, and diagonal watermark.
 * 1:1 square on the left, description revealed on the right when active.
 */
const VectorTile = ({
    title,
    vectorSrc,
    vectorAlt = '',
    watermarkText = 'FLYBYWIRE',
    description = '',
    className,
    isActive = false,
}: VectorTileProps) => (
    <div
        className={twMerge(
            'relative flex h-full w-full overflow-hidden rounded-3xl border-2 border-transparent transition-colors duration-150',
            !isActive && 'hover:border-[#00cae5]',
            className,
        )}
    >
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0f1620, #172844)' }}>
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

        {/* Content overlay */}
        <div className="relative flex h-full w-full items-end">
            {/* Left 1:1 square */}
            <div className="relative flex h-full w-96 shrink-0 items-end justify-end overflow-hidden rounded-l-3xl">
                {/* Vector graphic */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-3/4 h-3/4">
                        <Image
                            src={vectorSrc}
                            alt={vectorAlt}
                            fill
                            className="object-contain"
                            sizes="24rem"
                        />
                    </div>
                </div>

                <span className="relative z-10 p-4 md:p-6 font-display font-bold text-left text-base md:text-lg lg:text-xl" style={{ color: '#02dbfe' }}>
                    {title}
                </span>
            </div>

            {/* Right side — fixed width, overflows outside when inactive */}
            <div className="flex h-full min-w-[18.6667rem]">
                {description && (
                    <span className="block p-4 md:p-6 font-display text-right text-white" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                        {description}
                    </span>
                )}
            </div>
        </div>
    </div>
);

export default VectorTile;
