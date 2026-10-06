import { twMerge } from 'tailwind-merge';
import { FALLBACK_BLUR, TileImage } from './CarouselPrimitives';

type GalleryTileProps = {
    imageSrc: string;
    imageAlt?: string;
    className?: string;
    onClick?: () => void;
    isActive?: boolean;
    blurDataURL?: string;
};

/**
 * Gallery Tile
 * Image tile that expands from 1:1 to 16:9 in the gallery carousel.
 */
const GalleryTile = ({
    imageSrc,
    imageAlt = '',
    className,
    onClick,
    isActive = false,
    blurDataURL,
}: GalleryTileProps) => (
    <div
        className={twMerge(
            'relative h-96 w-full overflow-hidden rounded-3xl',
            isActive ? 'cursor-zoom-in' : 'cursor-pointer',
            className,
        )}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick?.();
            }
        }}
    >
        <div className="absolute inset-0 overflow-hidden motion-safe:transition-transform motion-safe:duration-300 motion-safe:can-hover:hover:scale-105">
            <TileImage src={imageSrc} alt={imageAlt} blurDataURL={blurDataURL ?? FALLBACK_BLUR} />
        </div>
    </div>
);

export default GalleryTile;
