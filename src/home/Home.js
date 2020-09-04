import React from 'react';
import {
    Link
} from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div className="row justify-content-center pad-top">
            <img src={require('../logo_wide.png')} alt="flybywire-logo" className="main-logo" />
        </div>
        <hr />
        <div className="row justify-content-center pad-top">
            <h1 className="display-4 main-logo-text">Our Latest Project</h1>
        </div>
        <div className="row justify-content-center margin-minus-top large-pad-bottom">
            <Link to="/a32nx" className="justify-content-center promo-image"><img src="screenshots/flyby-3.png" width="100%" alt="fbw-huge" /></Link>
        </div>
    </div>
);

export default Home;