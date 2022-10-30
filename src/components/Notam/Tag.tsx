export interface TagProps {
    category: 'UPDATE' | 'NEWS';
}

const handleCategory = (category: string) => {
    switch (category) {
    case 'UPDATE':
        return 'border-green-500 bg-green-500/20 text-green-500';
    case 'NEWS':
        return 'border-primary bg-primary/20 text-primary';
    default:
        return '';
    }
};

const Tag = ({ category }: TagProps) => (
    <div className={`max-w-min rounded-lg border py-1 px-4 ${handleCategory(category)}`}>
        <h5>
            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
        </h5>
    </div>
);

export default Tag;
