import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode
    center?: boolean
    className?: string
}
const Container = ({ className, center, children }: ContainerProps) => {
    const handleCenter = () => {
        if (center) {
            return 'flex flex-col justify-center';
        }
        return '';
    };
    return (
        <div className={`container mx-auto px-8 ${className} ${handleCenter()}`}>
            {children}
        </div>
    );
};

export default Container;
