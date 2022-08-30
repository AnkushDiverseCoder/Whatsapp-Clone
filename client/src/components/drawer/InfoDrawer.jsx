import { Box, Drawer, styled, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./Profile";

const drawerStyle = {
  left : '1.2%',
  top : '2%',
  height:'96.2%',
  width:'24.5%',
  boxShadow: 'none',

}

const Header = styled(Box)`
   background: #008069;
   height: 6em;
   color : #FFFFFF;
   display: flex;
   & > svg, & >p {
    margin-top:auto ;
    padding : 15px;
    font-weight: 600;
   }
   & > p {
    font-size: 1.5em;
    margin-top: auto;
    padding : 0.4em;
   }
`;

 const Component = styled(Box)`
    background: #eff2f5;
    height: 92%;

 `

const InfoDrawer = ({open , setOpen}) => {
  const handleClose = () => {
     setOpen(false);
  }
  return (
    <Drawer
    open={open}
    onClose={handleClose}
    PaperProps={{ sx : drawerStyle}}
    style={{ zIndex: 1500}}
    hideBackdrop={true}
    >

      <Header>
       <ArrowBackIcon onClick={()=> setOpen(false)}/>
       <Typography> Profile </Typography>
      </Header>
      <Component>
             <Profile/>
      </Component>
    </Drawer>
  )
}

export default InfoDrawer