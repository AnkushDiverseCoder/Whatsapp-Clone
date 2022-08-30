import { Box , Typography,styled } from '@mui/material'
import { useState } from 'react';
import { useContext,useEffect } from 'react';
import { setConversation ,getConversation } from '../../../service/api';
import { AccountContext } from '../../context/AccountProvider';
import { formatDate } from '../../../utils/common-utils';

const Component = styled(Box)`
    display: flex;
    height: 4em;
    padding: 1em 0;
    cursor: pointer;
    
`;
const Image = styled('img')({
    width: '4em',
    height: '4em',
    borderRadius: '50%',
    padding: '0 1em',
    
})

const Container = styled(Box)`
     display: flex;
     
`;

const Timestamp = styled(Typography)`
      font-size: 0.9em;
      margin-left:auto;
      color: #00000099;
      margin-right: 2em;
`;
const Text = styled(Typography)`
      font-size: 1em;
      color: rgba(0,0,0,0.6);
`;

const Conversations = ({user}) => {
    const {setPerson , Account ,NewMessageFlag } = useContext(AccountContext); 
    const [Message, setMessage] = useState({})
     
    useEffect(() => {
        const getConversationDetails = async() =>{
           const data =  await getConversation({senderId:Account.sub , receiverId:user.sub})
                  setMessage({ text: data?.message, timestamp:data?.updatedAt})
        }
        getConversationDetails();
    },[NewMessageFlag])
    
    const getUser = async () =>{
        setPerson(user);
        await setConversation({senderId : Account.sub , receiverId : user.sub })
    }
  return (
    <Component onClick={getUser}>
        <Box>
            <Image src={user.picture} alt="dp" />
        </Box>
        <Box style={{width: '100%'}}>
            <Container>
                <Typography style={{fontWeight: 'bold'}}>{user.name}</Typography>
                {
                    Message?.text&&
                    <Timestamp >{formatDate(Message?.timestamp)}</Timestamp>
                }
            </Container>
            <Box>
                <Text>{Message?.text?.includes('localhost')? 'media' : Message.text}</Text>
            </Box>
        </Box>
    </Component>
  )
}

export default Conversations