import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';
import DownloadLinks from '../../components/Downloads/DownloadLinks';
import { links } from '../../constants/links';

const Downloads: NextPage = () => {
    const [expandedTab, setExpandedTab] = useState<'windows' | 'linux' | null>(null);

    const handleTabToggle = (tab: 'windows' | 'linux') => {
        setExpandedTab(expandedTab === tab ? null : tab);
    };

    return (
        <>
            <Section theme="dark">
                <Container>
                    <h4>Ready to fly?</h4>
                    <h1>Download</h1>
                    <p className="max-w-prose">
                        We have included many options to download our addons, you
                        can use our custom and simple installer to always keep your
                        products up to date, or you can download using standalone
                        installations.
                    </p>
                </Container>
            </Section>
            <Section className="flex">
                <Container className="flex flex-col 2xl:flex-row gap-8 items-stretch text-dark">
                    <div className="flex flex-col">
                        <h2>Installer</h2>
                        <p className="pb-6 max-w-prose">
                            Our easy-to-use installer is the easiest way to get
                            started with our addons. Simply launch and install any
                            addon you want, with only two clicks.
                        </p>

                        <div className="flex flex-col">
                            <div className="flex gap-4 mb-4">
                                <Button
                                    label="Download for Windows"
                                    theme="primary"
                                    className="flex-1"
                                    onClick={() => handleTabToggle('windows')}
                                />
                                <Button
                                    label="Download for Linux"
                                    theme="primary"
                                    className="flex-1"
                                    onClick={() => handleTabToggle('linux')}
                                />
                            </div>

                            {/* Windows flyout */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                expandedTab === 'windows' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                            >
                                <div className="mb-4 p-4 border-l-2 border-primary bg-gray-50 transition-transform duration-300 ease-in-out">
                                    <h4 className="mb-3 font-semibold">Choose Windows Version:</h4>
                                    <Link href={links.installer_x64_exe}>
                                        <Button
                                            label="x64.exe (Recommended)"
                                            theme="secondary"
                                            className="mb-2 w-full"
                                        />
                                    </Link>
                                </div>
                            </div>

                            {/* Linux flyout */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                expandedTab === 'linux' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                            >
                                <div className="mb-4 p-4 border-l-2 border-primary bg-gray-50 transition-transform duration-300 ease-in-out">
                                    <h4 className="mb-3 font-semibold">Choose Linux Version:</h4>
                                    <div className="flex flex-col gap-2">
                                        <Link href={links.installer_amd64_deb}>
                                            <Button
                                                label="amd64.deb (Ubuntu/Debian)"
                                                theme="secondary"
                                                className="w-full"
                                            />
                                        </Link>
                                        <Link href={links.installer_x86_64_rpm}>
                                            <Button
                                                label="x86_64.rpm (RedHat/Fedora)"
                                                theme="secondary"
                                                className="w-full"
                                            />
                                        </Link>
                                        <Link href={links.installer_x86_64_appimage}>
                                            <Button
                                                label="x86_64.AppImage (Universal)"
                                                theme="secondary"
                                                className="w-full"
                                            />
                                        </Link>
                                        <Link href={links.installer_x86_64_flatpak}>
                                            <Button
                                                label="x86_64.flatpak"
                                                theme="secondary"
                                                className="w-full"
                                            />
                                        </Link>
                                        <Link href={links.installer_amd64_snap}>
                                            <Button
                                                label="amd64.snap"
                                                theme="secondary"
                                                className="w-full"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <span className="w-full h-px 2xl:w-px 2xl:h-full bg-gray-500" />

                    <div className="grow">
                        <h2>Direct Download</h2>
                        <p>
                            If you prefer a direct download, the following links are
                            available.
                        </p>
                        <h3 className="mt-8">Microsoft Flight Simulator 2020</h3>
                        <div className="w-full h-px bg-gray-500" />
                        <div className="flex flex-col gap-8 lg:flex-row">
                            <DownloadLinks
                                addon="A32NX"
                                versions={
                                    {
                                        Stable: { link: links.msfs2020_a32nx_stable_standalone_github },
                                        Development: { link: links.msfs2020_a32nx_dev_standalone_github, theme: 'secondary' }
                                    }
                                }
                            />
                            <DownloadLinks
                                addon="A380X"
                                versions={
                                    {
                                        'Stable (4K)': { link: links.msfs2020_a380x_stable_4k_standalone_github },
                                        'Development (4K)': { link: links.msfs2020_a380x_dev_4k_standalone_github, theme: 'secondary' }
                                    }
                                }
                            />
                        </div>
                        <h3 className="mt-8">Microsoft Flight Simulator 2024</h3>
                        <div className="w-full h-px bg-gray-500" />
                        <div className="flex flex-col gap-8 lg:flex-row">
                            <DownloadLinks
                                addon="A32NX"
                                versions={
                                    {
                                        Stable: { link: links.msfs2020_a32nx_stable_standalone_github },
                                        Development: { link: links.msfs2020_a32nx_dev_standalone_github, theme: 'secondary' }
                                    }
                                }
                            />
                            <DownloadLinks
                                addon="A380X"
                                versions={
                                    {
                                        'Stable (4K)': { link: links.msfs2024_a380x_stable_4k_standalone_github },
                                        'Development (4K)': { link: links.msfs2024_a380x_dev_4k_standalone_github, theme: 'secondary' }
                                    }
                                }
                            />
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default Downloads;
