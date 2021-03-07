import React, { useRef } from 'react';
import './App.css';
import { NavBar } from './components/utils/NavBar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Header } from './components/home/Header';
import { Features } from './components/home/Features';
import { Installer } from './components/home/Installer';
import { Community } from './components/home/Community';
import { Discord } from './components/home/Discord';
import { PartnerSection } from './components/home/PartnerSection';
import { Donate } from './components/home/Donate';
import { Footer } from './components/utils/Footer';

import { Error404 } from './components/utils/Error404';

import { TermsOfService } from './components/legal/TermsOfService';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';

import { FullscreenMap } from './components/map/FullscreenMap';

import { Projects } from './components/projects/Projects';

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
                    <Projects />
                </Route>
                <Route exact path="/">
                    <Header scrollToDownload={handleScrollTD} />
                    <Features ref={downloadRef} />
                    <Installer />
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
