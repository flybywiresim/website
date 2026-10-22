import { useState, useEffect } from 'react';

const query = '(prefers-reduced-motion: reduce)';

const useReducedMotion = (): boolean => {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia(query);
        const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
        mql.addEventListener('change', handler);
        setReduced(mql.matches);
        return () => mql.removeEventListener('change', handler);
    }, []);

    return reduced;
};

export default useReducedMotion;
