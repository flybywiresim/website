import { twMerge } from 'tailwind-merge';
import { BOTTOM_GRADIENT, DESCRIPTION_BACKDROP, FALLBACK_BLUR, TileImage } from './CarouselPrimitives';

type ImageTileProps = {
    title: string;
    imageSrc: string;
    imageAlt?: string;
    description?: string;
    className?: string;
    isActive?: boolean;
    blurDataURL?: string;
};

/**
 * Background Image Tile
 * 1:1 square area on the left (title), description revealed on the right when active.
 * The root MUST be `overflow-hidden` so the image respects `rounded-3xl`.
 */
const ImageTile = ({
    title,
    imageSrc,
    imageAlt = '',
    description = '',
    className,
    isActive = false,
    blurDataURL,
}: ImageTileProps) => (
    <div
        className={twMerge(
            'group relative flex h-96 w-full overflow-hidden rounded-3xl border-2 border-transparent',
            className,
        )}
    >
        <div className="absolute inset-0">
            <div
                className={twMerge(
                    'absolute left-0 top-0 h-96 w-96 md:w-[42.6667rem] motion-safe:transition-transform motion-safe:duration-300',
                    !isActive && 'motion-safe:can-hover:group-hover:scale-105',
                )}
                style={{ transformOrigin: '12rem center' }}
            >
                <TileImage src={imageSrc} alt={imageAlt} blurDataURL={blurDataURL ?? FALLBACK_BLUR} alignLeft />
            </div>
        </div>
        <div className={`absolute inset-0 pointer-events-none ${BOTTOM_GRADIENT}`} />

        <div className="relative flex h-full w-full items-end">
            <div className="relative flex h-full w-96 shrink-0 items-end rounded-l-3xl">
                <span className="relative z-10 p-4 md:p-6 font-display font-bold text-left text-white text-base md:text-lg lg:text-xl">
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

export default ImageTile;
