import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { NavigationButton } from '../Projects/Carousel/CarouselPrimitives';

type ViewerModalProps = {
    imageSrc: string;
    imageAlt: string;
    onClose: () => void;
    onPrevious: () => void;
    onNext: () => void;
    isClosing: boolean;
};

/**
 * Gallery Modal
 * Full-screen image viewer with loading state, navigation, and smooth animations.
 * Click the image or background to close, use arrow keys or side buttons to navigate.
 */
const ViewerModal = ({
    imageSrc,
    imageAlt,
    onClose,
    onPrevious,
    onNext,
    isClosing,
}: ViewerModalProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
    }, [imageSrc]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrevious();
            if (e.key === 'ArrowRight') onNext();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onPrevious, onNext]);

    return (
        <div
            className={twMerge(
                'fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300',
                isClosing ? 'opacity-0' : 'opacity-100',
            )}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
        >
            {/* Previous Button */}
            <div
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                onClick={(e) => e.stopPropagation()}
            >
                <NavigationButton
                    onClick={onPrevious}
                    direction="previous"
                    className="bg-light/20 hover:bg-light/40 backdrop-blur-sm"
                />
            </div>

            {/* Image Container */}
            <div
                className={twMerge(
                    'relative flex items-center justify-center max-h-[90vh] max-w-[90vw] transition-transform duration-300',
                    isClosing ? 'scale-95' : 'scale-100',
                )}
                onClick={onClose}
            >
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/30 border-t-white" />
                    </div>
                )}
                <div
                    className="overflow-hidden rounded-2xl shadow-2xl"
                    onClick={onClose}
                >
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className={twMerge(
                            'mx-auto max-h-[85vh] max-w-[90vw] object-contain transition-opacity duration-300 cursor-pointer',
                            isLoading ? 'opacity-0' : 'opacity-100',
                        )}
                        onLoad={() => setIsLoading(false)}
                    />
                </div>
            </div>

            {/* Next Button */}
            <div
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                onClick={(e) => e.stopPropagation()}
            >
                <NavigationButton
                    onClick={onNext}
                    direction="next"
                    className="bg-light/20 hover:bg-light/40 backdrop-blur-sm"
                />
            </div>
        </div>
    );
};

export default ViewerModal;
