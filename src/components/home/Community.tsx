import React, { useEffect, useState } from 'react';
import { Map } from '@flybywiresim/react-components';
import CountTo from 'react-count-to';

const LIVE_FLIGHTS_ENDPOINT = 'https://api.flybywiresim.com/txcxn/_count';
const COMMIT_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/commits?per_page=1';
const CONTRIBUTOR_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/contributors?per_page=1';
const GITHUB_DOWNLOAD_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/releases';
const CDN_DOWNLOAD_COUNT_ENDPOINT = 'https://api.flybywiresim.com/api/v1/download/_count';

function LiveFlightsStat(): JSX.Element {
    const [liveFlights, setLiveFlights] = useState('0');

    useEffect(() => {
        fetch(LIVE_FLIGHTS_ENDPOINT).then((res) => res.text().then((flights) => setLiveFlights(flights)));
    }, []);

    const fn = (value: number) => <h1 className="text-6xl font-medium text-blue-dark-contrast mb-3">{value}</h1>;

    return (
        <div className="py-12 lg:py-0 lg:px-20 2xl:px-32 text-center">
            <CountTo to={Number(liveFlights)} speed={3000}>{fn}</CountTo>
            <span className="text-xl text-gray-700">Live Flights</span>
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

    const fn = (value: number) => <h1 className="text-6xl font-medium text-blue-dark-contrast mb-3">{value}</h1>;

    return (
        <div className="py-12 lg:py-0 lg:px-20 2xl:px-32 text-center">
            <CountTo to={Number(commitCount)} speed={3000}>{fn}</CountTo>
            <span className="text-xl text-gray-700">Commits</span>
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

    const fn = (value: number) => <h1 className="text-6xl font-medium text-blue-dark-contrast mb-3">{value}</h1>;

    return (
        <div className="py-12 lg:py-0 lg:px-20 2xl:px-32 text-center">
            <CountTo to={Number(contributorCount)} speed={3000}>{fn}</CountTo>
            <span className="text-xl text-gray-700">Contributors</span>
        </div>
    );
}

function DownloadCountStatistic(): JSX.Element {
    const [downloadCount, setDownloadCount] = useState(0);
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

    const fn = (value: number) => (
        <h1 className="text-6xl font-medium text-blue-dark-contrast mb-3">
            {value}
            {postfix}
        </h1>
    );

    return (
        <div className="py-12 lg:py-0 lg:px-20 2xl:px-32 text-center">
            <CountTo to={Number(downloadCount)} speed={3000}>{fn}</CountTo>
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
        <section className="bg-gray-50 relative">
            <div className="w-full mx-auto sm:px-6 lg:px-8 px-10 py-14">
                <div className="w-full sm:w-1/2 text-center mx-auto mb-11 divide-y divide-gray-400">
                    <h2 className="text-base font-semibold tracking-wider text-gray-600 uppercase">A GLANCE AT THE</h2>
                    <p className="mt-3 pt-3 text-5xl font-extrabold text-gray-700">
                        Community Insights
                    </p>
                </div>

                <div className="mx-auto flex flex-col lg:flex-row lg:justify-center divide-y lg:divide-x lg:divide-y-0 divide-gray-500">
                    <LiveFlightsStat />
                    <CommitCountStatistic />
                    <ContributorCountStatistic />
                    <DownloadCountStatistic />
                </div>
            </div>

            <div className="relative h-160 text-black z-20">
                <Map refreshInterval={mapRefreshInterval} disableMenu disableWeather={false} disableScroll forceTileset="carto-light" />
            </div>
        </section>
    );
}
