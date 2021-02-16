import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function DropdownItem(props: { name: string, link: string }): JSX.Element {
    return (
        <Link to={props.link} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{props.name}</Link>
    );
}
export const Dropdown: React.FC<{ titleName?: string, className?: string }> = (props) => {
    const [shown, setShown] = useState(false);
    return (
        <div className={`relative inline-block text-left ${props.className}`}>
            <div>
                <button draggable="false" type="button" onClick={() => setShown(old => !old)} className="inline-flex justify-center w-full px-4 py-2 text-xl text-white hover:text-blue-light transition-colors duration-200 focus:outline-none" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    {props.titleName}
                    {/*Heroicon name: solid/chevron-down*/}
                    <svg className="h-5 w-5 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {shown && <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {props.children}
                </div>
            </div>}
        </div>
    );
};
