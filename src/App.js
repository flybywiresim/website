import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import Downloads from './downloads/Downloads';
import Changelog from './changelog';
import Media from './media/Media';
import A32NXInstallInstructions from './installation/A32NXInstallInstructions';
import "bootswatch/dist/lux/bootstrap.min.css"; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/downloads">
          <Downloads />
        </Route>
        <Route path="/a32nx">
          <A32NXInstallInstructions />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/changelog">
          <Changelog />
        </Route>
        <Route exact path="/media">
          <Media />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
