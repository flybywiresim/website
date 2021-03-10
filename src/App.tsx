import React from 'react';
import './App.css';
import { NavBar } from './components/utils/NavBar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import { Home } from './pages/home/Home';
// Projects/A32NX Page
import { A32NX } from './pages/projects/A32NX/A32NX';
// Fullscreen Map Page
import { FullscreenMap } from './components/map/FullscreenMap';

// Misc
import ScrollToTop from './ScrollToTop';
import { ToS, Privacy } from './pages/legal/Legal';
import { Footer } from './components/utils/Footer';
import { Error404 } from './components/utils/Error404';

function App(): JSX.Element {

    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <Switch>
                <Route exact path="/" component={ Home }/>

                {/* Pages */}
                <Route exact path="/a32nx" component={ A32NX }/>
                <Route path="/map" component={ FullscreenMap }/>

                {/* Legal */}
                <Route path="/tos" component={ ToS } />
                <Route path="/privacy" component={ Privacy }/>

                {/* Misc/Error Pages */}
                <Route component={ Error404 } />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
