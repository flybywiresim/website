import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type AspectRatio = '1:1' | '2:1' | '1:2' | '3:1' | '1:3' | '3:2' | '2:3' | '4:1' | '1:4' | '4:3' | '3:4';

type TileSectionProps = {
    children: ReactNode;
    /**
     * Flex direction for child tiles
     * - 'row': horizontal layout (side by side)
     * - 'col': vertical layout (stacked)
     */
    direction?: 'row' | 'col';
    /**
     * Fixed aspect ratio for the section container
     * Format: 'width:height'
     */
    ratio?: AspectRatio;
    /**
     * Gap between child elements
     */
    gap?: 'none' | 'sm' | 'md' | 'lg';
    /**
     * Additional class names
     */
    className?: string;
};

const aspectRatioMap: Record<AspectRatio, string> = {
    '1:1': 'aspect-[1/1]',
    '2:1': 'aspect-[2/1]',
    '1:2': 'aspect-[1/2]',
    '3:1': 'aspect-[3/1]',
    '1:3': 'aspect-[1/3]',
    '3:2': 'aspect-[3/2]',
    '2:3': 'aspect-[2/3]',
    '4:1': 'aspect-[4/1]',
    '1:4': 'aspect-[1/4]',
    '4:3': 'aspect-[4/3]',
    '3:4': 'aspect-[3/4]',
};

const gapMap: Record<string, string> = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
};

/**
 * TileSection - A flexbox container with fixed aspect ratio for tile layouts
 *
 * Controls the available space for child tiles with a fixed aspect ratio.
 * Children should use flex-1, flex-[2], etc. to control their relative sizes.
 *
 * @example
 * // Horizontal row with 2:1 aspect ratio
 * <TileSection direction="row" ratio="2:1">
 *     <TextTileLarge className="flex-1" />
 *     <TextTileSmall className="flex-1" />
 * </TileSection>
 *
 * @example
 * // Nested sections for complex layouts
 * <TileSection direction="row" ratio="3:1">
 *     <ImageTile className="flex-[2]" />
 *     <TileSection direction="col" className="flex-1">
 *         <TextTileSmall />
 *         <TextTileSmall />
 *     </TileSection>
 * </TileSection>
 */
const TileSection = ({
    children,
    direction = 'row',
    ratio = '1:1',
    gap = 'md',
    className,
}: TileSectionProps) => (
    <div
        className={twMerge(
            'flex flex-1 min-w-0',
            direction === 'row' ? 'flex-row' : 'flex-col',
            aspectRatioMap[ratio],
            gapMap[gap],
            className,
        )}
    >
        {children}
    </div>
);

export default TileSection;
