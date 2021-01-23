import React from "react";

const c = { btn: 'focus:outline-none inline-flex justify-center w-full rounded-full py-3 text-lg' };

export function Button(props: {className ?: string, name ?: string}) {
    return(
        <button type="button" className={`${c.btn} ${props.className}`}>{props.name}</button>
    );
}