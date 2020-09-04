import React from 'react';
import {a32nxStableDownloadUrl} from '../utils/constants';

const A32NXInstallInstructions = () => (
    <div className="pad-top container">
        <div className="row justify-content-center">
            <img className="margin-right-5 install-logo" src="/logos/flybywire-huge.png" alt="flybywire-logo"/>
        </div>
        <div className="justify-content-center pad-top container">
            <span className="danger">
                <div className="text-center">**WARNING**:</div>
                <div className="text-center">
                    WE ARE NOT RESPONSIBLE IF YOUR SIMULATOR BREAKS.
                </div>
            </span>
        </div>
        <br />
        <div className="row justify-content-center pad-top">
            <div className="col-lg-8 text-center">
                <h5 className="instruction-step">Step 1. Download the <a href={a32nxStableDownloadUrl} className="link-text-stable">Stable</a> build.</h5>
            </div>
        </div>
        <div className="row justify-content-center pad-top-large">
            <div className="col-lg-8 text-center">
                <h5 className="instruction-step">Step 2. Navigate to your game directory, then double click on the <strong>"Community"</strong> folder.</h5>
                <div className="instruction-step">
                    <h6 className="pad-top">Default install directories:</h6>
                    <div className="row justify-content-center">
                        <div className="card border-primary mb-3" style={{ "width": "80%" }}>
                            <div className="card-body">
                                <h4 className="card-title">Microsoft Store or Game Pass</h4>
                                <p className="card-text">
                                    {'C:\\Users\\[YOUR USERNAME]\\AppData\\Local\\Packages\\Microsoft.FlightSimulator_<RANDOMLETTERS>\\LocalCache\\Packages\\Community'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="card border-primary mb-3" style={{"width": "80%"}}>
                            <div className="card-body">
                                <h4 className="card-title">Steam</h4>
                                <p className="card-text">
                                    {'C:\\Users\\[YOUR USERNAME]\\AppData\\Roaming\\Microsoft Flight Simulator\\Packages\\Community'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="card border-primary mb-3" style={{"width": "80%"}}>
                            <div className="card-body">
                                <h4 className="card-title">Boxed edition</h4>
                                <p className="card-text">
                                    {'C:\\Users\\[YOUR USERNAME]\\AppData\\Local\\MSFSPackages\\Community'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center pad-top">
            <div className="col-lg-8 text-center">
                <h5 className="instruction-step">Step 3. Copy and paste the "A32NX" folder from the zip file into your "Community" folder.</h5>
            </div>
        </div>
    </div>
);

export default A32NXInstallInstructions;