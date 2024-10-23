import { useEffect, useState } from 'react';

export const useScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 800);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return { visible, handleClick };
};
