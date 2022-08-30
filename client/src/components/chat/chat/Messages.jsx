import { Box, styled } from "@mui/material"
import { useContext, useState, useEffect } from "react";

import { AccountContext } from '../../context/AccountProvider'
import { newMessage, getMessage } from "../../../service/api";

import Footer from "./Footer";
import DisplayMessage from "./DisplayMessage";
// import DisplayMessage from "./DispalyMessage";

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size:50%;
`;
const Component = styled(Box)`
   height:78vh;
   overflow-y:scroll;
`

const Messages = ({ person ,setNewMessageFlag, NewMessageFlag }) => {
  const { Account, Conversation, socket } = useContext(AccountContext);
  const [Chat, setChat] = useState('');
  const [Message, setMessage] = useState([]);
  const [File, setFile] = useState();
  const [Image, setImage] = useState('')
  const [IncomingMessages, setIncomingMessages] = useState(null)

  useEffect(() => {
    socket.current.on('getMessage', data => {
      setIncomingMessages({
        ...data,
        createdAt: Date.now()
      })
    })
  }, [])


  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessage(Conversation._id);
      Conversation._id && setMessage(data);
    }
    getMessageDetails();
  }, [person._id, Conversation._id, NewMessageFlag])

  useEffect(() => {
    IncomingMessages && Conversation?.members?.includes(IncomingMessages.senderId) &&
      setMessage(prev => [...prev, IncomingMessages])
  }, [IncomingMessages, Conversation])

  const sendText = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      let message = {};
      if (!File) {
        message = {
          senderId: Account.sub,
          receiverId: person.sub,
          conversationId: Conversation._id,
          type: 'text',
          text: Chat
        }
      } else {
        message = {
          senderId: Account.sub,
          receiverId: person.sub,
          conversationId: Conversation._id,
          type: 'file',
          text: Image
        }
      }

      socket.current.emit('sendMessage', message)

      await newMessage(message);
      setChat('');
      setFile('');
      setImage('')
      setNewMessageFlag(prev => !prev)
    }
  }

  return (
    <Wrapper>
      <Component style={{ paddingBottom: '10px' }}>
        {
          Message && Message.map(message => {
            return <DisplayMessage message={message} />
          })
        }
      </Component>
      <Footer sendText={sendText} setChat={setChat} chat={Chat} file={File} setFile={setFile} setImage={setImage} />
    </Wrapper>
  )
}

export default Messages