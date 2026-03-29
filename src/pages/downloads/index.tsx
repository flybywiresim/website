import { NextPage } from 'next';
import Link from 'next/link';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';
import DownloadLinks from '../../components/Downloads/DownloadLinks';
import { links } from '../../constants/links';

const Downloads: NextPage = () => (
    <>
        <Section theme="dark">
            <Container>
                <h4>Ready to fly?</h4>
                <h1>Download</h1>
                <p className="max-w-prose">
                    We have included many options to download our addons, you can use our custom and simple installer
                    to always keep your products up to date, or you can download using standalone installations.
                </p>
            </Container>
        </Section>
        <Section className="flex">
            <Container className="flex flex-col 2xl:flex-row gap-8 items-stretch text-dark">
                <div className="flex flex-col">
                    <h2>Installer</h2>
                    <p className="pb-6 max-w-prose">
                        Our easy-to-use installer is the easiest way to get started with our addons. Simply launch and
                        install any addon you want, with only two clicks.
                    </p>
                    <Link href={links.installer}>
                        <Button label="Download" theme="primary" className="mt-auto" />
                    </Link>
                </div>

                <span className="w-full h-px 2xl:w-px 2xl:h-full bg-gray-500" />

                <div className="grow">
                    <h2>Direct Download</h2>
                    <p className="pb-6">If you prefer a direct download, the following links are available.</p>
                    <div className="flex flex-col gap-8">
                        <DownloadLinks
                            aircraft="A32NX"
                            versions={[
                                {
                                    name: 'Stable',
                                    links: ['https://github.com/flybywiresim/aircraft/releases/download/assets/stable/A32NX-stable.7z'],
                                },
                                {
                                    name: 'Development',
                                    links: ['https://github.com/flybywiresim/aircraft/releases/download/assets/master/A32NX-master.7z'],
                                },
                            ]}
                        />

                        <DownloadLinks
                            aircraft="A380X"
                            note="The 8K version must be installed in multiple packages. Download all parts and open the .001 with 7-Zip."
                            versions={[
                                {
                                    name: 'Stable (4K)',
                                    links: ['https://github.com/flybywiresim/aircraft/releases/download/assets/stable/A380X-stable-4K.7z'],
                                },
                                {
                                    name: 'Stable (8K)',
                                    links: [
                                        'https://github.com/flybywiresim/aircraft/releases/download/assets/stable/A380X-stable-8K.7z.001',
                                        'https://github.com/flybywiresim/aircraft/releases/download/assets/stable/A380X-stable-8K.7z.002',
                                        'https://github.com/flybywiresim/aircraft/releases/download/assets/stable/A380X-stable-8K.7z.003',
                                    ],
                                },
                            ]}
                        />
                    </div>
                </div>
            </Container>
        </Section>
    </>
);

export default Downloads;
