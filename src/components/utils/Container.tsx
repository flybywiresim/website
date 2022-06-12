import { ReactNode } from 'react';

const Container = (props: {className?: string, children: ReactNode}) => (
    <div className={`px-page ${props.className}`}>
        {props.children}
    </div>
);

export default Container;
