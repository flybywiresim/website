import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionProps = {
    id?: string
    theme?: 'light' | 'dark';
    className?: string
    children?: ReactNode
}

const themeClasses = {
  light: 'bg-light text-dark',
  dark: 'bg-secondary text-light',
};

const Section = ({ theme = 'light', className, children }: SectionProps) => {
  return (

    <section className={twMerge(themeClasses[theme], 'py-20', className)}>
      {children}
    </section>
  );
};
    return (
        <section id={id} className={twMerge(handleTheme(), 'py-20', className)}>
            {children}
        </section>
    );
};

export default Section;
