import Image from 'next/legacy/image';
import { twMerge } from 'tailwind-merge';

type ImageTileProps = {
    text: string;
    imageSrc: string;
    imageAlt?: string;
    className?: string;
};

/**
 * Background Image Tile
 * Tile with background image and simple white text at the bottom
 */

const ImageTile = ({ text, imageSrc, imageAlt = '', className }: ImageTileProps) => (
    <div
        className={twMerge(
            'relative flex items-end rounded-3xl overflow-hidden h-full w-full',
            className,
        )}
    >
        <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="relative z-10 p-4 md:p-6 font-display font-bold text-white text-base md:text-lg lg:text-xl">
            {text}
        </span>
    </div>
);

export default ImageTile;
