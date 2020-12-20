import React from 'react';
import ReactDOM from 'react-dom';

function Changelog() {
    return <>
        <ChangelogVersion versionName="0.5.0" versionDate="18.12.20" />
        <ChangelogVersion versionName="0.4.2" versionDate="18.12.20" />
        <ChangelogVersion versionName="0.4.1" versionDate="18.12.20" />
    </>;
}

function ChangelogVersion({ versionName, versionDate }) {
    return (
        <div className="border-bottom mb-4">
            <h3 className="display-5 mb-1">{versionName}<small className="text-muted float-right mt-1">{versionDate}</small></h3>
        </div>
    );
}

const container = document.getElementById('changelog-mount');

if (container) {
    ReactDOM.render(<Changelog />, container);
}
