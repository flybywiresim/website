import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type WatermarkTileProps = {
    title: string;
    imageSrc: string;
    imageAlt?: string;
    watermarkText?: string;
    description?: string;
    className?: string;
    isActive?: boolean;
};

const watermarkRows = Array.from({ length: 12 });
const watermarkCols = Array.from({ length: 8 });

/**
 * Watermark Tile
 * Dark gradient with image, cyan text, and diagonal watermark.
 * 1:1 square on the left, description revealed on the right when active.
 */
const WatermarkTile = ({
    title,
    imageSrc,
    imageAlt = '',
    watermarkText = '',
    description = '',
    className,
    isActive = false,
}: WatermarkTileProps) => (
    <div
        className={twMerge(
            'group relative flex h-full w-full overflow-hidden rounded-3xl',
            className,
        )}
    >
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0f1620, #172844)' }}>
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none select-none"
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

        {/* Image — zooms in on hover */}
        <div className="absolute inset-0 overflow-hidden">
            <div
                className={twMerge(
                    'absolute left-0 top-0 h-96 w-96 md:w-[42.6667rem] transition-transform duration-300',
                    !isActive && 'group-hover:scale-105',
                )}
                style={{ transformOrigin: '12rem center' }}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover object-left"
                    sizes="(max-width: 768px) 24rem, 43rem"
                />
            </div>
        </div>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Content overlay */}
        <div className="relative flex h-full w-full items-end">
            {/* Left 1:1 square */}
            <div className="relative flex h-full w-96 shrink-0 items-end rounded-l-3xl">
                <span className="relative z-10 p-4 md:p-6 font-display font-bold text-left text-base md:text-lg lg:text-xl text-[#02dbfe]">
                    {title}
                </span>
            </div>

            {/* Right side — fixed width, overflows outside when inactive */}
            <div className="relative flex h-full min-w-[18.6667rem]">
                {/* Gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/25 pointer-events-none" />
                {description && (
                    <span className="relative z-10 p-4 md:p-6 font-display text-right text-white" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                        {description}
                    </span>
                )}
            </div>
        </div>
    </div>
);

export default WatermarkTile;
