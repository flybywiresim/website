const LIVE_FLIGHTS_ENDPOINT = 'https://api.flybywiresim.com/txcxn/_count';
const COMMIT_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/commits?per_page=1';
const CONTRIBUTOR_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/contributors?per_page=1';

export const fetchInsightData = async () => {
    const [liveFlights, commitCount, contributorCount] = await Promise.all([
        fetch(LIVE_FLIGHTS_ENDPOINT).then((res) => res.text()),
        fetch(COMMIT_COUNT_ENDPOINT).then((res) => res.headers.get('Link')?.match(/&page=(\d+)>; rel="last"/)?.[1] ?? '0'),
        fetch(CONTRIBUTOR_COUNT_ENDPOINT).then((res) => res.headers.get('Link')?.match(/&page=(\d+)>; rel="last"/)?.[1] ?? '0'),
    ]);

    return {
        liveFlights,
        commitCount,
        contributorCount,
    };
};
