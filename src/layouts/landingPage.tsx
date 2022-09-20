import { ReactNode } from 'react';
import Section from '../components/Utils/Section';
import Container from '../components/Utils/Container';
import Button from '../components/Button/Button';

const BackgroundVideo = () => {
    // TODO: Decide if we want to use image or video?
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

const ButtonGroup = (props: {children: ReactNode}) => (
    <ul className="my-4 grid grid-cols-2 gap-4">
        {props.children}
    </ul>
);

const LandingPage = () => (
    <>
        <Section theme="dark" className="relative bg-dark/95 bg-gradient-to-bl from-primary/10 to-transparent">
            <BackgroundVideo />
            <Container className="h-screen" center>
                <h4 className="font-normal leading-4 text-primary">FlyByWire Simulations</h4>
                <h1>A32NX</h1>
                <p className="max-w-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alternation in some form, by injected humor...</p>
                <ButtonGroup>
                    <Button label="Download" theme="primary" />
                    <Button label="More Info" theme="secondary" />
                </ButtonGroup>
            </Container>
        </Section>
    </>
);

export default LandingPage;
