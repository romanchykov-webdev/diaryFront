import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import {WrapperAdd, WrapperAddCard, WrapperAddCardButton, WrapperBackground} from "./style";

import TextFieldsIcon from '@mui/icons-material/TextFields';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const AddCardMobiComponent = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    function handlerOpen() {
        setMenuOpen(!menuOpen)
        console.log('menuOpen', menuOpen)
    }

    return (
        <>
            <WrapperAddCardButton>

                <WrapperAddCard>

                    <TextFieldsIcon
                        onClick={() => console.log('TextFieldsIcon')}
                        sx={{
                            transform: menuOpen ? 'translateY(-90px) scale(1.5) rotate(360deg)' : 'translateY(00px) scale(0) rotate(0)',
                            opacity: menuOpen ? '1' : '0',
                            backdropFilter: 'blur(25px)',
                        }}/>
                    <FormatListBulletedIcon
                        onClick={() => console.log('FormatListBulletedIcon')}
                        sx={{
                            transform: menuOpen ? 'translateX(-90px) scale(1.5) rotate(360deg)' : 'translateY(00px) scale(0) rotate(0)',
                            opacity: menuOpen ? '1' : '0',
                            backdropFilter: 'blur(25px)',
                        }}/>
                </WrapperAddCard>
                {/*<WrapperAdd sx={{zIndex: '10',}}>*/}
                    <AddIcon onClick={handlerOpen}
                             sx={{
                                 transform: menuOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                                 backdropFilter: 'blur(25px)',
                                 width:'100%',
                                 height:'100%',
                                 border: `1px solid var(--border-color)`,
                                 boxShadow:'var(--box-shadow)',
                                 padding:'5px',
                                 borderRadius:'50%'
                             }}/>
                {/*</WrapperAdd>*/}
                {/*<WrapperBackground/>*/}
            </WrapperAddCardButton>

        </>
    );
};

export default AddCardMobiComponent;