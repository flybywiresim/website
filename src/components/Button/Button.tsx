import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';

export enum ButtonType {
  Neutral,
  Emphasis,
  Positive,
  Caution,
  Danger,
}

export interface ButtonProps {
  theme?: 'primary' | 'secondary' | 'positive' | 'caution' | 'danger' | 'discord';
  label?: string | JSX.Element;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  link?: string;
}

const Button: FC<ButtonProps> = ({
    theme = 'primary',
    label,
    disabled = false,
    className = '',
    onClick = () => {},
    link,
    children,
}) => {
    const router = useRouter();

    const handleClick = () => {
        if (link) {
            router.push(link);
        }
        onClick();
    };
    let buttonClass;
    switch (theme) {
    default:
    case 'primary':
        buttonClass = 'button-emphasis';
        break;
    case 'secondary':
        buttonClass = 'button-neutral';
        break;
    case 'positive':
        buttonClass = 'button-positive';
        break;
    case 'caution':
        buttonClass = 'button-caution';
        break;
    case 'danger':
        buttonClass = 'button-danger';
        break;
    case 'discord':
        buttonClass = 'button-discord';
        break;
    }

    return (
        <button type="button" disabled={disabled} className={twMerge('button flex gap-x-2 items-center', buttonClass, disabled && 'pointer-events-none', className)} onClick={handleClick}>
            {label}
            {children}
        </button>
    );
};

export default Button;
