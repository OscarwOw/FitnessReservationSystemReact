import { createContext, useState } from 'react';

const ModalContext = createContext({
    modal: null,
    set: (modal) => { },
});

export function LoginContextProvider(props) {
    const [modalState, setModalState] = useState("");
    function SetModal(modal) {
        setModalState(modal);
    }
    const context = {
        modal: modalState,
        set: SetModal
    };
    return <ModalContext.Provider value={context }>
        { props.children}
    </ModalContext.Provider>
}

export default ModalContext;