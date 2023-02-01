import React, { useState } from 'react';
import { useContext } from 'react';
import loginContext from '../store/LoginContext';
import { Navigate } from 'react-router-dom';
import classes from './LoginPage.module.css';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginCtx = useContext(loginContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isValidPassword, setValidPassword] = useState("noinput");
    const [isValidUsername, setValidUsername] = useState("noinput");

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('http://192.168.100.10:5076/api/Account/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });

        if (response.ok) {
            console.log('well done')
            alert('Register successful');
            setIsLoggedIn(true);
            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);
            localStorage.setItem('username', email);
            loginCtx.login(email);


        } else {
            console.log('not well done')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={classes.content}>
            <label className={classes.label}>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} className={`${classes.input} ${classes[isValidUsername]} `}/>
            </label>
            <br />
            <label className={classes.label}>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} className={`${classes.input} ${classes[isValidUsername]} `}/>
            </label>
            <br />
            <label className={classes.label}>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} className={`${classes.input} ${classes[isValidUsername]} `}/>
            </label>
            <br />
            <button type="submit" className={classes.submit}>Register</button>
        </form>
    );
}

export default RegisterPage;
