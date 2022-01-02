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
        <section id="community" className="flex flex-col justify-between items-center text-blue-dark-contrast bg-gray-50 lg:flex-row">
            <Container className="flex flex-col py-12 max-w-6xl lg:px-24">
                <span className="mb-3 w-24 h-2 bg-teal-light-contrast rounded-full" />
                <h1 >Community Insights</h1>
                <p className="max-w-prose text-gray-800">
                    Discover the extensive community behind every FlyByWire Simulations aircraft - a vibrant and active online group that prioritises collaborative work and openness.
                </p>

                <div className="grid grid-cols-2 gap-y-8 my-6 sm:grid-cols-4">
                    <Statistic statCount={liveFlights} statName="Live Flights" />
                    <Statistic statCount={commitCount} statName="Commits" />
                    <Statistic statCount={contributorCount} statName="Contributors" />
                    <Statistic statCount="1M+" statName="Downloads" />
                </div>

                <div className="my-8">
                    <Card bgColour="gray-100" className="border-discord shadow-lg">
                        <CardTitle>
                            <span className="flex justify-center items-center p-2 mr-2 bg-discord rounded-xl">
                                <Image src="/svg/discordLogo.svg" width={23} height={23} />
                            </span>
                            Discord
                        </CardTitle>
                        <CardBody>
                            Our Discord server is where we plan the entirety of our projects and provide most of our support.
                            Join us to chat with other members of the community, get started with contributing, or ask us a question!
                        </CardBody>

                        <a
                            className="self-center py-2 px-3 text-xl font-semibold text-white bg-discord hover:bg-discord-dark rounded-xl transition"
                            href="https://discord.gg/flybywire"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Join the Community
                            <IconArrowRight className="inline-flex mb-1 ml-1" size={20} stroke={2} />
                        </a>
                    </Card>
                </div>
            </Container>
            <div className="relative z-10 w-full h-144 lg:w-1/2 lg:h-200">
                <MapDisplay refreshInterval={mapRefreshInterval} disableMenu disableWeather={false} disableScroll forceTileset="carto-light" />
            </div>
        </section>
    );
};
