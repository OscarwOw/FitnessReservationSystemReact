import { createContext, useState } from 'react';

const LoginContext = createContext({
    user: null,
    login: (username) => { },
    logout: () => { },
    LogedIn: () => { }
});

export function LoginContextProvider(props) {
    const [userState, setUserState] = useState();
    function addUser(username) {
        setUserState(username)
    }
    function GetUser() {
        return userState;
    }
    function removeUser() {
        setUserState(null)
    }
    const context = {
        user: userState,
        login: addUser,
        logout: removeUser,
        LogedIn: GetUser
    };
    return <LoginContext.Provider value={context }>
        { props.children}
    </LoginContext.Provider>
}

export default LoginContext;