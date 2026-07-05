import { Children, cloneElement, useState, useCallback, useEffect, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { CarouselControls, useCarouselTheme } from './CarouselPrimitives';
import ViewerModal from '../../Utils/ViewerModal';

type GalleryCarouselProps = {
    children: ReactNode;
    theme?: 'light' | 'dark';
    className?: string;
};

const INACTIVE_W_REM = 24; // w-96
const GAP_REM = 1; // gap-4

const GalleryCarousel = ({ children, theme = 'dark', className }: GalleryCarouselProps) => {
    const slides = Children.toArray(children);
    const total = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalSlideIndex, setModalSlideIndex] = useState<number | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (modalSlideIndex !== null) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
            }
        }
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
            }
        };
    }, [modalSlideIndex]);

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
        setIsClosing(true);
        setTimeout(() => {
            setModalSlideIndex(null);
            setIsClosing(false);
        }, 300);
    }, []);

    const handleModalNext = useCallback(() => {
        setModalSlideIndex((prev) => (prev !== null ? (prev + 1) % total : null));
    }, [total]);

    const handleModalPrevious = useCallback(() => {
        setModalSlideIndex((prev) => (prev !== null ? (prev - 1 + total) % total : null));
    }, [total]);

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
                    style={{ transform: `translateX(${translateX}rem)`, width: 'max-content' }}
                >
                    {slides.map((slide, index) => {
                        const isActive = index === currentIndex;
                        const fullWidthWhenActive = (slide as React.ReactElement).props?.fullWidthWhenActive;
                        return (
                            <div
                                key={index}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`Slide ${index + 1} of ${total}`}
                                aria-hidden={!isActive}
                                className={twMerge(
                                    'shrink-0 h-96 cursor-pointer w-96',
                                    isActive && !fullWidthWhenActive && 'md:w-[42.6667rem]',
                                    isActive && fullWidthWhenActive && 'w-full',
                                    hasMounted && 'transition-[width] duration-500 ease-in-out',
                                )}
                                onClick={() => handleTileClick(index)}
                            >
                                {cloneElement(
                                    slide as React.ReactElement<{ onClick?: () => void; isActive?: boolean }>,
                                    { onClick: () => handleTileClick(index), isActive },
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
                <ViewerModal
                    imageSrc={modalImageSrc}
                    imageAlt={modalImageAlt}
                    onClose={handleCloseModal}
                    onPrevious={handleModalPrevious}
                    onNext={handleModalNext}
                    isClosing={isClosing}
                />
            )}
        </div>
    );
};

export default GalleryCarousel;
