import React, { useState, useEffect } from "react";
import axios from "axios";

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [month, setMonth] = useState(new Date().getMonth() + 1); // Set initial month to current month

    useEffect(() => {
        fetchEvents();
    }, [month]);

    const fetchEvents = async () => {
        try {
            const token = "Bearer Token: The JWT from the Auth request"; 
            // Replace with your actual Bearer token
            const response = await axios.get(
                `https://api.arenaracingcompany.co.uk/event/month/1318/${month}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setEvents(response.data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    return (
        <div>
            <h2>Events for Month {month}</h2>
            <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
            >
                <option value="1">July</option>
                <option value="2">August</option>
                {/* Add options for other months */}
            </select>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>{event.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
