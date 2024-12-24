import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Stats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get('/api/stats'); // Adjust the API endpoint as needed
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Your Softball Stats</h1>
            {stats ? (
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Game Date</th>
                                <th>Opponent</th>
                                <th>Runs</th>
                                <th>Hits</th>
                                <th>Errors</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.map((stat, index) => (
                                <tr key={index}>
                                    <td>{stat.gameDate}</td>
                                    <td>{stat.opponent}</td>
                                    <td>{stat.runs}</td>
                                    <td>{stat.hits}</td>
                                    <td>{stat.errors}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>No stats available.</div>
            )}
        </div>
    );
};

export default Stats;
