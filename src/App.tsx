import React, { useRef } from 'react';
import './App.css';
import { NavBar } from './components/app/NavBar';
import { Header } from './components/app/Header';
import { Features } from './components/app/Features';
import { Download } from './components/app/Download';
import { Community } from './components/app/Community';
import { PartnerSection } from './components/app/PartnerSection';
import { Footer } from './components/app/Footer';

function App(): JSX.Element {
    const downloadRef = useRef<HTMLDivElement>(null);
    const handleScrollTD = () => {
        if (downloadRef.current) {
            downloadRef.current.scrollIntoView();
        }
    };

    return (
        <>
            <NavBar />
            <Header scrollToDownload={handleScrollTD} />
            <Features ref={downloadRef} />
            <Download />
            <Community />
            <PartnerSection />
            <Footer/>
        </>
    );
}

export default App;
