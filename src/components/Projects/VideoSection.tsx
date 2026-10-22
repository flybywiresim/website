import { twMerge } from 'tailwind-merge';
import useScrollReveal from '../../hooks/useScrollReveal';

interface VideoSectionProps {
    videoId: string;
    title: string;
    theme: 'light' | 'dark';
}

const VideoSection = (props: VideoSectionProps) => {
    const { ref, revealed, shouldAnimate } = useScrollReveal<HTMLDivElement>();

    return (
        <div ref={ref} className="flex flex-col gap-4 items-center">
            <h2 className={twMerge(!revealed && 'motion-safe:opacity-0', shouldAnimate && 'reveal-fade-in')}>
                {props.title}
            </h2>
            <div
                className={twMerge('w-full md:w-3/4', !revealed && 'motion-safe:opacity-0', shouldAnimate && 'reveal-animate')}
                style={{
                    boxShadow: '0 0 60px 20px rgba(34, 211, 238, 0.15)',
                    animationDelay: '200ms',
                }}
            >
                <iframe
                    src={`https://www.youtube.com/embed/${props.videoId}`}
                    title={props.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="aspect-video w-full relative z-10"
                />
            </div>
        </div>
    );
};

export default VideoSection;
