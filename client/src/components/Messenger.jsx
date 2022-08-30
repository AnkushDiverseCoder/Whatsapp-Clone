import { AppBar, Toolbar, styled, Box } from '@mui/material'
import LoginDialog from './account/LoginDialog'
import ChatDialog from './chat/ChatDialog';
import { useContext } from 'react';
import { AccountContext } from './context/AccountProvider';

const Component = styled(Box)`
background-color:rgb(222,223,221);
height:100vh 
`;
const LoginHeader = styled(AppBar)`
height:18rem;
background-color:rgb(5,168,132);
box-shadow:none;
`;
const Header = styled(AppBar)`
height:10rem;
background-color: #00A884;
box-shadow:none;
`;
const Messenger = () => {

    const { Account } = useContext(AccountContext);
    return (
        <Component>{

            Account ?
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar>

                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
        }
        </Component>
    )
}

export default Messenger;

