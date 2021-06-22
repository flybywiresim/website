import { PropsWithChildren } from 'react';
import Image from 'next/image';
import Container from '../utils/Container';

type ImageProps = {
    className?: string,
    src: string
};

type PartnerProps = {
    className?: string,
    name: string,
    path: string
};

export const PartnerImage = (props: ImageProps) => (
    <Image src={props.src} alt="Partner" width={180} height={150} objectFit="contain" />
);

export const Partner = (props: PropsWithChildren<PartnerProps>) => (
    <span id={props.name} className={`flex justify-center items-center ${props.className}`}>
        <a href={props.path} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    </span>
);

export const PartnerSection = () => (
    <section className="bg-blue-dark">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-16 max-w-screen-2xl">
            <Partner name="Flightsim.to" path="https://flightsim.to/">
                <PartnerImage src="/img/partners/flightsimto.png" />
            </Partner>
            <Partner name="FSNews" path="https://fsnews.eu/">
                <PartnerImage src="/img/partners/fsnews.png" />
            </Partner>
            <Partner name="YourControls" path="https://github.com/Sequal32/yourcontrols">
                <PartnerImage src="/img/partners/yourcontrols.png" />
            </Partner>
            <Partner name="SaltySimulations" path="https://sim4flight.com/salty/">
                <PartnerImage src="/img/partners/salty.svg" />
            </Partner>
            <Partner name="sim4flight" path="https://sim4flight.com/">
                <PartnerImage src="/img/partners/s4f.png" />
            </Partner>
        </Container>
    </section>
);
