import Image from 'next/image';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';

const BackgroundImage = () => (
    <div className="h-full w-screen opacity-5">
        <Image src="/pages/index/Airfoil.png" layout="fill" objectFit="cover" />
    </div>
);

const A32NX = () => (
    <>
        <Section theme="dark">
            <Container>
                <h4>Discover the</h4>
                <h1>A32NX</h1>
                <p>Erat imperdiet sed euismod nisi porta. Malesuada proin libero nunc consequat interdum varius. Lacus luctus accumsan tortor posuere. </p>

                <div className="py-8">
                    <Button label="Download" theme="primary" />
                </div>
            </Container>
        </Section>
        <Section className="relative" theme="light">
            <BackgroundImage />
            <Container>
                <div className="grid gap-2 text-center">
                    <h4 className="font-thin text-gray-400">Featuring</h4>
                    <h3>
                        Incredible
                        {' '}
                        <u className="decoration-primary decoration-4 underline-offset-8">Simulation</u>
                        {' '}
                        Fidelity
                    </h3>
                    <p className="py-4">
                        The volunteers in our community work hard around the clock to consistently bring new features and create the best A320neo possible. Let's take a look at some of the features the A32NX has to offer!
                    </p>
                </div>

                <div className="my-8 grid gap-4">
                    <div className="grid gap-8">
                        <Image src="/pages/projects/a32nx/Avionics.png" width={300} height={200} objectFit="contain" />
                        <div>
                            <h4>Hyper Percise</h4>
                            <h3>Avionics and Displays</h3>
                            <p>Every display in the A32NX is programmed to extreme accuracy, using thousands of references from the real plane, taken by our team of real-world pilots and maintenance personnel.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>

        <Section theme="dark">
            <Container>
                <div className="grid gap-8">
                    <Image src="/pages/projects/a32nx/SoundBars.png" width={300} height={200} objectFit="contain" />
                    <div>
                        <h4>Best in Class</h4>
                        <h3>Sound Set</h3>
                        <p>
                            The sound set included with the A32NX has recieved very high praise from A320neo pilots, ground workers and simmers alike.
                            <br />
                            <br />
                            Entirely recorded from the real aircraft and Including a wide variety of unique effects like an entirely dynamic PTU (power transfer unit) sound simulation, it is sure to bring the entire aircraft to life in your simulator.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>

        <Section theme="light">
            <Container>
                <Image src="/pages/projects/a32nx/FMSLine.png" width={300} height={200} objectFit="contain" />
                <div className="grid gap-8">
                    <div>
                        <h4>Advanced</h4>
                        <h3>Flight Management System</h3>
                        <p>
                            The A32NX includes a custom flight management system, developed to precisely match the behaviour and quirks of the real Honeywell H3 FMS found on the A320 family.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    </>
);

export default A32NX;
