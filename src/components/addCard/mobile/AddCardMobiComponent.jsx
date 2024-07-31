import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import {WrapperAdd, WrapperAddCard, WrapperAddCardButton} from "./style";

import TextFieldsIcon from '@mui/icons-material/TextFields';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const AddCardMobiComponent = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    function handlerOpen() {
        setMenuOpen(!menuOpen)
        console.log('menuOpen', menuOpen)
    }

    return (
        <WrapperAddCardButton >

            <WrapperAddCard>

                <TextFieldsIcon sx={{transform: menuOpen ? 'translateY(-90px) scale(1.5) rotate(360deg)' : 'translateY(00px) scale(0) rotate(0)', opacity: menuOpen ? '1' : '0'}}/>
                <FormatListBulletedIcon
                    sx={{transform: menuOpen ? 'translateX(-90px) scale(1.5) rotate(360deg)' : 'translateY(00px) scale(0) rotate(0)', opacity: menuOpen ? '1' : '0'}}/>
            </WrapperAddCard>
            <WrapperAdd sx={{zIndex: '10'}}>
                <AddIcon onClick={handlerOpen} sx={{transform: menuOpen ? 'rotate(45deg)' : 'rotate(0deg)'}}/>
            </WrapperAdd>

        </WrapperAddCardButton>
    );
};

export default AddCardMobiComponent;