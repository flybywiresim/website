import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { MapProps } from '@flybywiresim/react-components';
import Container from '../utils/Container';

const MapDisplay = dynamic<MapProps>(
    () => import('@flybywiresim/react-components').then((mod) => mod.Map),
    { ssr: false },
);

const LIVE_FLIGHTS_ENDPOINT = 'https://api.flybywiresim.com/txcxn/_count';
const COMMIT_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/commits?per_page=1';
const CONTRIBUTOR_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/contributors?per_page=1';

const Statistic = (props: {statCount: string, statName: string}) => (
    <div id={props.statName}>
        <h1 className="text-5xl font-semiold">{props.statCount}</h1>
        <p className="text-base opacity-75">{props.statName}</p>
    </div>
);

export const Community = () => {
    const [liveFlights, setLiveFlights] = useState('0');
    const [commitCount, setCommitCount] = useState('0');
    const [contributorCount, setContributorCount] = useState('0');
    const [mapRefreshInterval, setMapRefreshInterval] = useState(5_000);
    useEffect(() => {
        fetch(LIVE_FLIGHTS_ENDPOINT).then((res) => res.text().then((flights) => setLiveFlights(flights)));

        fetch(COMMIT_COUNT_ENDPOINT).then((res) => {
            const commitCount = res.headers.get('Link')?.match(/&page=(\d+)>; rel="last"/)?.[1] ?? '0';

            setCommitCount(commitCount);
        });

        fetch(CONTRIBUTOR_COUNT_ENDPOINT).then((res) => {
            const commitCount = res.headers.get('Link')?.match(/&page=(\d+)>; rel="last"/)?.[1] ?? '0';

            setContributorCount(commitCount);
        });

        const interval = setInterval(() => {
            setMapRefreshInterval(document.visibilityState === 'visible' ? 10_000 : 100_000);
        }, 100);

        return () => clearInterval(interval);
    }, []);
    return (
        <section id="community" className="flex flex-col justify-between text-black bg-gray-50 lg:flex-row lg:items-center">
            <div className="relative z-10 w-full h-144 lg:w-1/2 lg:h-200">
                <MapDisplay refreshInterval={mapRefreshInterval} disableMenu disableWeather={false} disableScroll forceTileset="carto-light" />
            </div>
            <Container className="flex flex-col py-7 max-w-6xl">

                <h1>Community Insights</h1>
                <p className="mt-5 max-w-prose opacity-75">
                    Discover the extensive community behind every FlyByWire Simulations aircraft - a vibrant and active online group that prioritises collaborative work and openness.
                </p>

                <div className="flex flex-wrap gap-x-16 gap-y-6 my-6 sm:grid-cols-4">
                    <Statistic statCount={liveFlights} statName="Live Flights" />
                    <Statistic statCount={commitCount} statName="Commits" />
                    <Statistic statCount={contributorCount} statName="Contributors" />
                    <Statistic statCount="1M+" statName="Downloads" />
                </div>

                <hr className="my-6" />

                <div className="flex space-x-5">
                    <Image src="/svg/Discord-Icon.svg" width={45} height={34.86} />
                    <h1 className="mt-2 text-3xl text-discord">Discord</h1>
                </div>
                <p className="pt-5 max-w-prose opacity-75">
                    Join us to chat with other members of the community, get started with contributing, or ask us a question!
                </p>
                <button type="button" className="self-start py-2 px-6 mt-5 font-semibold text-white bg-discord hover:bg-discord-dark rounded-lg text-md">
                    <a
                        href="https://discord.gg/flybywire"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Join the Community
                    </a>
                </button>

            </Container>
        </section>
    );
};
