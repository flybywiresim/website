type ButtonProps = {
    label: string
    theme: 'primary' | 'secondary';
    onClick?: () => void
}
const Button = ({ label, theme, onClick }: ButtonProps) => (
    <button type="button" className={`${theme === 'primary' ? 'bg-primary text-secondary' : 'bg-secondary-accent text-light'} w-full rounded-md px-8 py-2 font-body text-lg font-semibold`}>
        {label}
    </button>
);

export default Button;
