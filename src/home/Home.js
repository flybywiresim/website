import React from 'react';
import {
    Link
} from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div className="row justify-content-center pad-top">
            <img src={require('../logo_wide.png')} alt="flybywire-logo" className="main-logo" />
        </div>
        <div className="row justify-content-center pad-top">
            <h1 className="display-3">Simulations</h1>
        </div>
        <hr />
        <div className="row justify-content-center pad-top">
            <h1 className="display-4">Our Latest Project</h1>
        </div>
        <div className="row justify-content-center margin-minus-top">
            <Link to="/a32nx" className="justify-content-center"><img src="logos/A32NX_logo.png" width="100%" alt="fbw-huge" /></Link>
        </div>
    </div>
);

export default Home;