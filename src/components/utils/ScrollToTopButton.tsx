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
                <button type="button" onClick={handleClick} className="focus:outline-none fixed right-0 bottom-0 bg-teal-light-contrast px-4 py-3 m-8 rounded-xl cursor-pointer z-50">
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </>
    );
};
