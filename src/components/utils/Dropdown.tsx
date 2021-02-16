import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const DropdownItem: React.FC = (props) => (
    <div className="block px-5 py-3 text-md font-medium text-white md:text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md" role="menuitem">
        {props.children}
    </div>
);

export const Dropdown: React.FC<{ titleName?: string, className?: string }> = (props) => {
    const [shown, setShown] = useState(false);
    return (
        <div className={`relative inline-block text-left ${props.className}`} onMouseEnter={() => setShown(true)} onMouseLeave={() => setShown(false)}>
            <button draggable="false" type="button" onClick={() => setShown(old => !old)} className="inline-flex w-full px-4 py-2 text-xl text-white hover:text-blue-light transition-colors duration-200 focus:outline-none" id="options-menu" aria-haspopup="true" aria-expanded="true">
                {props.titleName}
                <FontAwesomeIcon className="h-5 w-5 self-center ml-1.5" icon={faChevronDown} size="xs" />
            </button>

            {shown && <div className="block md:absolute mx-4 md:min-w-max rounded-lg bg-blue-dark-contrast md:bg-white md:ring-1 md:ring-gray-500 ring-opacity-5 ">
                <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {props.children}
                </div>
            </div>}
        </div>
    );
};
