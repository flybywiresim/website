import { twMerge } from 'tailwind-merge';

type TextTileSecondaryProps = {
    title: string;
    description?: string;
    className?: string;
    isActive?: boolean;
};

/**
 * Text Tile (Variant 2)
 * Cyan gradient background with navy text.
 * 1:1 square on the left, description revealed on the right when active.
 */
const TextTileSecondary = ({
    title,
    description = '',
    className,
    isActive = false,
}: TextTileSecondaryProps) => (
    <div
        className={twMerge(
            'relative flex h-full w-full overflow-hidden rounded-3xl border-2 border-transparent transition-colors duration-150',
            !isActive && 'hover:border-[#00cae5]',
            className,
        )}
    >
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #01cfff, #02dbfe)' }} />

        {/* Content overlay */}
        <div className="relative flex h-full w-full items-end">
            {/* Left 1:1 square */}
            <div className="relative flex h-full w-96 shrink-0 items-end justify-center overflow-hidden rounded-l-3xl">
                <span className="relative z-10 p-4 md:p-6 font-display font-bold text-left text-lg md:text-xl" style={{ color: '#14213a' }}>
                    {title}
                </span>
            </div>

            {/* Right side — fixed width, overflows outside when inactive */}
            <div className="flex h-full min-w-[18.6667rem]">
                {description && (
                    <span className="block p-4 md:p-6 font-display text-right text-base md:text-lg lg:text-xl text-white/80" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                        {description}
                    </span>
                )}
            </div>
        </div>
    </div>
);

export default TextTileSecondary;
