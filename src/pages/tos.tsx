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
                <div className="relative z-0 object-cover w-screen h-screen opacity-20 shadow-2xl">
                    <Image
                        src="/img/a32nxwing.png"
                        alt="Terms of Service"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="absolute top-0 bottom-0 z-20 w-full flex justify-center">
                    <div className="relative my-auto xl:w-2/3 justify-center xl:justify-start text-center sm:flex sm:item-center sm:divide-x sm:space-x-10">
                        <FontAwesomeIcon className="mb-3 sm:mb-0 self-center" icon={faCogs} size="7x" />
                        <div className="sm:space-x-10 mx-auto text-center md:text-left w-7/12">
                            <div className="w-full divide-y divide-gray-400 sm:ml-10 space-y-2">
                                <h1 className="text-4xl md:text-7xl text-blue-light sm:text-8xl font-medium">
                                    Terms of Service
                                </h1>
                            </div>
                            <p className="text-xl mt-3">
                                Please take some time to review our terms of service.
                                At FlyByWire Simulations we make it a priority to ensure the legal and fair usage of software.
                            </p>
                        </div>
                    </div>
                    <FontAwesomeIcon onClick={handleScroll} className="absolute animate-bounce bottom-5 cursor-pointer" icon={faChevronDown} size="3x" />
                </div>
            </header>
            {/* HandleScroll scrolls to this div */}
            <div ref={bodyRef} />

            <article className="w-full md:mx-auto px-20 xl:px-0 my-40 max-w-6xl">
                <h1 className="mt-40 text-6xl text-blue-light font-semibold">Terms of Service</h1>
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
                    <h1 className="text-4xl text-blue-light-contrast font-semibold">Minimum Age Requirement</h1>
                    <p className="text-xl mt-4 leading-9 font-light">
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
                    <h1 className="text-4xl mt-8 text-blue-light-contrast font-semibold">User Complaint</h1>
                    <p className="text-xl mt-4 leading-9 font-light">
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
                    <h1 className="text-4xl mt-8 text-blue-light-contrast font-semibold">Legal Requirements</h1>
                    <p className="text-xl mt-4 leading-9 font-light">
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
