import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Backend URL

const FlightStatusComponent = () => {
    const [flightStatus, setFlightStatus] = useState({});
    const [flightId, setFlightId] = useState('AA123'); // Example flight ID

    useEffect(() => {
        // Connect to socket server
        socket.on('flight-status-update', (data) => {
            setFlightStatus(data);
        });

        // Fetch initial flight status
        fetch(`http://localhost:5000/flight-status/${flightId}`)
            .then(response => response.json())
            .then(data => setFlightStatus(data))
            .catch(err => console.error('Error fetching flight status:', err));

        // Cleanup on component unmount
        return () => socket.off('flight-status-update');
    }, [flightId]);

    return (
        <div>
            <h2>Flight Status</h2>
            <div>
                <label>
                    Flight ID:
                    <input
                        type="text"
                        value={flightId}
                        onChange={(e) => setFlightId(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <strong>Status:</strong> {flightStatus.status || 'Loading...'}
            </div>
            <div>
                <strong>Gate:</strong> {flightStatus.gate || 'Loading...'}
            </div>
        </div>
    );
};

export default FlightStatusComponent;
