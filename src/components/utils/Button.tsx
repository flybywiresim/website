import { ReactNode } from 'react';

type ButtonProps = {
    className?: string,
    children: ReactNode,
    onClick?: any
};

export const Button = (props: ButtonProps) => (
    <button
        onClick={props.onClick}
        type="button"
        className={`rounded-full py-3 text-xl font-bold shadow-md-dark-contrast transition focus:outline-none ${props.className}`}
    >
        {props.children}
    </button>
);
