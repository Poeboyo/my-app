import React from 'react';
import './App.css';
import Backplate from './components/Backplate';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Backplate>
      <About />
      <Projects />
      </Backplate>
      
    </div>
  );
}

export default App;
