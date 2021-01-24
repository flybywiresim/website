import React from 'react';

const c = {
    container: 'mx-auto'
};
export function Container(props: {children: any, className?: string}): JSX.Element {
    return(
        <div className={`${props.className} ${c.container}`}>
            {props.children}
        </div>
    );
}
