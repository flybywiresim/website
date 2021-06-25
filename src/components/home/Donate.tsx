import { Button } from '../utils/Button';
import Container from '../utils/Container';

export const Donate = () => (
    <section className="bg-blue-darker">
        <div className="relative">
            <img className="object-cover absolute w-full h-full opacity-10" src="/img/donate.jpg" alt="" />

            <Container className="flex relative top-0 flex-col items-center lg:items-start py-12 max-w-7xl">
                <div className="max-w-4xl text-center lg:text-left">
                    <h1 className="text-teal">Donate</h1>
                    <p>
                        Contributions allow FlyByWire Simulations to provide better services for our users,
                        such as fast and reliable download networks and integrated online features to enrich your flight simulation experience.
                    </p>
                    <p className="py-4">
                        We use Open Collective to transparently manage our donations and expenses, which means you can see how we utilize donated funds at any time.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-3 md:space-y-0 space-x-4 text-center lg:text-left">
                    <a href="https://opencollective.com/flybywire/" target="_blank" rel="noreferrer">
                        <Button className="w-40 hover:text-teal-light-contrast bg-teal-light-contrast hover:bg-white border-2 border-teal-light-contrast">
                            Donate
                        </Button>
                    </a>
                    <em className="self-center max-w-prose text-teal-100">
                        *No profit is generated from donations. Donating does not guarantee access to additional content nor its exclusivity if such content is ever given.
                    </em>
                </div>
            </Container>
        </div>
    </section>
);
