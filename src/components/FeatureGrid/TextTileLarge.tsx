import { twMerge } from 'tailwind-merge';

type TextTileLargeProps = {
    text: string;
    className?: string;
};

/**
 * Text Tile (Variant 2)
 * Square aspect ratio tile with gradient background (bottom: #0f1620, top: #172844)
 * Bold white text
 */

const TextTileLarge = ({ text, className }: TextTileLargeProps) => (
    <div
        className={twMerge(
            'flex items-center justify-center p-6 rounded-3xl h-full w-full',
            className,
        )}
        style={{ background: 'linear-gradient(to top, #0f1620, #172844)' }}
    >
        <span className="font-display font-bold text-white text-center text-lg md:text-xl lg:text-2xl">
            {text}
        </span>
    </div>
);

export default TextTileLarge;
