import React from 'react';
import { Button } from '../Button';

export function Download(): JSX.Element {
    const urls = {
        stable: 'https://flybywiresim-packages.nyc3.cdn.digitaloceanspaces.com/stable/A32NX-stable.zip',
        dev: 'https://flybywiresim-packages.nyc3.cdn.digitaloceanspaces.com/vmaster/A32NX-master.zip',
        cfbw: 'https://flybywiresim-packages.nyc3.cdn.digitaloceanspaces.com/vmaster-cfbw/A32NX-master-cfbw.zip'
    };

    const getDownloadLink = (link: string) => `https://api.flybywiresim.com/api/v1/download?url=${link}`;

    return (
        <>
            <div className="relative bg-blue-dark">
                <div className="w-full lg:w-11/12 2xl:w-4/6 m-auto px-10 py-14">
                    <div className="flex flex-col lg:flex-row">
                        <div data-aos-offset="200" className="w-full lg:w-3/5 lg:pr-10">
                            <div data-aos="zoom-in">
                                <div className="text-left divide-y divide-gray-500 w-1/2 2xl:w-1/4">
                                    <h2 className="text-base font-medium tracking-wider text-blue-200 uppercase">READY TO FLY ?</h2>
                                    <p className="mt-3 pt-3 text-5xl font-medium text-blue-light">
                                        Download
                                    </p>
                                </div>

                                <p className="mt-5 max-w-prose text-xl text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur consequuntur dicta fuga iste maiores obcaecati officiis qui reiciendis, voluptatibus!</p>
                            </div>
                            <ul data-aos="fade-up" data-aos-delay="300" className="list-disc pt-5 pl-5 text-lg text-gray-200">
                                <li className="ml-2 pl-2">Integrates seamlessly into Microsoft Flight Simulator - no external programs required</li>
                                <li className="ml-2 pl-2">100% reversible - uninstall by deleting the addon folder</li>
                            </ul>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="300" className="w-full lg:w-2/5 flex flex-col divide-y divide-gray-500">
                            <div className="pt-5 lg:pt-0 pb-5">
                                <span className="text-4xl text-blue-100">Installer</span>
                                <p className="mt-4 mb-6">Our easy-to-use installer is the easiest way to get started with our addons. Simply launch and install any addon you want, with only two clicks.</p>
                                <a href="https://api.flybywiresim.com/installer">
                                    <Button className="w-40 float-right bg-green-500 hover:bg-green-600 font-bold">Download</Button>
                                </a>
                            </div>
                            <div className="pt-5">
                                <span className="text-2xl text-blue-100">Direct Download</span>
                                <p className="mt-4 mb-6">If you prefer a direct download, the following links are available.</p>

                                <div className="divide-y divide-gray-700">
                                    <div className="flex flex-row justify-between items-center mb-5">
                                        <span className="text-xl text-gray-300">Stable release</span>
                                        <a href={getDownloadLink(urls.stable)}>
                                            <Button className="w-40 float-right bg-green-500 hover:bg-green-600 font-bold">Download</Button>
                                        </a>
                                    </div>
                                    <div className="flex flex-row justify-between items-center mb-5 pt-5">
                                        <span className="text-xl text-gray-300">Development build</span>
                                        <a href={getDownloadLink(urls.dev)}>
                                            <Button className="w-40 float-right bg-blue-700 hover:bg-blue-800 font-bold">Download</Button>
                                        </a>
                                    </div>
                                    <div className="flex flex-row justify-between items-center mb-8 pt-5">
                                        <span className="text-xl text-gray-300">Custom fly-by-wire build</span>
                                        <a href={getDownloadLink(urls.cfbw)}>
                                            <Button className="w-40 float-right bg-blue-700 hover:bg-blue-800 font-bold">Download</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
