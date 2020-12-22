import ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react';
import CountTo from "react-count-to/dist/react-count-to";

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

    const fn = value => <h1>{value}</h1>;
    return (
        <CountTo to={Number(contributors)} speed={2000}>{fn}</CountTo>
    );
}

const container = document.getElementById('contributors');

if (container) {
    ReactDOM.render(<Contributors />, container);
}
