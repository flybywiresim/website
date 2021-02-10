import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavBar } from './components/app/NavBar';
import { Header } from './components/app/Header';
import { Features } from './components/app/Features';
import { Download } from './components/app/Download';
import { Community } from './components/app/Community';
import { PartnerSection } from './components/app/PartnerSection';
import { Footer } from './components/app/Footer';

// Default configuration for AOS.
AOS.init({
    useClassNames: true,
    debounceDelay: 50, // the delay on debounce used while resizing window.
    throttleDelay: 99, // the delay on throttle used while scrolling the page.
    duration: 1000, // Default duration (2s) if none specified.
    ease: 'ease-in-out', // Default ease if none specified.
    mirror: true // Determines if the animation should animate out once scrolled past.
});

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
