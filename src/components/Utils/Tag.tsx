export interface TagProps {
    category: 'Update' | 'News' | 'Aircraft' | 'Software';
}

const handleCategory = (category: string) => {
    switch (category) {
    case 'UPDATE':
        return 'border-yellow-500 bg-yellow-500/20 text-yellow-500';
    default:
        return 'border-primary bg-primary/20 text-primary';
    }
};

const Tag = ({ category }: TagProps) => (
    <div className={`max-w-min rounded-lg py-0.5 px-4 ${handleCategory(category)}`}>
        <small>
            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
        </small>
    </div>
);

export default Tag;
