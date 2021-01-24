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
            <div className="w-full lg:w-11/12 2xl:w-4/6 m-auto px-5 md:px-10 pt-10">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-3/5 lg:pr-10">
                        <h1 className="text-4xl font-medium text-left pb-7">Download</h1>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid asperiores deleniti doloremque error et eveniet, expedita facere labore numquam quidem quisquam, quod rerum sed tempora. Alias cupiditate deleniti dignissimos, ducimus eligendi iusto laboriosam nulla officiis possimus, quos sapiente suscipit, totam voluptatum! Ab deserunt harum minima minus odit tempore ut? Ab accusantium ad aliquam amet aut corporis dignissimos, esse id ipsa, ipsum, neque nesciunt omnis quaerat quidem quis sapiente ullam.</p>
                        <ul className="list-disc pt-5 pl-5 text-lg text-gray-200">
                            <li className="ml-2 pl-2">Integrates seamlessly into Microsoft Flight Simulator - no external programs required</li>
                            <li className="ml-2 pl-2">100% reversible - uninstall by deleting the addon folder</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-2/5 flex flex-col divide-y divide-gray-500">
                        <div className="py-5">
                            <span className="text-2xl text-blue-100">Installer</span>
                            <p className="mt-4 mb-6">Our easy-to-use installer is the easiest way to get started with our addons. Simply launch and install any addon you want, with only two clicks.</p>
                            <a href="https://api.flybywiresim.com/installer">
                                <Button className="w-40 float-right bg-green-500 font-bold">Download</Button>
                            </a>
                        </div>
                        <div className="pt-5">
                            <span className="text-2xl text-blue-100">Direct Download</span>
                            <p className="mt-4 mb-6">If you prefer a direct download, the following links are available.</p>

                            <div className="divide-y divide-gray-700">
                                <div className="flex flex-row justify-between items-center mb-5">
                                    <span className="text-xl text-gray-300">Stable release</span>
                                    <a href={getDownloadLink(urls.stable)}>
                                        <Button className="w-40 float-right bg-green-500 font-bold">Download</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center mb-5 pt-5">
                                    <span className="text-xl text-gray-300">Development build</span>
                                    <a href={getDownloadLink(urls.dev)}>
                                        <Button className="w-40 float-right bg-blue-700 font-bold">Download</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center mb-5 pt-5">
                                    <span className="text-xl text-gray-300">Custom fly-by-wire build</span>
                                    <a href={getDownloadLink(urls.cfbw)}>
                                        <Button className="w-40 float-right bg-blue-700 font-bold">Download</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
