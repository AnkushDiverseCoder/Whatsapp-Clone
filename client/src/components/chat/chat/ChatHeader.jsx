import { Box, Typography, styled } from "@mui/material"
import { Search, MoreVert } from '@mui/icons-material'
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Header = styled(Box)`
     height: 4em;
     background-color: #ededed;
     padding: 0 1em;
     display: flex;
     align-items: center; 
`;
const Image = styled('img')({
  height: '3em',
  width: '3em',
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: '0.5em',
});

const Name = styled(Typography)`
  margin-left:1em !important;
  text-color: #1e272a;
  font-weight: 600;
  font-size: 1em;
`;
const Status = styled(Typography)`
  margin-left:1.1em !important;
  font-size:0.8em;
  font-weight: 400;
  color: #6a7984;
  
`;
const Icon = styled(Box)`
  margin-left: auto !important;
  
  & > * {
    margin-right: 1em;
    font-size: 1.6em;
    color: #7b8790 !important
  }
`;


const ChatHeader = ({ person }) => {
  // {/* <> Online <FiberManualRecordIcon style={{ fontSize: 'small', color: 'green' }} /></> */}
// {/* <> Offline <FiberManualRecordIcon style={{ fontSize: 'small', color: 'red' }} /> </> */}

  const { ActiveUsers } = useContext(AccountContext);

  const defaultProfilePicture = 'https://static.straitstimes.com.sg/s3fs-public/articles/2020/12/01/af_moneyheist_011220.jpg'
  return (
    <Header>
      <Image src={(!person.picture) ? defaultProfilePicture : person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status>{ActiveUsers?.find(user => user.sub === person.sub) ?
         <Box style={{ display:'flex',paddingLeft: '0.1em' }}> 
         <p>Online</p> 
         <FiberManualRecordIcon style={{ fontSize: 'small', color: 'green'  }} />
         </Box>
         :
         <Box style={{ display:'flex'}}> 
         <p>Offline</p> <FiberManualRecordIcon style={{ fontSize: 'small', color: 'red' }} />
         </Box> }
        </Status>
      </Box>
      <Icon>
        <Search />
        <MoreVert />
      </Icon>
    </Header>
  )
}

export default ChatHeader