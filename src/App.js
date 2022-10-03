import React from 'react';
import './App.css';
import BrewControl from './components/BrewControl';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <BrewControl />
    </React.Fragment>
  );
}

export default App;
