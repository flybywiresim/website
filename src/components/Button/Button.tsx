type ButtonProps = {
    label: string
    theme: 'primary' | 'secondary';
    onClick?: () => void
}
// TODO: Add onClick handler
const Button = ({ label, theme }: ButtonProps) => (
    <button type="button" className={`${theme === 'primary' ? 'bg-primary text-secondary' : 'bg-secondary-accent text-light'} text-md w-full rounded-md px-4 py-2 font-body font-semibold xs:px-8 xs:text-lg`}>
        {label}
    </button>
);

export default Button;
