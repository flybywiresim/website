import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';
import { useRouter } from "next/router";

const Installer = () => {
    const router = useRouter();
    return (
    <Section theme="dark">
        <Container className="grid gap-y-20 lg:grid-cols-3">
            <div className="flex items-center justify-center">
                <div className="grid gap-y-5">
                    <h2>Custom-built Installer</h2>
                    <p>
                        Our custom-built, open-source installer is where we keep our projects for you to easily install.
                    </p>
                    <Button label="Download" theme="primary" onClick={() => router.push('/downloads')}/>
                </div>
            </div>

            {/* TODO: Change placeholder image */}
            <div className="-m-8 -mb-32 lg:col-span-2 lg:m-0 lg:grid lg:p-12">
                <img alt="Installer" src="/pages/index/installerPreview.png" />
            </div>
        </Container>
    </Section>
)};

export default Installer;
