import { useState, useEffect } from 'react';
import Image from 'next/image';
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

// Full-Screen Image Viewer Modal

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
                        <svg className="animate-spin h-12 w-12" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                    </div>
                )}
                <div
                    className="overflow-hidden rounded-2xl cursor-pointer"
                    onClick={onClose}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1920}
                        height={1080}
                        className={twMerge(
                            'object-contain w-full h-full transition-opacity duration-300',
                            isLoading ? 'opacity-0' : 'opacity-100',
                        )}
                        onLoad={() => setIsLoading(false)}
                        sizes="90vw"
                        priority
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
