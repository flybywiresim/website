import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface AlertProps {
    type: 'note' | 'caution' | 'danger';
    className?: string;
    children: ReactNode;
}

export const Alert = ({ type, className, children }: AlertProps) => {
    let borderColor: string;
    switch (type) {
    default:
    case 'note': {
        borderColor = 'border-l-cyan';
        break;
    }
    case 'caution': {
        borderColor = 'border-l-utility-amber';
        break;
    }
    case 'danger': {
        borderColor = 'border-l-red';
        break;
    }
    }

    return (
        <div className={twMerge('flex flex-col gap-3 p-5 border-l-8 bg-navy text-quasi-white rounded', borderColor, className)}>
            {children}
        </div>
    );
};
