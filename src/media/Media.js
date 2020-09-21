import React from 'react';

const Media = () => (
    <div className="container">
        <div className="card mb-3">
            <h3 className="card-header text-center">Screenshots</h3>
            <div className="card-body">
                <h5 className="card-title text-center">Exterior FlyByWire livery</h5>
            </div>
            <img className="card-image" src={require("../screenshots/flyby-2.png")} alt="Exterior livery" />
            <div className="card-body">
                <p className="card-text"></p>
            </div>
        </div>
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title text-center">Cockpit re-texture</h5>
            </div>
            <img className="card-image" src={require("../screenshots/cockpit-1.png")} alt="Cockpit re-texture" />
            <div className="card-body">
                <p className="card-text"></p>
            </div>
        </div>
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title text-center">Cockpit re-texture daytime</h5>
            </div>
            <img className="card-image" src={require("../screenshots/cockpit-2.png")} alt="Cockpit re-texture daytime" />
            <div className="card-body">
                <p className="card-text"></p>
            </div>
        </div>
    </div>
)

export default Media;
