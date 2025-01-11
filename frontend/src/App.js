import React, { useEffect, useState } from 'react';

function Message() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch the message from the Django backend
        fetch('https://sample1-eq07.onrender.com/api/message/')
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
            })
            .catch(error => console.error('Error fetching message:', error));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default Message;
