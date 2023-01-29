import Image from 'next/image';
import { useEffect, useState } from 'react';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Map from '../../components/Map/Map';
import { fetchInsightData } from '../../hooks/fetchInsightData';
import Discord from '../../components/Discord/Discord';

const Statistic = (props: { value: string, label: string }) => (
    <div>
        <h2>{props.value}</h2>
        <p className="text-sm">{props.label}</p>
    </div>
);
const Insights = () => {
    const [liveFlights, setLiveFlights] = useState('0');
    const [commitCount, setCommitCount] = useState('0');
    const [contributorCount, setContributorCount] = useState('0');
    const [mapRefreshInterval, setMapRefreshInterval] = useState(5_000);

    useEffect(() => {
        fetchInsightData().then((res) => {
            setLiveFlights(res.liveFlights);
            setCommitCount(res.commitCount);
            setContributorCount(res.contributorCount);
        });

        const interval = setInterval(() => {
            setMapRefreshInterval(document.visibilityState === 'visible' ? 10_000 : 100_000);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <Section theme="light" className="relative flex flex-col py-0 lg:flex-row-reverse">
            <Container display="flex flex-col items-center justify-center py-20">
                <Container className="grid gap-y-4 text-center lg:text-left">
                    <div className="flex flex-col items-center gap-4 lg:flex-row">
                        <Image src="/svg/tail/tail.svg" width={40} height={40} />
                        <h2>Community Insights</h2>
                    </div>

                    <div className="max-w-prose">
                        <p>
                            Discover the extensive community behind every FlyByWire Simulations aircraft - a vibrant and active online group that prioritises collaborative work and openness.
                        </p>

                        <ul className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                            <Statistic value={liveFlights} label="Live Flights" />
                            <Statistic value={commitCount} label="Commits" />
                            <Statistic value={contributorCount} label="Contributors" />
                            <Statistic value="2M+" label="Downloads" />
                        </ul>
                        <hr className="my-6" />

                        <Discord />
                    </div>

                </Container>
            </Container>

            <div className="relative z-10 h-[40em] w-full px-8 pb-4 lg:w-2/3 lg:p-0">
                <Map refreshInterval={mapRefreshInterval} disableMenu disableWeather={false} disableScroll forceTileset="carto-light" />
            </div>
        </Section>
    );
};

export default Insights;
