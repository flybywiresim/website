import Image from 'next/image';
import { createRef, forwardRef } from 'react';
import { IconPackage } from '@tabler/icons';
import { Button } from '../utils/Button';
import Container from '../utils/Container';

export const installerRef = createRef<HTMLDivElement>();

export const Installer = forwardRef(() => (
    <section ref={installerRef} className="py-12 overflow-hidden bg-blue-dark">
        <Container className="flex flex-col 3xl:flex-row 3xl:justify-center items-center">
            <div className="text-center 3xl:text-left mb-4 2xl:mr-12">
                <IconPackage className="bg-blue-light-contrast p-2 mb-4 mx-auto 3xl:mx-0 rounded-xl" size={55} stroke={1.5} />
                <h1 className="font-extrabold">
                    Custom-built Installer
                </h1>
                <p className="text-blue-100 max-w-2xl">
                    Our custom-built, open-source installer is where we keep our projects for you to easily install.
                    Pick which branch you want to install, and the installer will automatically download it into the
                    proper folder.
                </p>
                <a href="https://api.flybywiresim.com/installer">
                    <Button className="w-40 mt-8 bg-teal-light-contrast border-2 border-teal-light-contrast hover:bg-white hover:text-teal-light-contrast">
                        Download
                    </Button>
                </a>
            </div>
            <div className="w-11/12 xl:w-5/6 3xl:w-320 -mb-40 3xl:-mb-3">
                <Image
                    src="/img/InstallerScreenshot.png"
                    alt="Installer"
                    width={1200}
                    height={850}
                    quality={90}
                    objectFit="contain"
                />
            </div>
        </Container>
    </section>
));
