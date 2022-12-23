import React, { useState } from 'react';
import { useContext } from 'react';
import loginContext from '../store/LoginContext';
import { Navigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginCtx = useContext(loginContext);
    const { login } = useContext(loginContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

     async function handleSubmit(event) {
        event.preventDefault();
         const response = await fetch('http://192.168.100.10:5076/api/Account/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        });

        if (response.ok) {
            console.log('well done')
            alert('Login successful');
            setIsLoggedIn(true);
            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);
            localStorage.setItem('username', username);
            login('username');


        } else {
            console.log('not well done')
        }
    }

    if (isLoggedIn) {
        return (
            <>
                <Navigate to="/" />
                <div>You are now logged in!</div>
            </>
        );
    }
    else { 
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Log In</button>
        </form>
    );
    }
}

export default LoginPage;
