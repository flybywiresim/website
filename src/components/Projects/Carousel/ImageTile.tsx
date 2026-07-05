import Image from 'next/image';
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
}: ImageTileProps) => (
    <div
        className={twMerge(
            'group relative flex h-96 w-full overflow-hidden rounded-3xl border-2 border-transparent',
            className,
        )}
    >
        {/* Background image — zooms in on hover */}
        <div className="absolute inset-0">
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

        {/* Content overlay — flex row, always full height of parent */}
        <div className="relative flex h-full w-full items-end">
            {/* Left 1:1 square — always visible, shrinks to content on mobile */}
            <div className="relative flex h-full w-96 shrink-0 items-end rounded-l-3xl">
                <span className="relative z-10 p-4 md:p-6 font-display font-bold text-left text-white text-base md:text-lg lg:text-xl">
                    {title}
                </span>
            </div>

            {/* Right side — fixed width, overflows outside when inactive */}
            <div className="relative flex h-full min-w-[18.6667rem]">
                {/* Gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/25 pointer-events-none" />
                {description && (
                    <span className="relative z-10 p-4 md:p-6 text-right text-white" style={{ textShadow: '0 0px 20px rgba(0, 0, 0, 1)' }}>
                        {description}
                    </span>
                )}
            </div>
        </div>
    </div>
);

export default ImageTile;
