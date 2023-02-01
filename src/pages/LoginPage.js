import React, { useState } from 'react';
import { useContext } from 'react';
import loginContext from '../store/LoginContext';
import { Navigate } from 'react-router-dom';
import classes from './LoginPage.module.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginCtx = useContext(loginContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isValidPassword, setValidPassword] = useState("noinput");
    const [isValidUsername, setValidUsername] = useState("noinput");

    function handleUsernameChange(event) {
        setUsername(event.target.value);
            setValidUsername("inputsuccess");
            if(username===""){
                setValidUsername("noinput");
            }

    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
        setValidPassword("inputsuccess");
        if(password===""){
            setValidPassword("noinput");
        }
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
            loginCtx.login(username);


        } else {
            console.log('not well done')
            setValidPassword("inputfail");
            setValidUsername("inputfail");
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

            <form onSubmit={handleSubmit} className={classes.content}>
                <label className={classes.label}>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} className={`${classes.input} ${classes[isValidUsername]} `} placeholder="Username"/>
                </label>
                <br />
                <label className={classes.label}>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange}  className={` ${classes.input} ${classes[isValidPassword]}`} placeholder="Password"/>
                </label>
                <br />
                <button type="submit" className={classes.submit}>Log In</button>
            </form>

    );
    }
}

export default LoginPage;
