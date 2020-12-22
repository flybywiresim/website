import ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react';
import CountTo from "react-count-to";

function Commits() {
    const [commits, setCommits] = useState();

    async function getCommits() {
        try {
            const request = await fetch('https://api.github.com/repos/flybywiresim/a32nx/commits?per_page=1');
            const commitsCount = request.headers.get('Link').match(/&page=(\d+)>; rel="last"/)['1'];

            if (commitsCount) {
                setCommits(commitsCount);
            }
        } catch {}
    }

    useEffect(() => {
        const interval = setInterval(() => getCommits(), 600000);
        getCommits();
        return () => {
            clearInterval(interval);
        };
    })

    const fn = value => <h1>{value}</h1>;
    return (
        <CountTo to={Number(commits)} speed={2000}>{fn}</CountTo>
    );
}

const container = document.getElementById('commits');

if (container) {
    ReactDOM.render(<Commits />, container);
}
