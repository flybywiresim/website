export interface TagProps {
    category: 'Update' | 'News' | 'Aircraft' | 'Software' | 'Latest' ;
}

const handleCategory = (category: string) => {
    switch (category) {
    case 'UPDATE' || 'Update':
        return 'border-primary bg-primary/20 text-primary';
    case 'Latest' || 'LATEST':
        return 'border-green-500 bg-green-500/20 text-green-500';
    default:
        return 'border-primary bg-primary/20 text-primary';
    }
};

const Tag = ({ category }: TagProps) => (
    <a className={`flex h-8 max-w-min items-center justify-center rounded-lg border py-0.5 px-4 ${handleCategory(category)}`}>
        {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
    </a>
);

export default Tag;
