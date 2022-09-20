const BackgroundVideo = () => {
    const videoLink = 'https://cdn.discordapp.com/attachments/740722295009706034/1021579447649976390/Microsoft_Flight_Simulator_2022.09.19_-_17.05.19.07.DVR_Trim.mp4';

    return (
        <video
            autoPlay
            muted
            loop
            controls={false}
            draggable={false}
            playsInline
            src={videoLink}
            className="absolute top-0 left-0 -z-50 h-full w-screen object-cover"
        />
    );
};

export default BackgroundVideo;
