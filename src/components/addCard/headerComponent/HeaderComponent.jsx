import React from 'react';
import {WrapperHeader, WrapperIcons, WrapperTitle} from "./style";
import {TextField} from "@mui/material";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PaletteIcon from '@mui/icons-material/Palette';

const HeaderComponent = () => {
    const isFavorite = true
    return (
        <WrapperHeader>
            <WrapperTitle>
                <TextField label="Name" variant="standard" title='напишите имя заметки'/>
            </WrapperTitle>
            <WrapperIcons>
                <BeenhereIcon />
                {
                    isFavorite ? <StarRateIcon sx={{fill:'gold'}}/> : <StarOutlineIcon/>
                }


                <PaletteIcon/>
            </WrapperIcons>
        </WrapperHeader>
    );
};

export default HeaderComponent;