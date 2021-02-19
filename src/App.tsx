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
import { Download } from './components/home/Download';
import { Community } from './components/home/Community';
import { PartnerSection } from './components/home/PartnerSection';
import { Donate } from './components/home/Donate';
import { Footer } from './components/utils/Footer';
import { Error404 } from './components/utils/Error404';

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
                    <Download />
                    <Community />
                    <PartnerSection />
                    <Donate />
                    <Footer />
                </Route>
                <Route component={Error404} />
            </Switch>
        </Router>
    );
}

export default App;
