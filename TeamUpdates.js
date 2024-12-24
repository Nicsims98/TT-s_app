import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamUpdates = () => {
    const [updates, setUpdates] = useState([]);
    const teams = ['Cincinnati Bengals', 'Cincinnati Reds', 'Michigan Spartans'];

    useEffect(() => {
        const fetchUpdates = async () => {
            try {
                const response = await axios.get('/api/team-updates'); // Adjust the endpoint as needed
                setUpdates(response.data);
            } catch (error) {
                console.error('Error fetching team updates:', error);
            }
        };

        fetchUpdates();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Live Updates for Your Favorite Teams</h2>
            <div className="list-group">
                {updates.length > 0 ? (
                    updates.map((update, index) => (
                        <div key={index} className="list-group-item">
                            <h5>{update.team}</h5>
                            <p>{update.message}</p>
                        </div>
                    ))
                ) : (
                    <p>No updates available at the moment.</p>
                )}
            </div>
            <div className="mt-4">
                <h4>Your Favorite Teams:</h4>
                <ul>
                    {teams.map((team, index) => (
                        <li key={index}>{team}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TeamUpdates;
