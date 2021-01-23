import React from 'react';
import { Button } from '../Button';

export function Download(): JSX.Element {
    return (
        <>
            <div className="w-full lg:w-11/12 2xl:w-5/6 m-auto px-5 md:px-10 py-10">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-3/5 lg:pr-10">
                        <h1 className="text-4xl font-medium text-left pb-7">Download</h1>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid asperiores deleniti doloremque error et eveniet, expedita facere labore numquam quidem quisquam, quod rerum sed tempora. Alias cupiditate deleniti dignissimos, ducimus eligendi iusto laboriosam nulla officiis possimus, quos sapiente suscipit, totam voluptatum! Ab deserunt harum minima minus odit tempore ut? Ab accusantium ad aliquam amet aut corporis dignissimos, esse id ipsa, ipsum, neque nesciunt omnis quaerat quidem quis sapiente ullam.</p>
                    </div>
                    <div className="w-full lg:w-2/5 flex flex-col divide-y divide-gray-500">
                        <div className="py-5">
                            <span className="text-2xl text-blue-100">Installer</span>
                            <p className="mt-4 mb-6">Our easy-to-use installer is the easiest way to get started with our addons. Simply launch and install any addon you want, with only two clicks.</p>
                            <Button className="w-40 float-right bg-green-500 font-bold">Download</Button>
                        </div>
                        <div className="py-5">
                            <span className="text-2xl text-blue-100">Direct Download</span>
                            <p className="mt-4 mb-6">If you prefer a direct download, the following links are available.</p>

                            <div className="divide-y divide-gray-700">
                                <div className="flex flex-row justify-between items-center mb-5">
                                    <span className="text-xl text-gray-300">Stable release</span>
                                    <Button className="w-40 float-right bg-green-500 font-bold">Download</Button>
                                </div>
                                <div className="flex flex-row justify-between items-center mb-5 pt-5">
                                    <span className="text-xl text-gray-300">Development build</span>
                                    <Button className="w-40 float-right bg-blue-700 font-bold">Download</Button>
                                </div>
                                <div className="flex flex-row justify-between items-center mb-5 pt-5">
                                    <span className="text-xl text-gray-300">Custom fly-by-wire build</span>
                                    <Button className="w-40 float-right bg-blue-700 font-bold">Download</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
