import { Button } from '../utils/Button';
import Container from '../utils/Container';

export const Donate = () => (
    <section className="bg-blue-darker">
        <div className="relative">
            <img className="object-cover absolute w-full h-full opacity-10" src="/img/donate.jpg" alt="" />

            <Container className="flex relative top-0 flex-col py-12 items-center lg:items-start max-w-7xl">
                <div className="text-center lg:text-left max-w-4xl">
                    <h1 className="text-teal">Donate</h1>
                    <p>
                        Contributions allow FlyByWire Simulations to provide better services for our users,
                        such as fast and reliable download networks and integrated online features to enrich your flight simulation experience.
                    </p>
                    <p className="py-4">
                        We use Open Collective to transparently manage our donations and expenses, which means you can see how we utilize donated funds at any time.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-3 space-x-4 text-center lg:text-left lg:flex-row lg:items-start">
                    <a href="https://opencollective.com/flybywire/" target="_blank" rel="noreferrer">
                        <Button className="w-40 border-2 bg-teal-light-contrast border-teal-light-contrast hover:bg-white hover:text-teal-light-contrast">
                            Donate
                        </Button>
                    </a>
                    <em className="max-w-prose text-teal-100">
                        *No profit is generated from donations. Donating does not guarantee access to additional content nor its exclusivity if such content is ever given.
                    </em>
                </div>
            </Container>
        </div>
    </section>
);
