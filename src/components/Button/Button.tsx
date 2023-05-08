type ButtonProps = {
    label: string | object;
    theme?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void
}
const Button = ({ label, theme, className, onClick }: ButtonProps) => (
    <button
        type="button"
        onClick={onClick}
        className={`
        ${theme === 'primary' ? 'bg-primary-accent text-secondary' : 'bg-secondary-accent-light text-light'} 
        h-10 w-52 rounded-md px-4 py-1 font-body text-lg font-semibold
        ${className}
    `}
    >
        {label}
    </button>
);

export default Button;
