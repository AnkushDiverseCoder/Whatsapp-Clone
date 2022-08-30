import { Box, InputBase, styled } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

const Component = styled(Box)`
      background: #fff;
      height: 3em;
      border-bottom: 3px solid #F2F2F2;
      display:flex;
      align-items: center;
      
`;

const Wrapper = styled(Box)`
   background-color: #f0f2f5;
   position: relative;
   margin: 0 1em;
   display: flex;
   width: 100%;
   border-radius: 1em;
`;
const Icon = styled(Box)`
     position: absolute;
     height:100%;
     color: #919191;
     display: flex;
     align-items: center;
     padding-left: 1em;
`;
const InputField = styled(InputBase)`
      width: 100%;
      padding: 1.3em;
      padding-left: 3em;
      font-size:14px;
      text-color: #919191;
      font-weight: 600;
      height:15px;
`;

const Search = ({setText}) => {
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize='small' />
                </Icon>
                <InputField
                    placeholder='Search or Start New Chat '
                    onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    )
}

export default Search