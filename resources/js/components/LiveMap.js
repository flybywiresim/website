import Map from '@flybywiresim/map';
import ReactDOM from 'react-dom';
import React from 'react';

function LiveMap() {
    return (
        <Map currentFlight="" disableSearch={true} disableInfo={true} disableFlights={false}
             forceTileset={"carto-light"} disableScroll={true}/>
    );
}

ReactDOM.render(<LiveMap/>, document.getElementById('live-map'));
