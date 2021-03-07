import React, { useRef } from 'react';
import './App.css';
import { NavBar } from './components/utils/NavBar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Header } from './components/home/Header';
import { Features } from './components/projects/Features';
import { Download } from './components/home/Download';
import { Community } from './components/home/Community';
import { Discord } from './components/home/Discord';
import { PartnerSection } from './components/home/PartnerSection';
import { Donate } from './components/home/Donate';
import { Footer } from './components/utils/Footer';

import { Error404 } from './components/utils/Error404';

import { TermsOfService } from './components/legal/TermsOfService';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';

import { FullscreenMap } from './components/map/FullscreenMap';

import { A32NX } from './components/projects/A32NX';
import { ExtendedFeatures } from './components/projects/ExtendedFeatures';

function App(): JSX.Element {
    const downloadRef = useRef<HTMLDivElement>(null);
    const handleScrollTD = () => {
        if (downloadRef.current) {
            downloadRef.current.scrollIntoView();
        }
    };

    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/projects">
                    <A32NX />
                    <Features ref={downloadRef} />
                    <ExtendedFeatures />
                    <Download />
                    <Footer />
                </Route>
                <Route exact path="/">
                    <Header scrollToDownload={handleScrollTD} />
                    <Download />
                    <Discord />
                    <Community />
                    <PartnerSection />
                    <Donate />
                    <Footer />
                </Route>
                <Route exact path="/tos">
                    <TermsOfService />
                    <Footer />
                </Route>
                <Route exact path="/privacy">
                    <PrivacyPolicy />
                    <Footer />
                </Route>
                <Route exact path="/map">
                    <FullscreenMap />
                </Route>
                <Route component={Error404} />
            </Switch>
        </Router>
    );
}

export default App;
