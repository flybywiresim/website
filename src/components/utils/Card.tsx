import { FC } from 'react';

type cardProps = {
    className?: string,
    bgColour: string,
}
export const Card: FC<cardProps> = (props) => (
    <div className={`bg-${props.bgColour} border-t-4 px-page py-6 max-w-2xl rounded-lg ${props.className}`}>
        {props.children}
    </div>
);

export const CardTitle: FC = ({ children }) => (
    <h1 className="text-4xl font-bold">{children}</h1>
);

export const CardBody: FC = ({ children }) => (
    <p className="mt-4 mb-6">
        {children}
    </p>
);
