import { Box , styled, Typography } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'


const ImageComponent = styled(Box)`
   display:flex;
   justify-content:center;
   
`;
const Image = styled('img')({
    width: '14em',
    height: '14em',
    borderRadius: '50%',
    padding : '2em 0',
    boxShadow : '4px'
})

const SecondComponent = styled(Box)`
  background:#FFFFFF;
  padding: 1em 2em 0.5em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  & :first-child {
    font-size:1.2em;
    color: #509e8c;
    font-weight:200;
    
  }
  & :last-child {
     color:#4a4a4a;
     margin:1em 0 ;
  }
  `;

 const ThirdComponent = styled(Box)`
      padding: 1.7em 1.7em 1.7em 1.7em;
      & >p{
        font-size: 1em;
        color: #9aa8b0;
      }
 `;

const Profile = () => { 
    const {Account} = useContext(AccountContext);
    return (
        <>
            <ImageComponent>
                <Image src={Account.picture} alt="dp" />
            </ImageComponent>
            <SecondComponent>
                <Typography>Your Name</Typography>
                <Typography>{Account.name}</Typography>
            </SecondComponent>
            <ThirdComponent>
            <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </ThirdComponent>
            <SecondComponent>
                <Typography>About</Typography>
                <Typography>Eat! Sleep! Code! Repeat!</Typography>
            </SecondComponent>
        </>
    )
}

export default Profile