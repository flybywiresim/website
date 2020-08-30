import React from 'react';
import { stable_release_url, pre_release_url } from '../utils/constants';

const InstallInstructions = () => (
    <div className="container pad-top">
        <div className="row justify-content-center">
            <h1 className="text-center pad-top">Installation Instructions</h1>
        </div>
        <div className="row justify-content-center pad-top">
            <div className="col-lg-8 text-center">
                <h5 className="instruction-step">Step 1. Download either the <a href={stable_release_url}>Stable</a> or <a href={pre_release_url}>Pre-Release</a> build.</h5>
            </div>
        </div>
        <div className="row justify-content-center pad-top">
            <div className="col-lg-10 text-center">
                <div className="warning">
                    <span className="danger">**WARNING**:
                        <br />
                        <br />
                        Use the pre-release build at your own risk, it can be very unstable. Some features may be incomplete or not function properly.
                        <br />
                        <br />
                        WE ARE NOT RESPONSIBLE IF YOUR SIMULATOR BREAKS.
                    </span>
                </div>
            </div>
        </div>
        <div className="row justify-content-center pad-top-large">
            <div className="col-lg-8 text-center">
                <h5 className="instruction-step">Step 2. Navigate to your game directory, then double click on the <strong>"Community"</strong> folder.</h5>
                <div className="instruction-step">
                    <h6 className="pad-top">Default install directories:</h6>
                    <div className="row">
                        <strong>Microsoft Store:</strong>&nbsp;<em>C:/Users/&lt;yourname&gt;/Appdata/Local/Packages/Microsoft.FlightSimulator_8wekyb3d8bbwe/LocalCache/Packages/</em>
                    </div>
	                <div className="row">
                        <strong>Steam:</strong>&nbsp;<em>C:/Program Files(x86)/Steam/steamapps/common/Microsoft Flight Simulator/</em>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default InstallInstructions;

/*

Step 1) Choose either the stable build (master branch) or the dev build (dev branch)

Step 2) Download the ZIP file from the “Code” drop down menu (in green).

STABLE:

DEV:

Step 3) Navigate to your game directory, then double click “Community”

Default install directories: 
	Microsoft Store:	C:/Users/”yourname”/Appdata/Local/Packages/Microsoft.FlightSimulator_8wekyb3d8bbwe/LocalCache/Packages/
	Steam: 
C:/Program Files(x86)/Steam/steamapps/common/Microsoft Flight Simulator/

Step 4) Copy and paste the “A32NX” folder from the zip file into your “Community” folder.


When in sim, load into the default A320 and enjoy the new features :)


*/