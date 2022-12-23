async function handleLogoutClick() {
    return (e) => {
        e.preventDefault(); // prevent default action of the click event
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('refreshToken');
        alert('Loged out');
        loginCtx.Logout();
    };

}


export default handleLogoutClick;