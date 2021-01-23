import React from 'react';
import './App.css';
import {NavBar} from "./components/app/NavBar";
import {Header} from "./components/app/Header";
import {Features} from "./components/app/Features";

function App() {
  return (
      <div className="App">
          <NavBar />
          <Header />
          <Features />
      </div>
  );
}

export default App;
