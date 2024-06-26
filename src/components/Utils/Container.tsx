import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = {
    children: ReactNode
    display?: CSSStyleDeclaration['display']
    className?: string
}
const Container = ({ className, display, children }: ContainerProps) => (
    <div className={twMerge('container mx-auto px-8', className, display)}>
        {children}
    </div>
);

export default Container;
