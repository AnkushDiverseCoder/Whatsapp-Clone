import { Box, Typography, styled, Divider } from "@mui/material"

const Component = styled(Box)`
   background: #f8f9fa;
   padding: 1.5em 0;
   text-align: center;
   height: 100%;
`;

const Container = styled(Box)`
    padding: 0 13em; 
`;

const Title = styled(Typography)`
    font-size: 2em;
    margin: 2em 0 0.8em 0 ;
    font-family: inherit;
    font-weight: 300;
    color: #41524d;
`;
const Subtitle = styled(Typography)`
    font-size: 1.3em;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`;

const Image = styled('img')({
  width: '50%',
  marginTop: '2em'
})

const ChatDivider = styled(Divider)`
     margin-top : 3.2em;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src="https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg" alt="" />
        <Title>WhatsApp Web</Title>
        <Subtitle>Now send and receive messages without keeping your phone online.</Subtitle>
        <Subtitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Subtitle>
        <ChatDivider />
      </Container>
    </Component>
  )
}

export default EmptyChat