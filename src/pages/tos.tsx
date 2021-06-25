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
                <div className="object-cover relative z-0 w-screen h-screen shadow-2xl opacity-20">
                    <Image
                        src="/img/a32nxwing.png"
                        alt="Terms of Service"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="flex absolute top-0 bottom-0 z-20 justify-center w-full">
                    <div className="sm:flex relative justify-center xl:justify-start my-auto sm:space-x-10 xl:w-2/3 text-center sm:divide-x sm:item-center">
                        <FontAwesomeIcon className="self-center mb-3 sm:mb-0" icon={faCogs} size="7x" />
                        <div className="mx-auto sm:space-x-10 w-7/12 text-center md:text-left">
                            <div className="sm:ml-10 space-y-2 w-full divide-y divide-gray-400">
                                <h1 className="text-4xl sm:text-8xl md:text-7xl font-medium text-blue-light">
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

            <article className="px-20 xl:px-0 my-40 md:mx-auto w-full max-w-6xl">
                <h1 className="mt-40 text-6xl font-semibold text-blue-light">Terms of Service</h1>
                <div className="mt-2">
                    <p>Effective: 21/12/2020</p>
                    <p>Author: Nathan Innes</p>
                </div>
                <div className="w-0">
                    <a className="hover:text-blue-light underline" href="https://github.com/flybywiresim/manuals/raw/master/pdf/Terms%20of%20Service.pdf" target="_blank" rel="noreferrer">
                        <p>Download</p>
                    </a>
                </div>

                <div className="mt-10 ">
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
