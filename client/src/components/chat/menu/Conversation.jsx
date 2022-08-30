import { Box , styled , Divider } from "@mui/material"
import { useEffect, useState ,useContext } from "react"
import { getUser } from '../../../service/api.js'
import Conversations from "./Conversations"
import {AccountContext} from "../../context/AccountProvider.jsx"

const Component = styled(Box)`
   height:81vh;
   overflow:overlay;
`;
const DividerCss = styled(Divider)`
   margin: 0 0 0 5em;
   opacity: 0.6;
   background-color:#e9edef;
`;


const Conversation = ({Text}) => {
    const { Account,socket,setActiveUsers } = useContext(AccountContext);

    const [users, setUsers] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUser();
            const filterdata = response.filter(user => user.name.toLowerCase().includes(Text.toLowerCase()));
            setUsers(filterdata);
        }
        fetchData();
    },[Text])
    
    useEffect(() => {
          socket.current.emit('addUsers',Account);
          socket.current.on('getUsers',users=>{
            setActiveUsers(users)
          })
    },[Account])

    return (
        <Component>
             {
                users.map(user =>(
                    user.sub !== Account.sub &&
                    <>
                     <Conversations user={user}/>
                     <DividerCss/>
                    </>
                ))
             } 
        </Component>
    )
}

export default Conversation