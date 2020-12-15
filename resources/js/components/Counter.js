import React from 'react';
import ReactDOM from 'react-dom';
import CountTo from 'react-count-to';

function Counter(props) {
    return (
        <CountTo from={0} to={props.number} speed={2000}/>
    );
}

const value = Number(document.getElementById('count-to')?.getAttribute('data-number'));

if (value) {
    ReactDOM.render(<Counter number={value}/>, document.getElementById('count-to'));
}