import ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react';
import CountTo from "react-count-to";

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

    const fn = value => <h1>{value}</h1>;

    return (
        <CountTo to={Number(liveFlights)} speed={2000}>{fn}</CountTo>
    );
}

const container = document.getElementById('active-flights');

if (container) {
    ReactDOM.render(<ActiveFlights />, container);
}
