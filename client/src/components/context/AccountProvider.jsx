import { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);



const AccountProvider = ({ children }) => {
    const [Account, setAccount] = useState(null);
    const [Person, setPerson] = useState({});
    const [Conversation, setConversation] = useState({})
    const [ActiveUsers, setActiveUsers] = useState([]);
    const [NewMessageFlag, setNewMessageFlag] = useState(false)
    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000')
    }, [])


    return (
        <AccountContext.Provider value={{
            Account,
            setAccount,
            Person,
            setPerson,
            Conversation,
            setConversation,
            socket,
            ActiveUsers,
            setActiveUsers,
            NewMessageFlag,
            setNewMessageFlag
        }} >
            {children}
        </AccountContext.Provider >
    )
}


export default AccountProvider;