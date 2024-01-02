import { Button } from '../../utils/Button';

export const Download = ({ expOnHold }: { expOnHold?: boolean }) => {
    const urls = {
        stable: 'https://github.com/flybywiresim/a32nx/releases/download/assets/stable/A32NX-stable.zip',
        dev: 'https://github.com/flybywiresim/a32nx/releases/download/assets/master/A32NX-master.7z',
        exp: 'https://github.com/flybywiresim/a32nx/releases/download/assets/experimental/A32NX-experimental.zip',
    };

    const getDownloadLink = (link: string) => `${link}`;

    return (
        <section id="download" className="relative bg-blue-dark-contrast">
            <div className="m-auto w-full px-10 py-14 lg:w-11/12 2xl:w-4/6">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-3/5 lg:pr-12">
                        <div className="w-1/2 divide-y divide-gray-500 text-left 2xl:w-1/4">
                            <h2 className="text-base font-medium uppercase tracking-widest text-blue-200">READY TO FLY?</h2>
                            <p className="mt-3 pt-3 text-5xl font-medium text-blue-light">
                                Download
                            </p>
                        </div>

                        <p className="mt-5 max-w-prose text-xl">
                            We have included many options to download our addons, you can use our custom and simple installer to always keep your products up to date,
                            or you can download using standalone installations.
                        </p>

                        <ul className="-m-2 list-disc pl-5 pt-7 text-lg text-gray-200">
                            <li className="ml-2 pl-2">Integrates seamlessly into Microsoft Flight Simulator - no external programs required.</li>
                            <li className="ml-2 pl-2">Safe, trustworthy, and constantly updated to assure nothing is broken.</li>
                            <li className="ml-2 pl-2">One click install, neatly organized into one compact folder.</li>
                        </ul>
                    </div>
                    <div className="flex w-full flex-col divide-y divide-gray-500 lg:w-2/5">
                        {/* Installer */}
                        <div className="pb-8 pt-16 lg:pt-0">
                            <span className="text-4xl text-blue-100">Installer</span>

                            <p className="mb-6 mt-4 max-w-prose">
                                Our easy-to-use installer is the easiest way to get started with our addons. Simply launch and install any addon you want, with only two clicks.
                            </p>

                            <a href="https://api.flybywiresim.com/installer">
                                <Button className="float-right w-40 bg-green-500 font-bold hover:bg-green-700">Download</Button>
                            </a>
                        </div>

                        {/* Direct Download */}
                        <div className="pt-7">
                            <span className="text-2xl text-blue-100">Direct Download</span>
                            <p className="mb-6 mt-4 max-w-prose">
                                If you prefer a direct download, the following links are available.
                            </p>

                            <div className="divide-y divide-gray-700">
                                <div className="mb-5 flex flex-row items-center justify-between">
                                    <span className="text-xl text-gray-300">Stable Release</span>
                                    <a href={getDownloadLink(urls.stable)}>
                                        <Button className="float-right w-40 bg-green-500 font-bold hover:bg-green-700">Download</Button>
                                    </a>
                                </div>
                                <div className="mb-5 flex flex-row items-center justify-between pt-5">
                                    <span className="text-xl text-gray-300">Development Build</span>
                                    <a href={getDownloadLink(urls.dev)}>
                                        <Button className="float-right w-40 bg-blue-light-contrast font-bold hover:bg-blue-medium">Download</Button>
                                    </a>
                                </div>
                                <div>
                                    <div className="mb-8 flex flex-row items-center justify-between pt-5">
                                        <span className="text-xl text-gray-300">Experimental Build</span>
                                        <a href={expOnHold ? undefined : getDownloadLink(urls.exp)}>
                                            <Button
                                                className={`float-right w-40 bg-blue-light-contrast font-bold ${expOnHold ? 'cursor-not-allowed opacity-30' : 'hover:bg-blue-medium'}`}
                                            >
                                                Download
                                            </Button>
                                        </a>
                                    </div>
                                    {expOnHold && (
                                        <span className="mb-8 flex-wrap text-gray-300">
                                            Our Experimental Version is temporarily
                                            <a href="https://docs.flybywiresim.com/fbw-a32nx/support/exp/" className="text-blue-light">&#32;on hold&#32;</a>
                                            and all of its features have been moved to the Development Version.
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
