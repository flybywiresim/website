type ButtonProps = {
    label: string
    theme?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void
}
const Button = ({ label, theme, className, onClick }: ButtonProps) => (
    <button
        type="button"
        onClick={onClick}
        className={`
        ${theme === 'primary' ? 'bg-primary-accent text-secondary' : 'bg-secondary-accent text-light'} 
        w-full rounded-md px-8 py-2 font-body text-lg font-semibold
        ${className}
    `}
    >
        {label}
    </button>
);

export default Button;
