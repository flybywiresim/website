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
import { Footer } from './components/utils/Footer';

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
                <Route path="/projects">
                    <div className="mt-20">
                        <p>
                            Test
                        </p>
                    </div>
                </Route>
                <Route path="/">
                    <Header scrollToDownload={handleScrollTD} />
                    <Features ref={downloadRef} />
                    <Download />
                    <Community />
                    <PartnerSection />
                    <Footer/>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
