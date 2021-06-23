import { ReactNode, useState } from 'react';
import { IconChevronDown } from '@tabler/icons';

type DropdownProps = {
    className?: string,
    titleName: string,
    children: ReactNode
}

export const DropdownItem = (props: {children: ReactNode}) => (
    <li className="px-4 py-1 hover:bg-gray-100 text-gray-700 hover:text-gray-900">
        {props.children}
    </li>
);

export const Dropdown = (props: DropdownProps) => {
    const [shown, setShown] = useState(false);
    return (
        <li className={`list-none ${props.className}`} onMouseEnter={() => setShown(shown)} onMouseLeave={() => setShown(!shown)}>
            <span
                draggable="false"
                onClick={() => setShown((old) => !old)}
                className="font-semibold"
            >
                <span className={`inline-flex group hover:text-teal ${shown && 'text-teal'}`}>
                    {props.titleName}
                    <IconChevronDown className="self-center" size={20} />
                </span>
                {shown && (
                    <div className="relative">
                        <ul className="flex w-56 right-0 flex-col ring-1 ring-black/10 shadow-lg rounded-md gap-y-3 py-1 mt-3 absolute bg-white">
                            {props.children}
                        </ul>
                    </div>
                )}
            </span>
        </li>
    );
};
