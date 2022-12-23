async function handleLogoutClick() {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    if (token == null || refreshToken == null) {
        return { token: null, refreshToken: null };
    }
    const data = { token, refreshToken };

    try {
        const response = await fetch(
            'https://192.168.100.10:7223/api/Account/RefreshToken',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        localStorage.setItem('token', result.token);
        localStorage.setItem('refreshToken', result.refreshToken);
        return { token: result.token, refreshToken: result.refreshToken };
    } catch (error) {
        console.error(error);
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        return { token: null, refreshToken: null };
    }
}


export default handleLogoutClick;