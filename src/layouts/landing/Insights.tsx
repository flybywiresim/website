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
        <p className="te text-sm">{props.label}</p>
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
        <Section theme="light" className="relative z-20">
            <Container display="grid gap-y-5 text-center">
                <Image src="/svg/tail/tail.svg" width={40} height={40} />

                <h2>Community Insights</h2>
                <p>Discover the extensive community behind every FlyByWire Simulations aircraft.</p>

                <ul className="grid grid-cols-2 gap-5">
                    <Statistic value={liveFlights} label="Live Flights" />
                    <Statistic value={commitCount} label="Commits" />
                    <Statistic value={contributorCount} label="Contributors" />
                    <Statistic value="2M+" label="Downloads" />
                </ul>

                <div className="mt-8 h-144">
                    <Map refreshInterval={mapRefreshInterval} disableMenu disableWeather={false} disableScroll forceTileset="dark" />
                </div>

                <div className="pt-8">
                    <Discord />
                </div>
            </Container>
        </Section>
    );
};

export default Insights;
