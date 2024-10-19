import {NextPage} from "next";
import Section from "../../components/Utils/Section";
import Container from "../../components/Utils/Container";
import Button from "../../components/Button/Button";
import DownloadLinks from "../../components/Downloads/DownloadLinks";

const Downloads: NextPage = () => {
    return(
        <>
            <Section theme="dark">
                <Container>
                    <h4>Ready to fly?</h4>
                    <h1>Download</h1>
                    <p>We have included many options to download our addons, you can use our custom and simple installer
                        to always keep your products up to date, or you can download using standalone installations.</p>
                </Container>
            </Section>
            <Section theme="light">
                <Container>
                    <h2>Installer</h2>
                    <p className="pb-6">Our easy-to-use installer is the easiest way to get started with our addons. Simply launch and
                        install any addon you want, with only two clicks.</p>
                    <Button label="Download" theme="primary" />
                </Container>
            </Section>
            <Section theme="dark">
                <Container>
                    <h2>Direct Download</h2>
                    <p className="pb-6">If you prefer a direct download, the following links are available.</p>
                    <div className="grid gap-8">
                        <DownloadLinks aircraft="A32NX" stableLink="" devLink=""/>
                        <DownloadLinks aircraft="A380X" stableLink="" devLink=""/>
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default Downloads;
