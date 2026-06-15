import { twMerge } from 'tailwind-merge';

type TextTileSmallProps = {
    text: string;
    className?: string;
};

/**
 * Text Tile (Variant 1)
 * Simple small tile with solid cyan background (#02dbfe) and bold navy text (#14213a)
 */

const TextTileSmall = ({ text, className }: TextTileSmallProps) => (
    <div
        className={twMerge(
            'flex items-center justify-center p-4 rounded-3xl h-full w-full',
            'min-h-[80px]',
            className,
        )}
        style={{ background: 'linear-gradient(to bottom right, #01cfff, #02dbfe)' }}
    >
        <span
            className="font-display font-bold text-center text-lg md:text-xl"
            style={{ color: '#14213a' }}
        >
            {text}
        </span>
    </div>
);

export default TextTileSmall;
