import { Button } from '../../utils/Button';

export const Hero = () => (
    <>
        <header className="px-page absolute inset-x-2 inset-y-1/3 z-30 mx-auto max-w-7xl">
            <div className="flex flex-row items-end justify-between">
                <div>
                    <h2 className="mb-2 ml-2 text-2xl font-medium uppercase tracking-widest">
                        DISCOVER THE
                    </h2>
                    <h1 className="text-7xl font-medium sm:text-8xl">
                        <span className="text-blue-light">A32</span>
                        <span className="text-blue">N</span>
                        X
                    </h1>
                    <h1 className="mt-2 w-2/3 text-xl">
                        &quot;The potential within the A32NX project is extremely promising and its future is bright in the task of bringing the aircraft to a level of high fidelity.&quot;
                    </h1>
                    <p className="mt-4 text-xl text-gray-200">
                        - Dan, Real Airbus A320 Pilot
                    </p>
                    <div className="flex max-w-md py-5">

                        <a href="https://api.flybywiresim.com/installer">
                            <Button
                                className="mr-3 w-40 border-2 border-blue-light bg-blue-light text-xl font-bold hover:bg-white hover:text-blue-light"
                            >
                                Installer
                            </Button>
                        </a>

                        <a href="#download">
                            <Button
                                className="w-40 border-2 border-blue-light text-xl font-bold text-blue-light hover:bg-white hover:text-blue-light"
                            >
                                Download
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <img draggable="false" className="relative z-0 h-screen w-screen select-none object-cover opacity-30" src="/img/discord.jpg" alt="" />
    </>
);
