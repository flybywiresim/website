import Image from 'next/legacy/image';
import { twMerge } from 'tailwind-merge';

type ImageTileProps = {
    title: string;
    imageSrc: string;
    imageAlt?: string;
    description?: string;
    className?: string;
    isActive?: boolean;
};

/**
 * Background Image Tile
 * Tile with background image and simple white text at the bottom
 */

const ImageTile = ({ title, imageSrc, imageAlt = '', description = '', className, isActive = false }: ImageTileProps) => (
    <div
        className={twMerge(
            'relative h-96 w-full overflow-hidden rounded-3xl border-2 border-transparent transition-colors duration-150',
            !isActive && 'hover:border-[#00cae5]',
            className,
        )}
    >
        {/* Background - Absolutely positioned to cover full tile */}
        <div className="absolute inset-0">
            <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Two fixed containers: square (w-96) + right side (w-[calc(56/3rem)]) */}
        <div className="relative flex w-full justify-between items-end">
            {/* Fixed 1:1 Square Container */}
            <div className="relative flex h-96 w-96 shrink-0 items-end overflow-hidden rounded-l-3xl">
                <span className="relative z-10 p-4 md:p-6 font-display font-bold text-left text-white text-base md:text-lg lg:text-xl">
                    {title}
                </span>
            </div>

            {/* Right Side - Fixed width: total (128/3rem) - left (24rem) = 56/3rem */}
            <div className="flex h-96 w-[18.67rem] shrink-0 min-w-0">
                <span className="p-4 md:p-6 text-right text-white">
                    {description}
                </span>
            </div>
        </div>
    </div>
);

export default ImageTile;
