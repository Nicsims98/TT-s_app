import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reminders = () => {
    const [reminders, setReminders] = useState([]);

    useEffect(() => {
        const familyMembers = ['Taylor', 'Shelby', 'Destiny', 'Mom'];
        const reminderMessages = familyMembers.map(member => `Don't forget to text your nieces and your mother ${member}!`);
        setReminders(reminderMessages);

        const interval = setInterval(() => {
            alert('Weekly Reminder: Check in with your family!');
        }, 604800000); // 1 week in milliseconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Weekly Reminders</h2>
            <ul className="list-group">
                {reminders.map((reminder, index) => (
                    <li key={index} className="list-group-item">
                        {reminder}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reminders;
