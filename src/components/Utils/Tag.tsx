import { twMerge } from 'tailwind-merge';

export interface TagProps {
    category: 'Update' | 'News' | 'Aircraft' | 'Software' | 'Latest',
    className?: string
    ;
}

const handleCategory = (category: string) => {
    switch (category) {
    case 'UPDATE' || 'Update':
        return 'border-yellow-500 bg-yellow-500/20 text-yellow-500';
    case 'Latest' || 'LATEST':
        return 'border-green-500 bg-green-500/20 text-green-500';
    default:
        return 'border-primary bg-primary/20 text-primary';
    }
};

const Tag = ({ category, className }: TagProps) => (
    <a className={twMerge(`flex h-8 max-w-min items-center justify-center rounded-lg border py-0.5 px-4 ${handleCategory(category)}`, className)}>
        {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
    </a>
);

export default Tag;
