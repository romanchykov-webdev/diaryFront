import React, {useState} from 'react';
import {WrapperHeader, WrapperIcons, WrapperTitle} from "./style";
import {TextField} from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LabelPopupSmallComponent from "./labelPopupComponent/LabelPopupSmallComponent";
import {useDispatch} from "react-redux";
import {getAllCards, updateCard} from "../../../store/thunks/cardActions/cardActions";
// import {colorsAction, isFavoriteAction, titleTextAction} from "../bodyComponent/todoComponent/todocomponentSlice";
// import LabelPopupSmallComponent from "./labelPopupComponent/LabelPopupSmallComponent";
// import {motion, AnimatePresence} from "framer-motion";

const HeaderComponent = ({i,userId,itemId,title, isFavorite, switcherIsFavorite}) => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState(title);


    // function switcherIsFavorite() {
    //     dispatch(isFavoriteAction())
    // }
    //
    function changeTitle(e) {
        const text = e.target.value
        setInputValue(text)
        // dispatch(titleTextAction(text))
        const updateItem={...i, title:text}
        // dispatch(isFavoriteAction())
        dispatch(updateCard({ cardId: i.id, cardData: updateItem }))
            .then(() => {
                dispatch(getAllCards());
            });
        console.log('i',i)
        console.log('updateItem',updateItem)
    }

    //
    // function addColorsToUser() {
    //     dispatch(colorsAction(user.colors))
    // }
    const [openPopUpLabel, setOpenPopUpLabel] = React.useState(false);
    function handlerTrePoints() {
        console.log('userId',userId)
        console.log('itemId',itemId)
        console.log('i',i)
        setOpenPopUpLabel(true)
        console.log('openPopUpLabel',openPopUpLabel)
    }


    return (
        <WrapperHeader>
            <WrapperTitle>
                <TextField
                    value={inputValue}
                    autoComplete='off'
                    onChange={(e) => changeTitle(e)}
                    // label="Name"
                    variant="standard"
                    placeholder='напишите имя заметки'
                    title='напишите имя заметки'
                />
            </WrapperTitle>
            <WrapperIcons>

                {
                    isFavorite
                        ? <StarRateIcon sx={{fill: 'gold'}}
                                        onClick={switcherIsFavorite}
                        />
                        : <StarOutlineIcon
                            onClick={switcherIsFavorite}
                        />
                }

                <MoreVertIcon onClick={handlerTrePoints} />
                {
                    openPopUpLabel && <LabelPopupSmallComponent setOpenPopUpLabel={setOpenPopUpLabel} labels={i.labels}/>
                }

            </WrapperIcons>
        </WrapperHeader>
    );
};

export default HeaderComponent;