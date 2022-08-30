import { Dialog , Box , styled } from "@mui/material";
//components
import Menu from "./menu/Menu";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";

const dialogStyle = {
    height : '95%',
    width:'95%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow:'none',
    overflow : 'hidden',
    brightness: '0%',
    borderRadius: '0'
}
const LeftComponent = styled(Box)`
    min-width: 25%;
`;
const RightComponent = styled(Box)`
    width: 75%;
    min-width: 40%;
    height:100%;
    border-left :1px solid #F5F5F5;
`;
const Container = styled(Box)`
  display: flex;
`;

const ChatDialog = () => {
    const {Person} = useContext(AccountContext);
    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
                <Container>
                       <LeftComponent>
                          <Menu/>
                       </LeftComponent>
                       <RightComponent>
                          {Object.keys(Person).length ? <ChatBox/> : <EmptyChat/>}
                       </RightComponent>
                </Container>
        </Dialog>
    );
};

export default ChatDialog;
