import Image from 'next/image';
import { createRef, forwardRef } from 'react';
import { IconPackage } from '@tabler/icons';
import { Button } from '../utils/Button';
import Container from '../utils/Container';

export const installerRef = createRef<HTMLDivElement>();

export const Installer = forwardRef(() => (
    <section ref={installerRef} className="overflow-hidden bg-blue-dark py-12">
        <Container className="flex flex-col items-center 3xl:flex-row 3xl:justify-center">
            <div className="mb-4 text-center 2xl:mr-12 3xl:text-left">
                <IconPackage className="mx-auto mb-4 rounded-xl bg-blue-light-contrast p-2 3xl:mx-0" size={55} stroke={1.5} />
                <h1 className="font-extrabold">
                    Custom-built Installer
                </h1>
                <p className="max-w-2xl text-blue-100">
                    Our custom-built, open-source installer is where we keep our projects for you to easily install.
                    Pick which branch you want to install, and the installer will automatically download it into the
                    proper folder.
                </p>
                <a href="https://api.flybywiresim.com/installer">
                    <Button className="mt-8 w-40 border-2 border-teal-light-contrast bg-teal-light-contrast hover:bg-white hover:text-teal-light-contrast">
                        Download
                    </Button>
                </a>
            </div>
            <div className="mb-[-125px] w-11/12 xl:w-5/6 3xl:-mb-3 3xl:w-320">
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
