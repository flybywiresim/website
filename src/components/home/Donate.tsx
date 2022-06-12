import { Button } from '../utils/Button';

export const Donate = () => (
    <section className="h-[495px]">
        <div
            className="relative w-full h-full bg-navy-dark bg-[center_-12.8rem]"
            style={{ backgroundImage: 'url("/svg/airfoil.svg")' }}
        >
            {/* <Image src="/svg/airfoil.svg" width={1920} height={705.02} className="object-cover absolute opacity-[3%]"/> */}

            <div className="flex flex-col justify-center py-12 h-full lg:items-start px-page">
                <div className="max-w-4xl text-center lg:text-left">
                    <h1 className="text-cyan">Donate</h1>
                    <p className="mt-6">
                        Contributions allow FlyByWire Simulations to provide better services for our users,
                        such as fast and reliable download networks and integrated online features to enrich your flight simulation experience.
                    </p>
                    <p className="mt-6">
                        We use Open Collective to transparently manage our donations and expenses, which means you can see how we utilize donated funds at any time.
                    </p>
                </div>
                <div className="flex flex-col items-center mt-6 space-y-3 space-x-4 text-center md:space-y-0 lg:flex-row lg:items-start lg:text-left">
                    <a href="https://opencollective.com/flybywire/" target="_blank" rel="noreferrer">
                        <Button className="w-40 hover:text-teal-light-contrast bg-teal-light-contrast hover:bg-white border-2 border-teal-light-contrast">
                            Donate
                        </Button>
                    </a>
                    <em className="self-center max-w-prose text-teal-100">
                        *No profit is generated from donations. Donating does not guarantee access to additional content nor its exclusivity if such content is ever given.
                    </em>
                </div>
            </div>
        </div>
    </section>
);
