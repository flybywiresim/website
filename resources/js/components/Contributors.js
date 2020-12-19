import ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react';

function Contributors() {
    const [contributors, setContributors] = useState();

    async function getContributors() {
        try {
            const request = await fetch('https://api.github.com/repos/flybywiresim/a32nx/contributors?per_page=1');

            const contributorsCount = request.headers.get('Link').match(/&page=(\d+)>; rel="last"/)['1'];

            if (contributorsCount) {
                setContributors(contributorsCount);
            }
        } catch {}
    }

    useEffect(() => {
        const interval = setInterval(() => getContributors(), 600000);
        getContributors();
        return () => {
            clearInterval(interval);
        };
    })

    return (
        <div>
            <h1>{contributors ? contributors : 'N/A'}</h1>
        </div>
    );
}

const container = document.getElementById('contributors');

if (container) {
    ReactDOM.render(<Contributors />, container);
}
