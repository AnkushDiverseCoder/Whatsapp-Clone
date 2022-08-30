import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material';
import { useState } from 'react';


const MenuOption = styled(MenuItem)`
     font-size:1em;
     padding:15px 60px 5px 24px;
     color:#4A4A4A;
`;
const MenuContainer = styled(Menu)`
     margin-top: 5px;
`;

const HeaderMenu = ({setOpen2}) => {
    const [open, setOpen] = useState(null);
    const handleClose = () => {
        setOpen(null);
    };
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    return (
        <>
            <MoreVertIcon onClick={handleClick} />
            <MenuContainer
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                // getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => { handleClose(); setOpen2(true); }} >Profile</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </MenuContainer>
        </>
    )
}

export default HeaderMenu