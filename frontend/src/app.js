// src/App.js
import React from 'react';
import FlightStatusComponent from './components/FlightStatusComponent';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Flight Status App</h1>
                <FlightStatusComponent />
            </header>
        </div>
    );
}

export default App;
