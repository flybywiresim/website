import { useRouter } from 'next/router';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';

const Installer = () => {
    const router = useRouter();
    return (
        <Section theme="dark">
            <Container className="grid gap-y-10 lg:grid-cols-3">
                <div className="flex items-center justify-center">
                    <div className="grid gap-y-5">
                        <h2>Custom-built Installer</h2>
                        <p>
                            Our custom-built, open-source installer is where we keep our projects for you to easily install.
                        </p>
                        <Button label="Download" theme="primary" onClick={() => router.push('/downloads')} />
                    </div>
                </div>

                <div className="-mr-10 -mb-21 lg:col-span-2 lg:m-0 lg:grid lg:p-12">
                    <img
                        alt="FlyByWire Installer screenshot"
                        src="/pages/index/installerPreview.png"
                        className={`m-0 shadow-2xl 
                            [transform:perspective(600px)_rotateY(20deg)_rotateX(20deg)_rotateZ(0deg)_scale(0.93)] 
                            sm:[transform:perspective(800px)_rotateY(20deg)_rotateX(20deg)_rotateZ(0deg)_scale(0.93)] 
                            md:[transform:perspective(1000px)_rotateY(20deg)_rotateX(20deg)_rotateZ(0deg)_scale(0.93)] 
                            lg:[transform:perspective(1200px)_rotateY(20deg)_rotateX(20deg)_rotateZ(2deg)_scale(0.95)] 
                            xl:[transform:perspective(1400px)_rotateY(20deg)_rotateX(20deg)_rotateZ(2deg)_scale(0.90)]`}
                    />
                </div>
            </Container>
        </Section>
    );
};

export default Installer;
