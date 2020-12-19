import React from 'react';
import ReactDOM from 'react-dom';

function Changelog() {
    return (
        <div><h1>fuck</h1></div>
    );
}

const container = document.getElementById('changelog-mount');

if (container) {
    ReactDOM.render(<Changelog/>, container);
}
