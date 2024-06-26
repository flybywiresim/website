import React, { FC } from 'react';

export enum ButtonType {
  Neutral,
  Emphasis,
  Positive,
  Caution,
  Danger,
}

export interface ButtonProps {
  theme?: 'primary' | 'secondary' | 'positive' | 'caution' | 'danger' | 'discord';
  label: string | JSX.Element;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
    theme = 'primary',
    label,
    disabled = false,
    className = '',
    onClick = () => {},
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

    return (
        <button disabled={disabled} className={`button ${buttonClass} ${className}`} onClick={onClick}>
            {children || label}
        </button>
    );
};

export default Button;
