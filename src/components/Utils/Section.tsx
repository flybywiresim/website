import { ReactNode } from 'react';

type SectionProps = {
    id?: string
    theme: 'light' | 'dark';
    className?: string
    children?: ReactNode
}
const Section = ({ id, theme, className, children }: SectionProps) => {
    const handleTheme = () => {
        switch (theme) {
        case 'light':
            return 'bg-light text-dark';
        case 'dark':
            return 'bg-dark text-light';
        default:
            return 'bg-light text-dark';
        }
    };
    return (
        <section id={id} className={`${handleTheme()} ${className}`}>
            {children}
        </section>
    );
};

export default Section;
