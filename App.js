import React from 'react';
import './css/bootstrap.min.css';
import TeamUpdates from './components/TeamUpdates';
import Reminders from './components/Reminders';
import SoftballGames from './components/SoftballGames';
import Stats from './components/Stats';

function App() {
    return (
        <div className="container">
            <h1 className="text-center my-4">TT's Statpage</h1>
            <TeamUpdates />
            <Reminders />
            <SoftballGames />
            <Stats />
        </div>
    );
}

export default App;
