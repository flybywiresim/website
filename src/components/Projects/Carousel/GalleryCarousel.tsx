import React, { useState, useCallback, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { CarouselControls, useCarouselTheme, useMediaQuery } from './CarouselPrimitives';

type GalleryCarouselProps = {
    children: ReactNode;
    theme?: 'light' | 'dark';
    className?: string;
};

const INACTIVE_W_REM = 24; // w-96
const GAP_REM = 1; // gap-4
const EXPAND_BREAKPOINT = '(min-width: 768px)'; // md breakpoint

/**
 * FullScreenModal — displays a clicked screenshot at full size.
 */
const FullScreenModal = ({
    imageSrc,
    imageAlt,
    onClose,
}: {
    imageSrc: string;
    imageAlt: string;
    onClose: () => void;
}) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return function cleanup() {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-[fade-in_0.3s_ease-in-out]"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
        >
            <style>
                {`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes scale-in { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                `}
            </style>
            <div
                className="relative max-h-[90vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1920}
                    height={1080}
                    className="max-h-[85vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
                    style={{ animation: 'scale-in 0.3s ease-in-out' }}
                />
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                    aria-label="Close modal"
                >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

/**
 * GalleryCarousel — Screenshot tiles expand from 1:1 to 16:9 when active on md+ viewports.
 * On sm viewports, tiles remain locked at 1:1 (w-96).
 */
const GalleryCarousel = ({ children, theme = 'dark', className }: GalleryCarouselProps) => {
    const slides = React.Children.toArray(children);
    const total = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalSlideIndex, setModalSlideIndex] = useState<number | null>(null);
    const shouldExpand = useMediaQuery(EXPAND_BREAKPOINT);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
    }, [total]);

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    const handleGoTo = useCallback((index: number) => {
        setCurrentIndex(index % total);
    }, [total]);

    const handleTileClick = useCallback((index: number) => {
        if (index === currentIndex) {
            setModalSlideIndex(index);
        } else {
            setCurrentIndex(index);
        }
    }, [currentIndex]);

    const handleCloseModal = useCallback(() => {
        setModalSlideIndex(null);
    }, []);

    // translateX always uses w-96 (24rem) since tiles are always w-96 in the DOM.
    const translateX = -(currentIndex * (INACTIVE_W_REM + GAP_REM));
    const { containerTheme } = useCarouselTheme(theme);

    const modalSlide = modalSlideIndex !== null ? slides[modalSlideIndex] : null;
    const modalImageSrc = (modalSlide as React.ReactElement)?.props?.imageSrc || '';
    const modalImageAlt = (modalSlide as React.ReactElement)?.props?.imageAlt || 'Screenshot';

    return (
        <div className={twMerge('flex flex-col gap-6', containerTheme, className)}>
            {/* Viewport */}
            <div className="relative w-full">
                <div
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Gallery carousel"
                    className="flex h-96 items-center gap-4 will-change-transform transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(${translateX}rem)` }}
                >
                    {slides.map((slide, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <div
                                key={index}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`Slide ${index + 1} of ${total}`}
                                aria-hidden={!isActive}
                                className={twMerge(
                                    'shrink-0 h-96 cursor-pointer transition-[width] duration-500 ease-in-out',
                                    'w-96',
                                    isActive && shouldExpand ? 'md:w-[42.6667rem]' : '',
                                )}
                                onClick={() => handleTileClick(index)}
                            >
                                {React.cloneElement(
                                    slide as React.ReactElement<{ onClick?: () => void }>,
                                    { onClick: () => handleTileClick(index) },
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Controls */}
            <CarouselControls
                total={total}
                currentIndex={currentIndex}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onGoTo={handleGoTo}
                theme={theme}
            />

            {/* Full Screen Modal */}
            {modalSlideIndex !== null && modalImageSrc && (
                <FullScreenModal
                    imageSrc={modalImageSrc}
                    imageAlt={modalImageAlt}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default GalleryCarousel;
