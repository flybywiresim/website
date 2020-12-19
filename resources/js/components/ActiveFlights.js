import ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react';

function ActiveFlights() {
    const [liveFlights, setLiveFlights] = useState(null);

    async function getLiveFlights() {
        try {
            const request = await fetch("https://api.flybywiresim.com/txcxn/_count");

            const flightCount = await request.text();

            if (flightCount) {
                setLiveFlights(flightCount);
            }
        } catch {}
    }

    useEffect(() => {
        const interval = setInterval(() => getLiveFlights(), 60000);
        getLiveFlights();
        return () => {
            clearInterval(interval);
        };
    })

    return (
        <div>
            <h1>{liveFlights ? liveFlights : 'N/A'}</h1>
        </div>
    );
}

ReactDOM.render(<ActiveFlights />, document.getElementById('active-flights'));
