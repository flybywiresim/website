import { useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Tos = () => {
    const bodyRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        bodyRef.current?.scrollIntoView();
    };

    return (
        <>
            <header>
                <div className="relative z-0 h-screen w-screen object-cover opacity-20 shadow-2xl">
                    <Image
                        src="/img/a32nxwing.png"
                        alt="Terms of Service"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="absolute inset-y-0 z-20 flex w-full justify-center">
                    <div className="sm:item-center relative my-auto justify-center text-center sm:flex sm:space-x-10 sm:divide-x xl:w-2/3 xl:justify-start">
                        <FontAwesomeIcon className="mb-3 self-center sm:mb-0" icon={faCogs} size="7x" />
                        <div className="mx-auto w-7/12 text-center sm:space-x-10 md:text-left">
                            <div className="w-full space-y-2 divide-y divide-gray-400 sm:ml-10">
                                <h1 className="text-4xl font-medium text-blue-light sm:text-8xl md:text-7xl">
                                    Terms of Service
                                </h1>
                            </div>
                            <p className="mt-3 text-xl">
                                Please take some time to review our terms of service.
                                At FlyByWire Simulations we make it a priority to ensure the legal and fair usage of software.
                            </p>
                        </div>
                    </div>
                    <FontAwesomeIcon onClick={handleScroll} className="absolute bottom-5 animate-bounce cursor-pointer" icon={faChevronDown} size="3x" />
                </div>
            </header>
            {/* HandleScroll scrolls to this div */}
            <div ref={bodyRef} />

            <article className="my-40 w-full max-w-6xl px-20 md:mx-auto xl:px-0">
                <h1 className="mt-40 text-6xl font-semibold text-blue-light">Terms of Service</h1>
                <div className="mt-2">
                    <p>Effective: 21/12/2020</p>
                    <p>Author: Nathan Innes</p>
                </div>
                <div className="w-0">
                    <a className="underline hover:text-blue-light" href="https://github.com/flybywiresim/manuals/raw/master/pdf/Terms%20of%20Service.pdf" target="_blank" rel="noreferrer">
                        <p>Download</p>
                    </a>
                </div>

                <div className=" mt-10">
                    <h1 className="text-4xl font-semibold text-blue-light-contrast">Minimum Age Requirement</h1>
                    <p className="mt-4 text-xl font-light leading-9">
                        To protect the privacy of younger people it is very important that we implement an age restriction of
                        {' '}
                        <b>13 and over</b>
                        {' '}
                        to join FlyByWire Simulations services such as this website and Discord or any other communication
                        platform, other platforms may be subject to their own conditions. By using FlyByWire Simulations services, you
                        agree that you are 13 years of age and the minimum age of digital consent in your country.
                        FlyByWire Simulations reserve the right to remove users under the age of 13 and minimum age of digital consent
                        in any given case from communication platforms.
                    </p>
                    <h1 className="mt-8 text-4xl font-semibold text-blue-light-contrast">User Complaint</h1>
                    <p className="mt-4 text-xl font-light leading-9">
                        In the event of a user should feel the need to make a complaint against another member, with regards to
                        violating our
                        {' '}
                        <b>Terms of Service</b>
                        {' '}
                        or
                        {' '}
                        <b>Communication Platform Rules (Discord)</b>
                        {' '}
                        , they can contact the Moderation team through Discord private message.
                        When writing the report please state the members name and what they are violating. All complaints will be
                        dealt with as professionally and as quickly as possible.
                    </p>
                    <h1 className="mt-8 text-4xl font-semibold text-blue-light-contrast">Legal Requirements</h1>
                    <p className="mt-4 text-xl font-light leading-9">
                        All users of FlyByWire Simulations who choose to fly our mod must own a
                        {' '}
                        <b>legal</b>
                        {' '}
                        copy of Microsoft Flight Simulator (MSFS2020)
                    </p>

                </div>
            </article>
        </>
    );
};

export default Tos;
