import React, { Component } from 'react';
import { stable_release_url, pre_release_url } from '../utils/constants';


const DevKitInstallInstructions = () => (
    <div className="pad-top">
        <div className="row justify-content-center pad-top">
            <h1 className="display-4">MSFS WebUI DevKit</h1>
        </div>
        <div className="row justify-content-center pad-top">
            <div className="col-lg-10 text-center">
                <div className="warning">
                    <span className="danger">**WARNING**:
                        <br />
                        Use this devkit at your own risk.
                        <br />
                        WE ARE NOT RESPONSIBLE IF YOUR SIMULATOR BREAKS.
                    </span>
                </div>
            </div>
        </div>
        <br />
        <div className="row justify-content-center pad-top">
            <div className="col-lg-8 text-center">
                <h5 className="instruction-step">Step 1. Download the latest build.</h5>
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
                                <h4 className="card-title">Microsoft Store</h4>
                                <p className="card-text">C:/Users/&lt;name&gt;/Appdata/Local/Packages/Microsoft.FlightSimulator_&lt;random&gt;/LocalCache/Packages/</p>
                            </div>
                        </div>
                    </div>
	                <div className="row justify-content-center">
                        <div className="card border-primary mb-3" style={{ "width": "80%" }}>
                            <div className="card-body">
                                <h4 className="card-title">Steam</h4>
                                <p className="card-text">C:/Program Files(x86)/Steam/steamapps/common/Microsoft Flight Simulator/</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center pad-top">
            <div className="col-lg-8 text-center">
                <h5 className="instruction-step">Step 3. Extract the "WebUi-Devkit" folder into your "Community" folder.</h5>
            </div>
        </div>
        <div className="row justify-content-center pad-top">
            <div className="col-lg-8 text-center">
                <h5 className="instruction-step"><a href="https://github.com/dga711/msfs-webui-devkit" target="_blank" >Click here</a> for usage instructions.</h5>
            </div>
        </div>
    </div>
);

export default DevKitInstallInstructions;