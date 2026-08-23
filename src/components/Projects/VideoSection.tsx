interface VideoSectionProps {
    videoId: string;
    title: string;
    theme: 'light' | 'dark';
}

const VideoSection = (props: VideoSectionProps) => (
    <div className="flex flex-col gap-4 items-center">
        <h2>{props.title}</h2>
        <div className="w-full md:w-3/4" style={{ boxShadow: '0 0 60px 20px rgba(34, 211, 238, 0.15)' }}>
            <iframe
                src={`https://www.youtube.com/embed/${props.videoId}`}
                title={props.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full relative z-10"
            />
        </div>
    </div>
);

export default VideoSection;
