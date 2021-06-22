import { ReactNode } from 'react';

type CardProps = {
    className?: string,
    bgColour: string,
    children: ReactNode
}
export const Card = (props: CardProps) => (
    <div className={`bg-${props.bgColour} border-t-4 px-page py-6 max-w-2xl rounded-lg ${props.className}`}>
        {props.children}
    </div>
);

export const CardTitle = ({ children }: CardProps) => (
    <h2 className="flex items-center">{children}</h2>
);

export const CardBody = ({ children }: CardProps) => (
    <p className="mb-8">
        {children}
    </p>
);
