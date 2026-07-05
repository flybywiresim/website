import React, { FC } from 'react';
import Link from 'next/link';
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
  target?: string;
  rel?: string;
}

const Button: FC<ButtonProps> = ({
    theme = 'primary',
    label,
    disabled = false,
    className = '',
    onClick,
    link,
    target,
    rel,
    children,
}) => {
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

    const baseClasses = twMerge('button flex gap-x-2 items-center', buttonClass, disabled && 'pointer-events-none', className);

    if (link) {
        const isExternal = link.startsWith('http') || link.startsWith('//');

        if (isExternal) {
            return (
                <a href={link} className={baseClasses} target={target} rel={rel}>
                    {label}
                    {children}
                </a>
            );
        }

        return (
            <Link href={link} passHref legacyBehavior>
                <a className={baseClasses} target={target} rel={rel}>
                    {label}
                    {children}
                </a>
            </Link>
        );
    }

    return (
        <button type="button" disabled={disabled} className={baseClasses} onClick={onClick}>
            {label}
            {children}
        </button>
    );
};

export default Button;
