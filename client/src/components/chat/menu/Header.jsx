import { Box, styled } from '@mui/material';
import { useContext, useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import { AccountContext } from '../../context/AccountProvider'
import InfoDrawer from '../../drawer/InfoDrawer';
import HeaderMenu from './HeaderMenu';

const Container = styled(Box)`
   height:3rem;
   background-color: #ededed;
   padding: 0.5rem 1rem;
   display : flex;
   align-items: center;
`;

const Wrapper = styled(Box)`
    margin-left: auto; 
    &> *{
      padding-left:2rem;
      margin-top:0.2em;
    }
`;

const Image = styled('img')({
  height: '3em',
  width: '3em',
  borderRadius: '50%',
  objectFit: 'cover'
})

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const { Account } = useContext(AccountContext);
  
  const toogleDrawer=()=>{
    setOpenDrawer(true);
  }

  return (
    <>
    <Container>
      <Image src={Account.picture} alt="dp" onClick={toogleDrawer}/>
      <Wrapper>
        <ChatIcon/> 
        <HeaderMenu setOpen2={setOpenDrawer}/>
      </Wrapper>
    </Container>
    <InfoDrawer open={openDrawer} setOpen = {setOpenDrawer}/>
    </>
  )
}

export default Header