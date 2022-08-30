import { Dialog , Box , Typography , styled, List ,ListItem} from '@mui/material'
import {GoogleLogin} from "@react-oauth/google"
import jwt_decode from 'jwt-decode'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider';
import { addUser } from '../../service/api';

const dialogStyle = {
    height : '96%',
    marginTop : '16%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow:'none',
    overflow : 'hidden',
    brightness: '0%'
}

const Container = styled(Box)`
   display: flex ;
   justify-content : center ;
   justify-content : space-around ;
   margin:3rem;
`;
const Component = styled(Box)`
      padding: 4rem 0 2rem 2rem;
`;

const QRCode = styled('img')({
    height: "20em",
    margin: "50px"
});

const Title = styled(Typography)`
     font-size: 1.9em;
     color:#525252;
     font-weight: 300;
     font-family: inherit;
     margin-bottom: 2rem;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0rem;
    margin-top:0rem;
    font-size: 1.3rem;
    line-height: 4rem;
    color: #4a4a4a;
  }
`;

const LoginDialog = () => {
    const {setAccount} = useContext(AccountContext);
   
    const onLoginSuccess= async (res) => {
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }

    const onLoginError= (res) => {
        console.log(res);
    }
  return (
    <Dialog open={true}  PaperProps={{ sx : dialogStyle}} hideBackdrop={true} >
          <Container>
              <Component>
                  <Title>To use WhatsApp on your computer:</Title>
                  <StyledList>
                    <ListItem>1. Open WhatsApp on your phone</ListItem>
                    <ListItem>2. Tap on menu setting and select whatsapp web</ListItem>
                    <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                  </StyledList>
              </Component>
              <Box>
                 <QRCode src="qr-code-img.png"  />
                 <Box>
                    <GoogleLogin
                       onSuccess={onLoginSuccess}
                       onError={onLoginError}
                    />
                 </Box>
              </Box>
          </Container>
    </Dialog>
  )
}

export default LoginDialog