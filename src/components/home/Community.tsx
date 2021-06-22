import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapProps } from '@flybywiresim/react-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
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
        <p className="p-0">{props.statName}</p>
    </div>
);

export function Community(): JSX.Element {
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
        <section className="flex flex-col lg:flex-row justify-between items-center bg-gray-50 text-blue-dark-contrast">
            <Container className="max-w-6xl lg:px-24 flex flex-col py-12">
                <span className="w-24 h-2 bg-teal-light-contrast rounded-full mb-3" />
                <h1>Community Insights</h1>
                <p className="text-gray-800 max-w-prose">
                    Discover the extensive community behind every FlyByWire Simulations aircraft - a vibrant and active online group that prioritises collaborative work and openness.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 my-6">
                    <Statistic statCount={liveFlights} statName="Live Flights" />
                    <Statistic statCount={commitCount} statName="Commits" />
                    <Statistic statCount={contributorCount} statName="Contributors" />
                    <Statistic statCount="1M+" statName="Live Flights" />
                </div>

                <div className="my-8">
                    <Card bgColour="gray-100" className="border-discord shadow-lg">
                        <CardTitle>
                            <FontAwesomeIcon className="mr-2 text-discord" icon={faDiscord} size="sm" />
                            Discord
                        </CardTitle>
                        <CardBody>
                            Our Discord server is where we plan the entirety of our projects and provide most of our support.
                            Join us to chat with other members of the community, get started with contributing, or ask us a question!
                        </CardBody>

                        <a
                            className="bg-discord text-xl font-semibold text-white hover:bg-discord-dark transition py-2 px-3 rounded-xl self-center"
                            href="https://discord.gg/flybywire"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Join the Community
                            <IconArrowRight className="inline-flex font-mono mb-1" stroke={3} />
                        </a>
                    </Card>
                </div>
            </Container>
            <div className="relative h-144 lg:h-200 w-full lg:w-1/2 z-10">
                <MapDisplay refreshInterval={mapRefreshInterval} disableMenu disableWeather={false} disableScroll forceTileset="carto-light" />
            </div>
        </section>
    );
}
