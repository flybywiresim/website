import React from 'react';

const c = {
    container: 'mx-auto px-4 sm:px-6 lg:px-8'
};
export function Container(props: {children: any, className?: string}): JSX.Element {
    return(
        <div className={`${props.className} ${c.container}`}>
            {props.children}
        </div>
    );
}
