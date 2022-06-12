import Image from 'next/image';
import { createRef, forwardRef } from 'react';
import { Button, ButtonType } from '../utils/Button';
import Container from '../utils/Container';

export const installerRef = createRef<HTMLDivElement>();

export const Installer = forwardRef(() => (
    <section ref={installerRef} className="overflow-hidden py-12 bg-gradient-to-r from-navy-dark to-navy">
        <Container className="flex flex-col items-center 3xl:flex-row 3xl:justify-center">
            <div className="mb-4 2xl:mr-12 3xl:text-left">
                <h1 className="font-extrabold">
                    Custom-built Installer
                </h1>
                <p className="mt-5 max-w-4xl opacity-75">
                    Our custom-built, open-source installer is where we keep our projects for you to easily install. Pick which branch you want to install
                    and the installer will automatically download it into the
                    proper folder.
                </p>
                <a href="https://api.flybywiresim.com/installer">
                    <Button type={ButtonType.Emphasis} className="mt-6 w-40">
                        Download
                    </Button>
                </a>
            </div>
            <div className="-mb-[125px] w-11/12 xl:w-5/6 3xl:-mb-3 3xl:w-320 2xl:-mr-18">
                <Image
                    src="/img/InstallerScreenshot.png"
                    alt="Installer"
                    width={928}
                    height={643}
                    quality={90}
                    objectFit="contain"
                />
            </div>
        </Container>
    </section>
));
