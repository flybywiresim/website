import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
}

const useScrollReveal = <T extends HTMLElement>({
    threshold = 0,
    rootMargin = '0px 0px -15% 0px',
}: ScrollRevealOptions = {}) => {
    const containerRef = useRef<T>(null);
    const [revealed, setRevealed] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || revealed) return undefined;

        let observer: IntersectionObserver | null = null;

        const frameId = requestAnimationFrame(() => {
            if (revealed) return;

            const rect = container.getBoundingClientRect();
            if (rect.bottom <= 0) {
                setRevealed(true);
                return;
            }

            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setRevealed(true);
                        setShouldAnimate(true);
                        observer?.disconnect();
                    }
                },
                { threshold, rootMargin },
            );

            observer.observe(container);
        });

        return () => {
            cancelAnimationFrame(frameId);
            observer?.disconnect();
        };
    }, [threshold, rootMargin, revealed]);

    return { ref: containerRef, revealed, shouldAnimate };
};

export default useScrollReveal;
