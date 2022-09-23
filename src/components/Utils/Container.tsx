import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode
    display?: CSSStyleDeclaration['display']
    className?: string
}
const Container = ({ className, display, children }: ContainerProps) => (
    <div className={`
        container mx-auto px-8 
        ${className} 
        ${display}`}
    >
        {children}
    </div>
);

export default Container;
