import { twMerge } from 'tailwind-merge';
import { BOTTOM_GRADIENT, DESCRIPTION_BACKDROP, TileImage } from './CarouselPrimitives';
import { buildWatermarkBg } from './watermarkBg';

type WatermarkTileProps = {
    title: string;
    imageSrc: string;
    imageAlt?: string;
    watermarkText?: string;
    description?: string;
    className?: string;
    isActive?: boolean;
    gradient?: boolean;
};

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
    gradient = false,
}: WatermarkTileProps) => (
    <div
        className={twMerge(
            'group relative flex h-full w-full overflow-hidden rounded-3xl',
            className,
        )}
        style={{
            background: gradient
                ? 'radial-gradient(20rem 12rem at 12rem 12rem, rgba(2, 219, 254, 0.18) 0%, transparent 100%), linear-gradient(to top, #0f1620, #172844)'
                : 'linear-gradient(to top, #0f1620, #172844)',
        }}
    >
        {watermarkText && (
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none select-none"
                style={{
                    ...buildWatermarkBg(watermarkText),
                    transform: 'rotate(-45deg) scale(4.5)',
                    transformOrigin: '12rem 12rem',
                }}
            />
        )}

        <div
            className={twMerge(
                'absolute left-0 top-0 h-96 w-96 md:w-[42.6667rem] motion-safe:transition-transform motion-safe:duration-300',
                !isActive && 'motion-safe:can-hover:group-hover:scale-105',
            )}
            style={{ transformOrigin: '12rem center' }}
        >
            <TileImage src={imageSrc} alt={imageAlt} alignLeft />
        </div>

        <div className={`absolute inset-0 pointer-events-none ${BOTTOM_GRADIENT}`} />

        <div className="relative flex h-full w-full items-end">
            <div className="relative flex h-full w-96 shrink-0 items-end rounded-l-3xl">
                <span className="relative z-10 p-4 md:p-6 font-display font-bold text-left text-base md:text-lg lg:text-xl text-[#02dbfe]">
                    {title}
                </span>
            </div>

            <div className="relative flex h-full min-w-[18.6667rem]">
                {description && (
                    <p
                        className={twMerge('relative z-10 p-4 md:p-6 text-right text-white', DESCRIPTION_BACKDROP, isActive && 'md:before:opacity-100')}
                    >
                        {description}
                    </p>
                )}
            </div>
        </div>
    </div>
);

export default WatermarkTile;
