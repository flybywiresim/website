import React from 'react';
import './App.css';
import {NavBar} from "./components/app/NavBar";
import {AppHeader} from "./components/app/AppHeader";

function App() {
  return (
      <div className="App">
          <NavBar />
          <AppHeader />
      </div>
  );
}

export default App;
