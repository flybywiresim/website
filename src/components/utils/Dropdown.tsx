import { ReactNode, useState } from 'react';
import { IconChevronDown } from '@tabler/icons';

type DropdownProps = {
    className?: string,
    titleName: string,
    children: ReactNode
}

export const DropdownItem = (props: { children: ReactNode }) => (
    <li className="px-4 py-1 hover:bg-gray-100 text-gray-700 hover:text-gray-900">
        {props.children}
    </li>
);

export const Dropdown = (props: DropdownProps) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <li className={`list-none cursor-pointer ${props.className}`} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <span
                draggable="false"
                onClick={() => setIsShown(!isShown)}
                className="font-semibold py-5"
            >
                <span className={`inline-flex group hover:text-teal ${isShown && 'text-teal'}`}>
                    {props.titleName}
                    <IconChevronDown className={`${isShown && '-rotate-180'} transition duration-200 self-center`} size={20} />
                </span>
                {isShown && (
                    <div className="relative" onMouseLeave={() => setIsShown(false)}>
                        <ul className="flex w-56 right-0 flex-col ring-1 ring-black/10 shadow-lg rounded-md gap-y-3 py-1 mt-4 absolute bg-white">
                            {props.children}
                        </ul>
                    </div>
                )}
            </span>
        </li>
    );
};
