import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { MapProps } from '@flybywiresim/react-components';
import { IconArrowRight } from '@tabler/icons';
import { Card, CardBody, CardTitle } from '../utils/Card';
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
        <h1 className="text-5xl font-bold text-blue-dark-contrast">{props.statCount}</h1>
        <p>{props.statName}</p>
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
        <section id="community" className="flex flex-col items-center justify-between bg-gray-800 text-blue-dark-contrast lg:flex-row">
            <Container className="flex max-w-6xl flex-col py-12 lg:px-24">
                <span className="mb-3 h-2 w-24 rounded-full bg-teal-light-contrast" />
                <h1 className="text-slate-50">Community Insights</h1>
                <p className="max-w-prose text-slate-300">
                    Discover the extensive community behind every FlyByWire Simulations aircraft - a vibrant and active online group that prioritises collaborative work and openness.
                </p>

                <div className="my-6 grid grid-cols-2 gap-y-8 sm:grid-cols-4 text-slate-50">
                    <Statistic statCount={liveFlights} statName="Live Flights" />
                    <Statistic statCount={commitCount} statName="Commits" />
                    <Statistic statCount={contributorCount} statName="Contributors" />
                    <Statistic statCount="1M+" statName="Downloads" />
                </div>

                <div className="my-8">
                    <Card bgColour="blue-dark-contrast" className="border-discord shadow-lg text-white">
                        <CardTitle>
                            <span className="mr-2 flex items-center justify-center rounded-xl bg-discord p-2">
                                <Image src="/svg/discordLogo.svg" width={23} height={23} />
                            </span>
                            Discord
                        </CardTitle>
                        <CardBody>
                            Our Discord server is where we plan the entirety of our projects and provide most of our support.
                            Join us to chat with other members of the community, get started with contributing, or ask us a question!
                        </CardBody>

                        <a
                            className="self-center rounded-xl bg-discord px-3 py-2 text-xl font-semibold text-white transition hover:bg-discord-dark"
                            href="https://discord.gg/flybywire"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Join the Community
                            <IconArrowRight className="mb-1 ml-1 inline-flex" size={20} stroke={2} />
                        </a>
                    </Card>
                </div>
            </Container>
            <div className="relative z-10 h-144 w-full lg:h-200 lg:w-1/2">
                <MapDisplay refreshInterval={mapRefreshInterval} disableMenu disableWeather={false} disableScroll forceTileset="carto-dark" />
            </div>
        </section>
    );
};
