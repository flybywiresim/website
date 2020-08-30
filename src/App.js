import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import InstallInstructions from './installation/InstallInstructions';
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
        <Route exact path="/download/instructions">
          <InstallInstructions />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
