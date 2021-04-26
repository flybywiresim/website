import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import CountTo from 'react-count-to';
import { MapProps } from '@flybywiresim/react-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody, CardTitle } from '../utils/Card';

const MapDisplay = dynamic<MapProps>(
    () => import('@flybywiresim/react-components').then((mod) => mod.Map),
    { ssr: false },
);

const LIVE_FLIGHTS_ENDPOINT = 'https://api.flybywiresim.com/txcxn/_count';
const COMMIT_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/commits?per_page=1';
const CONTRIBUTOR_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/contributors?per_page=1';

// Commented out until fix from API is released.

/* const GITHUB_DOWNLOAD_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/releases';
const CDN_DOWNLOAD_COUNT_ENDPOINT = 'https://api.flybywiresim.com/api/v1/download/_count'; */

function LiveFlightsStat(): JSX.Element {
    const [liveFlights, setLiveFlights] = useState('0');

    useEffect(() => {
        fetch(LIVE_FLIGHTS_ENDPOINT).then((res) => res.text().then((flights) => setLiveFlights(flights)));
    }, []);

    const fn = (value: number) => <h1 className="text-5xl font-bold text-blue-dark-contrast">{value}</h1>;

    return (
        <div>
            <CountTo to={Number(liveFlights)} speed={3000}>{fn}</CountTo>
            <p className="text-xl">Live Flights</p>
        </div>
    );
}

function CommitCountStatistic(): JSX.Element {
    const [commitCount, setCommitCount] = useState('0');

    useEffect(() => {
        fetch(COMMIT_COUNT_ENDPOINT).then((res) => {
            const commitCount = res.headers.get('Link')?.match(/&page=(\d+)>; rel="last"/)?.[1] ?? '0';

            setCommitCount(commitCount);
        });
    }, []);

    const fn = (value: number) => <h1 className="text-5xl font-bold text-blue-dark-contrast">{value}</h1>;

    return (
        <div>
            <CountTo to={Number(commitCount)} speed={3000}>{fn}</CountTo>
            <p className="text-xl">Commits</p>
        </div>
    );
}

function ContributorCountStatistic(): JSX.Element {
    const [contributorCount, setContributorCount] = useState('0');

    useEffect(() => {
        fetch(CONTRIBUTOR_COUNT_ENDPOINT).then((res) => {
            const commitCount = res.headers.get('Link')?.match(/&page=(\d+)>; rel="last"/)?.[1] ?? '0';

            setContributorCount(commitCount);
        });
    }, []);

    const fn = (value: number) => <h1 className="text-5xl font-bold text-blue-dark-contrast">{value}</h1>;

    return (
        <div>
            <CountTo to={Number(contributorCount)} speed={3000}>{fn}</CountTo>
            <p className="text-xl">Contributors</p>
        </div>
    );
}

function DownloadCountStatistic(): JSX.Element {
    // Disabled until API fix is released.

    /* const [downloadCount, setDownloadCount] = useState(0);
    const [postfix, setPostfix] = useState('');

    useEffect(() => {
        fetch(GITHUB_DOWNLOAD_COUNT_ENDPOINT).then((res) => {
            res.json().then((reqJson) => {
                const downloads: number[] = [];

                reqJson.forEach((item: any) => {
                    item.assets.forEach((download: any) => {
                        downloads.push(download.download_count);
                    });
                });

                fetch(CDN_DOWNLOAD_COUNT_ENDPOINT).then((res) => res.text().then((cdnDownloadCount) => {
                    let totalDownloads = downloads.reduce((a, b) => a + b);

                    if (cdnDownloadCount) {
                        totalDownloads += Number(cdnDownloadCount);
                    }

                    if (totalDownloads >= 1000) {
                        totalDownloads = Math.floor(totalDownloads / 1000);
                        setPostfix('K');
                    }

                    if (totalDownloads) {
                        setDownloadCount(totalDownloads);
                    }
                }));
            });
        });
    }, []);
     */

    const fn = (value: number) => (
        <h1 className="text-6xl font-medium text-blue-dark-contrast mb-3">
            {value}
            M+
        </h1>
    );

    return (
        <div className="py-12 lg:py-0 lg:px-20 2xl:px-32 text-center">
            <CountTo to={1} speed={3000}>{fn}</CountTo>
            <span className="text-xl text-gray-700">Downloads</span>
        </div>
    );
}

export function Community(): JSX.Element {
    const [mapRefreshInterval, setMapRefreshInterval] = useState(5_000);

    useEffect(() => {
        const interval = setInterval(() => {
            setMapRefreshInterval(document.visibilityState === 'visible' ? 10_000 : 100_000);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex justify-between items-center bg-gray-50 text-blue-dark-contrast">
            <div className="mt-10 px-24 flex flex-col">
                <span className="w-24 h-2 bg-teal-light-contrast rounded-full mb-3" />
                <h1 className="text-5xl font-bold">
                    Community Insights
                </h1>
                <p className="text-xl text-gray-800 max-w-prose py-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto iste odio? Adipisci aliquam,
                    consectetur cumque doloremque doloribus illum ipsam laboriosam minus nemo obcaecati quas quasi ratione soluta vero voluptatum.
                </p>
                <div className="grid grid-cols-4 my-6">
                    <LiveFlightsStat />
                    <CommitCountStatistic />
                    <ContributorCountStatistic />
                    <div id="downloadStatistics">
                        <h1 className="text-5xl font-bold">
                            1M
                        </h1>
                        <p className="text-xl">Downloads</p>
                    </div>
                </div>

                <div className="mt-12">
                    <Card bgColour="gray-100" borderColour="discord">
                        <CardTitle>Discord</CardTitle>
                        <CardBody>
                            Our Discord server is where we plan the entirety of our projects and provide most of our support.
                            Join us to chat with other members of the community, get started with contributing or ask us a question!
                        </CardBody>
                        <a
                            className="font-semibold text-discord hover:text-discord-dark py-8"
                            href="https://discord.gg/flybywire"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Join the Community
                            <FontAwesomeIcon className="mx-1" icon={faArrowRight} size="sm" />
                        </a>
                    </Card>
                </div>
            </div>
            <div className="relative h-200 w-1/2 z-10">
                <MapDisplay refreshInterval={mapRefreshInterval} disableMenu disableWeather={false} disableScroll forceTileset="carto-light" />
            </div>
        </section>
    );
}
