import { twMerge } from 'tailwind-merge';

type TextTileSmallProps = {
    title: string;
    description?: string;
    className?: string;
    isActive?: boolean;
};

/**
 * Text Tile (Variant 2)
 * Simple tile with solid cyan background (#02dbfe) and bold navy text (#14213a)
 */

const TextTileSmall = ({ title, description = '', className, isActive = false }: TextTileSmallProps) => (
    <div
        className={twMerge(
            'relative h-96 w-full overflow-hidden rounded-3xl border-2 border-transparent transition-colors duration-150',
            !isActive && 'hover:border-[#00cae5]',
            className,
        )}
    >
        {/* Background - Absolutely positioned to cover full tile */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #01cfff, #02dbfe)' }} />

        {/* Two fixed containers: square (w-96) + right side (w-[calc(56/3rem)]) */}
        <div className="relative flex w-full justify-between items-end">
            {/* Fixed 1:1 Square Container */}
            <div className="relative flex h-96 w-96 shrink-0 items-end justify-center overflow-hidden rounded-l-3xl">
                {/* Text label */}
                <span
                    className="relative z-10 p-4 md:p-6 font-display font-bold text-left text-lg md:text-xl"
                    style={{ color: '#14213a' }}
                >
                    {title}
                </span>
            </div>

            {/* Right Side - Fixed width: total (128/3rem) - left (24rem) = 56/3rem */}
            <div className="flex h-96 w-[18.67rem] shrink-0 grow-0 min-w-0">
                {description && (
                    <span className="block p-4 md:p-6 font-display text-right text-base md:text-lg lg:text-xl text-white/80" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                        {description}
                    </span>
                )}
            </div>
        </div>
    </div>
);

export default TextTileSmall;
