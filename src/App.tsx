import React from 'react';
import './App.css';
import { NavBar } from './components/app/NavBar';
import { Header } from './components/app/Header';
import { Features } from './components/app/Features';
import { Download } from './components/app/Download';

function App(): JSX.Element {
    return (
        <div className="App">
            <NavBar />
            <Header />
            <Features />
            <Download />
        </div>
    );
}

export default App;
