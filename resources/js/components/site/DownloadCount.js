import ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react';

function Downloads() {
    const [downloads, setDownloads] = useState();

    async function getDownloads() {
        try {
            const request = await fetch('https://api.github.com/repos/flybywiresim/a32nx/downloads?per_page=1');

            const downloadsCount = request.headers.get('Link').match(/&page=(\d+)>; rel="last"/)['1'];

            if (downloadsCount) {
                setDownloads(downloadsCount);
            }
        } catch {}
    }

    useEffect(() => {
        const interval = setInterval(() => getDownloads(), 600000);
        getDownloads();
        return () => {
            clearInterval(interval);
        };
    })

    return (
        <div>
            <h1>{downloads ? downloads : '250000'}</h1>
        </div>
    );
}

const container = document.getElementById('downloads');

if (container) {
    ReactDOM.render(<Downloads />, container);
}
