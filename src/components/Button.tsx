import React from 'react';

type ButtonProps = Partial<{
    className: string,
    children: any
}>;

export function Button(props: ButtonProps): JSX.Element {
    return(
        <button type="button" className={`focus:outline-none inline-flex justify-center rounded-full py-3 text-lg shadow-md-dark-contrast ${props.className}`}>{props.children}</button>
    );
}
