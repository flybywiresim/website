import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const themeToClassMap = {
    primary: 'button-emphasis',
    secondary: 'button-neutral',
    positive: 'button-positive',
    caution: 'button-caution',
    danger: 'button-danger',
    discord: 'button-discord',
} as const;

export type ButtonTheme = keyof typeof themeToClassMap;

export interface ButtonProps {
  theme?: ButtonTheme;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  link?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

const Button = ({
    theme = 'primary',
    children,
    disabled = false,
    className = '',
    onClick,
    link,
    target,
    rel: relProp,
}: ButtonProps) => {
    const buttonClass = themeToClassMap[theme] ?? themeToClassMap.primary;
    const baseClasses = twMerge(
        'button flex gap-x-2 items-center',
        buttonClass,
        disabled && 'pointer-events-none',
        className,
    );

    const isExternal = link?.startsWith('http') || link?.startsWith('//');
    const rel = isExternal ? (relProp ?? 'noopener noreferrer') : relProp;

    if (link) {
        if (isExternal) {
            return (
                <a href={link} className={baseClasses} target={target ?? '_blank'} rel={rel} aria-disabled={disabled}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={link} className={baseClasses} target={target} rel={rel}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" disabled={disabled} className={baseClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
