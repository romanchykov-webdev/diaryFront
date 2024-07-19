import React, {useState} from 'react';
import {WrapperHeader, WrapperIcons, WrapperTitle} from "./style";
import {TextField} from "@mui/material";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PaletteIcon from '@mui/icons-material/Palette';
import {useDispatch, useSelector} from "react-redux";
import {colorsAction, isFavoriteAction, titleTextAction} from "../bodyComponent/todoComponent/todocomponentSlice";

const HeaderComponent = () => {

    const isFavorite = useSelector((state)=>state.createNewTodo.isFavorite)
    const user = useSelector((state)=>state.auth.user)

    const dispatch = useDispatch();

    const[inputValue, setInputValue] = useState("");


    function switcherIsFavorite() {
        dispatch(isFavoriteAction())
    }

    function changeTitle(e) {
        const text=e.target.value
        setInputValue(text)
        dispatch(titleTextAction(text))
    }
    function addColorsToUser(){
        dispatch(colorsAction(user.colors))
    }

    return (
        <WrapperHeader>
            <WrapperTitle>
                <TextField
                    value={inputValue}
                    onChange={(e) => changeTitle(e)}
                    label="Name"
                    variant="standard"
                    title='напишите имя заметки'
                />
            </WrapperTitle>
            <WrapperIcons>
                <BeenhereIcon />
                {
                    isFavorite
                        ? <StarRateIcon sx={{fill:'gold'}} onClick={switcherIsFavorite}/>
                        : <StarOutlineIcon onClick={switcherIsFavorite}/>
                }


                <PaletteIcon onClick={addColorsToUser}/>
            </WrapperIcons>
        </WrapperHeader>
    );
};

export default HeaderComponent;