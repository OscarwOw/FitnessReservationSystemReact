import React, { useState } from 'react';



const AddReservationPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(new Date().toISOString().substring(0, 10));



    const handleSubmit = (event) => {
        event.preventDefault();
        setDate(new Date().toISOString().substring(0, 10));
        const url = window.location.href;
        const urlParts = url.split("?");
        const queryString = urlParts[1];
        console.log(queryString)
        let getLecturesString = 'http://192.168.100.10:5076/api/Course?lectureId=' + queryString
        fetch(getLecturesString, {
            method: 'POST',
            body: JSON.stringify({ name, email, date }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddReservationPage;