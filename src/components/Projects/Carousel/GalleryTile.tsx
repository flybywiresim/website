import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type GalleryTileProps = {
    imageSrc: string;
    imageAlt?: string;
    className?: string;
    onClick?: () => void;
    isActive?: boolean;
};

/**
 * Gallery Tile
 * Simple image-only tile that expands from 1:1 to 16:9 in the gallery.
 * overflow-hidden ensures rounded-3xl clips the image.
 */
const GalleryTile = ({
    imageSrc,
    imageAlt = '',
    className,
    onClick,
    isActive = false,
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
        <div className="absolute inset-0 overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 24rem, 43rem"
            />
        </div>
    </div>
);

export default GalleryTile;
