import { Button } from '../utils/Button';

export const Download = () => {
    const urls = {
        stable: 'http://cdn.flybywiresim.com/addons/a32nx/stable/full.zip',
        dev: 'http://cdn.flybywiresim.com/addons/a32nx/master/full.zip',
        exp: 'http://cdn.flybywiresim.com/addons/a32nx/experimental/full.zip',
    };

    const getDownloadLink = (link: string) => `${link}`;

    return (
        <section id="download" className="relative bg-blue-dark-contrast">
            <div className="py-14 px-10 m-auto w-full lg:w-11/12 2xl:w-4/6">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:pr-10 lg:w-3/5">
                        <div className="w-1/2 text-left divide-y divide-gray-500 2xl:w-1/4">
                            <h2 className="text-base font-medium tracking-widest text-blue-200 uppercase">READY TO FLY?</h2>
                            <p className="pt-3 mt-3 text-5xl font-medium text-blue-light">
                                Download
                            </p>
                        </div>
                        <p className="mt-5 max-w-prose text-xl">
                            We have included many options to download our addons,
                            you can use our custom and simple installer to always keep your products up to date, or you can download using standalone installations.
                        </p>
                        <ul className="pt-5 pl-5 -m-2 text-lg list-disc text-gray-200">
                            <li className="pl-2 ml-2">Integrates seamlessly into Microsoft Flight Simulator - no external programs required.</li>
                            <li className="pl-2 ml-2">Safe, trustworthy, and constantly updated to assure nothing is broken.</li>
                            <li className="pl-2 ml-2">One click install, neatly organized into one compact folder.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col w-full divide-y divide-gray-500 lg:w-2/5">
                        {/* Installer */}
                        <div className="pt-5 pb-5 lg:pt-0">
                            <span className="text-4xl text-blue-100">Installer</span>
                            <p className="mt-4 mb-6">
                                Our easy-to-use installer is the easiest way to get started with our addons.
                                Simply launch and install any addon you want, with only two clicks.
                            </p>
                            <a href="https://api.flybywiresim.com/installer">
                                <Button className="float-right w-40 font-bold bg-green-500 hover:bg-green-700">Download</Button>
                            </a>
                        </div>

                        {/* Direct Download */}
                        <div className="pt-5">
                            <span className="text-2xl text-blue-100">Direct Download</span>
                            <p className="mt-4 mb-6">If you prefer a direct download, the following links are available.</p>

                            <div className="divide-y divide-gray-700">
                                <div className="flex flex-row justify-between items-center mb-5">
                                    <span className="text-xl text-gray-300">Stable Release</span>
                                    <a href={getDownloadLink(urls.stable)}>
                                        <Button className="float-right w-40 font-bold bg-green-500 hover:bg-green-700">Download</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center pt-5 mb-5">
                                    <span className="text-xl text-gray-300">Development Build</span>
                                    <a href={getDownloadLink(urls.dev)}>
                                        <Button className="float-right w-40 font-bold bg-blue-light-contrast hover:bg-blue-medium">Download</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center pt-5 mb-8">
                                    <span className="text-xl text-gray-300">Experimental Build</span>
                                    <a href={getDownloadLink(urls.exp)}>
                                        <Button className="float-right w-40 font-bold bg-blue-light-contrast hover:bg-blue-medium">Download</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
