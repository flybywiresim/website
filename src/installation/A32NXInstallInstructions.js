import React from 'react';

const A32NXInstallInstructions = () => (
    <div className="pad-top container">
        <div className="row justify-content-center">
            <img className="margin-right-5 install-logo" src="/logos/flybywire-huge.png" alt="flybywire-logo"/>
        </div>
        <div className="justify-content-center pad-top container">
            <span className="danger">
                <div className="text-center">**WARNING**:</div>
                <div className="text-center">
                    Use the pre-release build at your own risk, it can be very unstable. Some features may be incomplete or not function properly.
                </div>
                <div className="text-center">
                    WE ARE NOT RESPONSIBLE IF YOUR SIMULATOR BREAKS.
                </div>
            </span>
        </div>
        <br />
        <div className="row justify-content-center pad-top">
            <div className="col-lg-8 text-center">
                <h5 className="instruction-step">Step 1. Download either the <a href={process.env.REACT_APP_STABLE_URL} className="link-text-stable">Stable</a> or <a href={process.env.REACT_APP_PRE_RELEASE_URL} className="link-text-pre">Pre-Release</a> build.</h5>
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
                <h5 className="instruction-step">Step 3. Copy and paste ONLY the "A32NX" folder from the zip file into your "Community" folder.</h5>
                <p><span className="danger">*</span>This is very important. If you paste the entire zip file contents into the folder, the mod will not work.<span className="danger">*</span></p>
            </div>
        </div>
    </div>
);

export default A32NXInstallInstructions;