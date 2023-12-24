import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const listener = () => {
            setVisible(window.scrollY > 80);
        };
        window.addEventListener('scroll', listener);

        return () => window.removeEventListener('scroll', listener);
    });

    function handleClick() {
        window.scrollTo({ top: 0 });
    }

    return (
        <>
            {visible && (
                <button
                    type="button"
                    aria-label="Scroll to top"
                    onClick={handleClick}
                    className="fixed bottom-0 right-0 z-50 m-8 cursor-pointer rounded-xl bg-teal-light-contrast px-4 py-3 focus:outline-none"
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </>
    );
};
