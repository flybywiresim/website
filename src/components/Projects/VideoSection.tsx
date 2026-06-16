import Section from '../Utils/Section';
import Container from '../Utils/Container';

interface VideoSectionProps {
    videoId: string;
    title?: string;
    theme?: 'light' | 'dark';
}

const VideoSection = (props: VideoSectionProps) => (
    <Section className="relative" theme={props.theme || 'dark'}>
        <Container className="flex items-center gap-6">
            <h2>{props.title || 'Trailer'}</h2>
            <div className="w-full md:w-3/4" style={{ boxShadow: '0 0 60px 20px rgba(34, 211, 238, 0.15)' }}>
                <iframe
                    src={`https://www.youtube.com/embed/${props.videoId}`}
                    title={props.title || 'Trailer'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="aspect-video w-full relative z-10"
                />
            </div>
        </Container>
    </Section>
);

export default VideoSection;
