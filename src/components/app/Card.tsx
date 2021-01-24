import React from 'react';

export function Card(props: {children?: any, className?: string, imgSrc?: string}): JSX.Element {
    return(
        <div className={`${props.className || 'bg-white'} relative px-4 py-10 shadow-lg sm:rounded-2xl rounded-3xl sm:px-16 sm:py-5 max-w-lg mx-5 my-5 transition hover:bg-gray-900 transform hover:scale-105 hover:shadow-2xl-light `}>
            <div className="max-w-md mx-auto">
                <img src={props.imgSrc} alt=""/>
                {props.children}
            </div>
        </div>
    );
}

export function Title(props: {children?: any, className?: string}): JSX.Element {
    return(
        <div className="py-3 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
            <h1 className={`${props.className} text-3xl font-medium text-center`}>{props.children}</h1>
        </div>
    );
}

export function Body(props: {children?: any, className?: string}): JSX.Element {
    return(
        <div className="divide-y divide-white">
            <div className={`${props.className} text-center pt-6 text-base leading-6 sm:text-lg sm:leading-7`}>
                <p>{props.children}</p>
            </div>
        </div>
    );
}
