import React from 'react';
import { Button } from '../../Button';

export const Download: React.FC = () => {
    const urls = {
        stable: 'https://flybywiresim-packages.b-cdn.net/stable/A32NX-stable.zip',
        dev: 'https://flybywiresim-packages.b-cdn.net/vmaster/A32NX-master.zip',
        exp: 'https://flybywiresim-packages.b-cdn.net/vmaster-cfbw-cap/A32NX-master-cfbw-cap.zip',
    };

    const getDownloadLink = (link: string) => `https://api.flybywiresim.com/api/v1/download?url=${link}`;

    return (
        <section id="download" className="relative bg-blue-dark-contrast">
            <div className="w-full lg:w-11/12 2xl:w-4/6 m-auto px-10 py-14">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-3/5 lg:pr-12">
                        <div className="text-left divide-y divide-gray-500 w-1/2 2xl:w-1/4">
                            <h2 className="text-base font-medium tracking-widest text-blue-200 uppercase">READY TO FLY?</h2>
                            <p className="mt-3 pt-3 text-5xl font-medium text-blue-light">
                                Download
                            </p>
                        </div>

                        <p className="mt-5 max-w-prose text-xl text-white">
                            We have included many options to download our addons, you can use our custom and simple installer to always keep your products up to date,
                            or you can download using standalone installations.
                        </p>

                        <ul className="list-disc -m-2 pt-7 pl-5 text-lg text-gray-200">
                            <li className="ml-2 pl-2">Integrates seamlessly into Microsoft Flight Simulator - no external programs required.</li>
                            <li className="ml-2 pl-2">Safe, trustworthy, and constantly updated to assure nothing is broken.</li>
                            <li className="ml-2 pl-2">One click install, neatly organized into one compact folder.</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-2/5 flex flex-col divide-y divide-gray-500">
                        {/* Installer */}
                        <div className="pt-16 lg:pt-0 pb-8">
                            <span className="text-4xl text-blue-100">Installer</span>

                            <p className="max-w-prose mt-4 mb-6">
                                Our easy-to-use installer is the easiest way to get started with our addons. Simply launch and install any addon you want, with only two clicks.
                            </p>

                            <a href="https://api.flybywiresim.com/installer">
                                <Button className="w-40 float-right bg-green-500 hover:bg-green-700 font-bold">Download</Button>
                            </a>
                        </div>

                        {/* Direct Download */}
                        <div className="pt-7">
                            <span className="text-2xl text-blue-100">Direct Download</span>
                            <p className="max-w-prose mt-4 mb-6">
                                If you prefer a direct download, the following links are available.
                            </p>

                            <div className="divide-y divide-gray-700">
                                <div className="flex flex-row justify-between items-center mb-5">
                                    <span className="text-xl text-gray-300">Stable Release</span>
                                    <a href={getDownloadLink(urls.stable)}>
                                        <Button className="w-40 float-right bg-green-500 hover:bg-green-700 font-bold">Download</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center mb-5 pt-5">
                                    <span className="text-xl text-gray-300">Development Build</span>
                                    <a href={getDownloadLink(urls.dev)}>
                                        <Button className="w-40 float-right bg-blue-light-contrast hover:bg-blue-medium font-bold">Download</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center mb-8 pt-5">
                                    <span className="text-xl text-gray-300">Experimental Build</span>
                                    <a href={getDownloadLink(urls.exp)}>
                                        <Button className="w-40 float-right bg-blue-light-contrast hover:bg-blue-medium font-bold">Download</Button>
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
