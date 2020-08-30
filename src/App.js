import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import InstallInstructions from './installation/InstallInstructions';
import "bootswatch/dist/lux/bootstrap.min.css"; 
import './App.css';

const routes = [
  {
    path: "/download/instructions",
    component: InstallInstructions,
  }
]

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
      </Switch>
    </Router>
  );
}

export default App;
