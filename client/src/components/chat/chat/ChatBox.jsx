import { Box } from "@mui/material"
import ChatHeader from "./ChatHeader"
import { useContext , useEffect } from "react"
import { AccountContext } from "../../context/AccountProvider"
import Messages from "./Messages"
import { getConversation } from "../../../service/api"


const ChatBox = () => {
  
  const {Person, Account , setConversation} = useContext(AccountContext);
  

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({senderId: Account.sub, receiverId: Person.sub})
      setConversation(data);
    }
    getConversationDetails();
  }, [Person.sub,Account.sub,setConversation])
  
  return (
    <Box>
      <ChatHeader person={Person} />
      <Messages person={Person}/>
      {/* conversation={Conversation} */}
    </Box>
  )
}

export default ChatBox