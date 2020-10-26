import React from 'react';
import {a32nxStableDownloadUrl} from '../utils/constants';
import {a32nxInstaller} from '../utils/constants';

const A32NXInstallInstructions = () => (
    <div className="pad-top container">
        <div className="row justify-content-center">
            <img className="margin-right-5 install-logo" src={require("../logos/flybywire-huge.png")} alt="flybywire-logo"/>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-8 alert alert-danger text-center">
                <p>WARNING</p>
                <p>
                    WE ARE NOT RESPONSIBLE IF YOUR SIMULATOR BREAKS.
                </p>
            </div>
        </div>
        <div className="row pad-top justify-content-center">
            <div className="col-lg-8">
                <p>There are two ways of installing the A32NX:</p>
            </div>
        </div>
        <div className="row pad-top justify-content-center">
            <div className="col-lg-8 ">
                <h3 className="instruction-step">Option 1.</h3>
                <p className="instruction-step">Download the <a href={a32nxInstaller} className="link-text-stable">installer</a></p>
            </div>
        </div>
        <div className="row pad-top justify-content-center">
            <div className="col-lg-8">
                <h3 className="instruction-step">Option 2.</h3>
                <p className="instruction-step">Manual installation:</p>
            </div>
            <div className="col-lg-8">
                <h5 className="instruction-step">Step 1.</h5>
                <p>Download the <a href={a32nxStableDownloadUrl} className="link-text-stable">Stable</a> build.</p>
            </div>
            <div className="col-lg-8">
                <h5 className="instruction-step">Step 2.</h5>
                <p>Navigate to your game directory, then double click on the <code>Community</code> folder:</p>
                <div className="instruction-step pb-3">
                    <h6 className="pad-top">Default install directories:</h6>
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="card border-primary mb-3">
                                <div className="card-body">
                                    <h4 className="card-title">Microsoft Store or Game Pass</h4>
                                    <p className="card-text">
                                        {'C:\\Users\\[YOUR USERNAME]\\AppData\\Local\\Packages\\Microsoft.FlightSimulator_<RANDOMLETTERS>\\LocalCache\\Packages\\Community'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="card border-primary mb-3">
                                <div className="card-body">
                                    <h4 className="card-title">Steam</h4>
                                    <p className="card-text">
                                        {'C:\\Users\\[YOUR USERNAME]\\AppData\\Roaming\\Microsoft Flight Simulator\\Packages\\Community'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="card border-primary mb-3">
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
            <div className="col-lg-8">
                <h5 className="instruction-step">Step 3.</h5>
                <p>Copy and paste the "A32NX" folder from the zip file into your "Community" folder.</p>
                <p>The A320neo inside FS2020 will be replaced by A32NX. If you wish to revert back to the original one, you can simply delete this folder.</p>
            </div>
        </div>

        <div className="row justify-content-center pad-top">

        </div>
    </div>
);

export default A32NXInstallInstructions;