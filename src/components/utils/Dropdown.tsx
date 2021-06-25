import { ReactNode, useState } from 'react';
import { IconChevronDown } from '@tabler/icons';

type DropdownProps = {
    className?: string,
    titleName: string,
    children: ReactNode
}

export const DropdownItem = (props: { children: ReactNode }) => (
    <li className="py-1 px-4 text-gray-200 hover:text-teal md:text-gray-700 md:hover:text-gray-900 md:hover:bg-gray-100">
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
                className="py-5 font-semibold"
            >
                <span className={`inline-flex group hover:text-teal ${isShown && 'text-teal'}`}>
                    {props.titleName}
                    <IconChevronDown className={`${isShown && '-rotate-180'} transition duration-200 self-center`} size={20} />
                </span>
                {isShown && (
                    <div className="relative">
                        <ul className="flex right-0 flex-col gap-y-3 py-1 mt-4 w-56 rounded-md md:absolute md:bg-white md:ring-1 md:shadow-lg ring-black/10">
                            {props.children}
                        </ul>
                    </div>
                )}
            </span>
        </li>
    );
};
