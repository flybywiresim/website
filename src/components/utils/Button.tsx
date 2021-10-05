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
        className={`focus:outline-none transition rounded-full py-3 text-xl shadow-md-dark-contrast font-bold ${props.className}`}
    >
        {props.children}
    </button>
);
