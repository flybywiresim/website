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
    <h2 className="flex items-center">{children}</h2>
);

export const CardBody: FC = ({ children }) => (
    <p className="mb-4">
        {children}
    </p>
);
