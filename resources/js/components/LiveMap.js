import Map from '@flybywiresim/map';
import ReactDOM from 'react-dom';
import React from 'react';

function LiveMap() {
    return (
        <Map currentFlight="" disableSearch={true} disableInfo={true} disableFlights={false}
             forceTileset={"carto-light"} disableScroll={true}/>
    );
}

const container = document.getElementById('live-map');

if (container) {
    ReactDOM.render(<LiveMap/>, container);
}
