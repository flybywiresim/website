import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type ScreenshotTileProps = {
    imageSrc: string;
    imageAlt?: string;
    title?: string;
    className?: string;
    onClick?: () => void;
};

/**
 * Screenshot Tile
 * Simple image-only tile that expands from 1:1 to 16:9 in the gallery.
 * overflow-hidden ensures rounded-3xl clips the image.
 */
const ScreenshotTile = ({
    imageSrc,
    imageAlt = '',
    title,
    className,
    onClick,
}: ScreenshotTileProps) => (
    <div
        className={twMerge(
            'relative h-96 w-full overflow-hidden rounded-3xl cursor-pointer',
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
        <div className="absolute inset-0 h-96 w-96 md:w-[42.6667rem]">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 24rem, 43rem"
            />
        </div>
        {title && (
            <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <span className="font-display font-bold text-left text-white text-base md:text-lg lg:text-xl">
                    {title}
                </span>
            </div>
        )}
    </div>
);

export default ScreenshotTile;
