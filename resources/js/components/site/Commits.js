import ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react';

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

    return (
        <div>
            <h1>{commits ? commits : 'N/A'}</h1>
        </div>
    );
}

const container = document.getElementById('commits');

if (container) {
    ReactDOM.render(<Commits />, container);
}
