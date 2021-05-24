import { useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Privacy = () => {
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
                        alt="Privacy policy"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="absolute top-0 bottom-0 z-20 w-full flex justify-center">
                    <div className="relative my-auto xl:w-3/4 md:w-4/5 justify-center xl:justify-start text-center sm:flex sm:item-center sm:divide-x sm:space-x-10">
                        <FontAwesomeIcon className="mb-3 sm:mb-0 self-center" icon={faUserShield} size="7x" />

                        <div className="sm:space-x-10 mx-auto text-center md:text-left w-1/2">
                            <div className="w-full divide-y divide-gray-400 sm:ml-10 space-y-2">
                                <h1 className="text-4xl md:text-7xl text-blue-light sm:text-8xl font-medium">
                                    Privacy Policy
                                </h1>
                            </div>
                            <p className="text-xl mt-3">
                                Please take some time to review our privacy policy.
                                At FlyByWire Simulations we make it a priority to be
                                thoroughly transparent to our users about the data we collect and use.
                            </p>
                        </div>
                    </div>
                    <FontAwesomeIcon onClick={handleScroll} className="absolute animate-bounce bottom-5 cursor-pointer" icon={faChevronDown} size="3x" />
                </div>
            </header>
            {/* HandleScroll scrolls to this div */}
            <div ref={bodyRef} />

            <article className="w-full md:mx-auto px-20 xl:px-0 my-40 max-w-6xl">
                <h1 className="mt-40 text-6xl text-blue-light font-semibold">Privacy Policy</h1>
                <div className="mt-2">
                    <p>Effective: 21/12/2020</p>
                    <p>Author: Nathan Innes</p>
                </div>
                <div className="w-0">
                    <a className="hover:text-blue-light underline" href="https://github.com/flybywiresim/manuals/raw/master/pdf/Privacy%20Policy.pdf" target="_blank" rel="noreferrer">
                        <p>Download</p>
                    </a>
                </div>
                <div className="mt-10 ">
                    <h1 className="text-4xl text-blue-light-contrast font-semibold">What information do we collect?</h1>
                    <div className="text-xl mt-4 leading-9 font-light">
                        <p>We may collect, store and use the following kinds of personal data:</p>
                        <p>
                            <br />
                            1. Information about your visits to and use of this website;
                        </p>
                        <p>
                            2. Information about any transactions carried out between you and us on or in relation to this website or any of our services including
                            but not limited to Flybywire GitHub repositories, Discord and the in-game mod;
                        </p>
                        <p>
                            3. Information that you provide to us for the purpose of registering with us, and/or subscribing to our website services and/or email
                            notifications.
                        </p>
                    </div>
                    <h1 className="text-4xl mt-8 text-blue-light-contrast font-semibold">Information about website visits</h1>
                    <div className="text-xl mt-4 leading-9 font-light">
                        <p>
                            We may collect information about your visits to this website such as your IP address, geographical location, browser type, referral
                            source, length of visit and number of page views. We may use this information in the administration of this website, to improve the
                            website&apos;s usability, and for marketing purposes.
                        </p>
                        <p>
                            <br />
                            We use cookies on this website. A cookie is a text file sent by a web server to a web browser, and stored by the browser. The text file
                            is then sent back to the server each time the browser requests a page from the server. This enables the web server to identify and
                            track the web browser.
                        </p>
                        <p>
                            <br />
                            We may send a cookie which may be stored by your browser on your computer&apos;s hard drive. We may use the information we obtain
                            from the cookie in the administration of this website, to improve the website&apos;s usability and for marketing purposes. We may also
                            use that information to recognise your computer when you visit our website, and to personalise our website for you.
                        </p>
                        <p>
                            <br />
                            Most browsers allow you to refuse to accept cookies. (For example, in Internet Explorer you can refuse all cookie by clicking &quot;Tools&quot;,
                            &quot;Internet Options&quot;, &quot;Privacy&quot;, and selecting &quot;Block all cookies&quot; using the sliding selector.) This will, however,
                            have a negative impact upon the usability of many websites.
                        </p>
                    </div>
                    <h1 className="text-4xl mt-8 text-blue-light-contrast font-semibold">Using your personal data</h1>
                    <div className="text-xl mt-4 leading-9 font-light">
                        <p>
                            Personal data submitted to this website will be used for the purposes specified in this privacy policy or in relevant parts of the website.
                            In addition to the uses identified elsewhere in this privacy policy, we may use your personal information to:
                        </p>
                        <p>
                            <br />
                            1. Improve your browsing experience by personalising the website;
                        </p>
                        <p>2. Provide other organisations with statistical information about our users - but this information will not be used to identify any individual user.</p>
                        <p>
                            <br />
                            We will not without your express consent provide your personal information to any third parties for the purpose of direct marketing.
                        </p>
                    </div>
                    <h1 className="text-4xl mt-8 text-blue-light-contrast font-semibold">Other disclosures</h1>
                    <div className="text-xl mt-4 leading-9 font-light">
                        <p>In addition to the disclosures reasonably necessary for the purposes identified elsewhere in this privacy policy, we may disclose information about you:</p>
                        <p>
                            <br />
                            1. To the extent that we are required to do so by law;
                        </p>
                        <p>2. In connection with any legal proceedings or prospective legal proceedings;</p>
                        <p>
                            3. In order to establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud
                            prevention and reducing credit risk);
                        </p>
                        <p>4. Except as provided in this privacy policy, we will not provide your information to third parties.</p>
                    </div>
                    <h1 className="text-4xl mt-8 text-blue-light-contrast font-semibold">Security of your personal data</h1>
                    <div className="text-xl mt-4 leading-9 font-light">
                        <p>
                            We will take reasonable precautions to prevent the loss, misuse or alteration of your personal information.
                            Of course, data transmission over the internet is inherently insecure, and we cannot guarantee the security of data sent over the internet.
                        </p>
                    </div>
                    <h1 className="text-4xl mt-8 text-blue-light-contrast font-semibold">Third party websites</h1>
                    <div className="text-xl mt-4 leading-9 font-light">
                        <p>The website contains links to other websites. We are not responsible for the privacy policies of third party websites.</p>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Privacy;
