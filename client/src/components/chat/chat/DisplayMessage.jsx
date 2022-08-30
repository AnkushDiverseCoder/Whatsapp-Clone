import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import GetAppIcon from '@mui/icons-material/GetApp';
import { Typography, Box, styled } from "@mui/material"
import { formatDate, downloadMedia } from "../../../utils/common-utils";

const Sender = styled(Box)`
     background : #dcf8c6;
     max-width : 60%;
     margin-left: auto;
     padding:5px;
     width: fit-content;
     display: flex;
     border-radius: 0.8em;
     word-break:break-word;
     margin-top:0.3em;
`;
const Receiver = styled(Box)`
     background : #FFFFFF;
     max-width : 60%;
     padding:5px;
     width: fit-content;
     display: flex;
     border-radius: 0.8em;
     word-break:break-word;
     margin-top:0.3em;
`;

const Text = styled(Typography)`
     font-size: 0.9em;
     padding: 0 1.56em 0 0.3em;
`;
const Time = styled(Typography)`
     font-size: 0.6em;
     padding: 0 1.56em 0 0.3em;
     margin-top:0.5em;
     word-break:keep-all;
     margin-top
`;

const DisplayMessage = ({ message }) => {
   

    const { Account } = useContext(AccountContext);
    return (
        <>
            {
                Account.sub === message.senderId ?
                    <Sender>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }

                    </Sender>
                    :
                    <Receiver>
                         {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                    </Receiver>
            }
        </>
    )
}

const ImageMessage = ({ message }) => {
    return (
        <Box style={{position: 'relative'}}>
            {
                message?.text?.includes('.pdf') ?
                    <Box style={{display: 'flex'}}>
                           <img src={'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Pdf_File_Type_Adobe_logo_logos-512.png'} alt="pdf" style={{width: '6em'}} />
                           <Typography style={{fontSize: '0.8em'}}>{message.text.split('/').pop()}</Typography>
                    </Box>
                    :
                    <img style={{ width: '18.75em', height: '100%', objectFit: 'cover' }} src={message.text} alt={message.text} />
            }
            <Time style={{position: 'absolute',bottom:0,right:0, color:'#008000', fontWeight: '600'}}>
                <GetAppIcon 
                 onClick={(e)=>downloadMedia(e, message.text)}
                style={{cursor:'pointer', border:'1px solid grey', borderRadius:'50%' ,}} />
                {formatDate(message.createdAt)}
            </Time>
        </Box>
    )
}
const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </>
    )
}

export default DisplayMessage