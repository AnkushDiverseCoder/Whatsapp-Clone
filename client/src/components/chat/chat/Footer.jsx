import { Box, styled, InputBase } from "@mui/material"
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { useEffect } from "react";
import { uploadFile } from "../../../service/api";

const Wrapper = styled(Box)`
     height: 3.8em;
     display:flex;
     background:#eff2f5;
     width:100%;
     align-items:center;
     padding: 0 1em;
     &>*{
      margin:0.3em;
      color: #919191;
      font-size:1.9em;
      cursor:pointer;
     }
`;

const ClipIcon = styled(AttachFileIcon)`
     transform : rotate(40deg)
`;
const Search = styled(Box)`
     background-color: #FFFFFF;
     border-radius: 0.5em;
     width:calc(98% - 6.2em);;
`;
const InputFeild = styled(InputBase)`
      width:100%;
      padding: 0.3em;
      padding-left:1.7em;
      font-size: 0.6em;
`;

const Footer = ({ sendText, setChat, chat , file , setFile, setImage }) => {

  useEffect(() => {
    const getImage = async ()=>{
      if (file){
        const data =new FormData();
        data.append('name', file.name);
        data.append('file',file);

        let response = await uploadFile(data);
        setImage(response.data);
      }
    }
    getImage();
  },[file,setImage])
 
  const onFileChange = (e)=>{
         setFile(e.target.files[0]);
         console.log(file)
         setChat(e.target.files[0].name);
  }

  return (
    <Wrapper>
      <TagFacesIcon />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{
          display: 'none',
        }}
        onChange={(e)=>onFileChange(e)}
      />
      <Search>
        <InputFeild placeholder="Type A Message" onChange={(e) => setChat(e.target.value)} onKeyPress={(e) => sendText(e)} value={chat} />
      </Search>
      <MicIcon />
    </Wrapper>
  )
}

export default Footer