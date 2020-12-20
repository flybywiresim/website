import ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react';

function Downloads() {
    const [downloads, setDownloads] = useState();

    async function getDownloads() {
        try {
            const request = await fetch('https://api.github.com/repos/flybywiresim/a32nx/releases');
            console.log("requested");
            const reqJson = await request.json();

            const downloads = [];

            reqJson.map(item => {
                item.assets.map(download => {
                    downloads.push(download.download_count);
                });
            });

            let totalDownloads = 0;
            downloads.map(num => {
                totalDownloads += num;
            });

            console.log(totalDownloads);

            if (totalDownloads >= 1000) {
                totalDownloads = Math.floor(totalDownloads / 1000);
            }

            if (totalDownloads) {
                setDownloads(totalDownloads);
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
            <h1>{downloads ? downloads : 'N/A'}</h1>
        </div>
    );
}

const container = document.getElementById('downloads');

if (container) {
    ReactDOM.render(<Downloads />, container);
}
