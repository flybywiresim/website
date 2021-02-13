import React from 'react';
import './App.css';
import { NavBar } from './components/app/NavBar';
import { Header } from './components/app/Header';
import { Features } from './components/app/Features';
import { Download } from './components/app/Download';
import { Community } from './components/app/Community';
import { PartnerSection } from './components/app/PartnerSection';
import { Footer } from './components/app/Footer';

function App(): JSX.Element {
    return (
        <div className="App">
            <NavBar />
            <Header />
            <Features />
            <Download />
            <Community />
            <PartnerSection />
            <Footer/>
        </div>
    );
}

export default App;
