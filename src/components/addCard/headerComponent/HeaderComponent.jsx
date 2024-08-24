import React, {useEffect, useState} from 'react';
import {WrapperHeader, WrapperIcons, WrapperTitle} from "./style";
import {TextField} from "@mui/material";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PaletteIcon from '@mui/icons-material/Palette';
import {useDispatch, useSelector} from "react-redux";
import {colorsAction, isFavoriteAction, titleTextAction} from "../bodyComponent/todoComponent/todocomponentSlice";
import LabelPopupComponent from "./labelPopupComponent/LabelPopupComponent";
import {motion, AnimatePresence} from "framer-motion";
import {getCardIds} from "../../../store/thunks/cardActions/cardActions";

const HeaderComponent = () => {

    const isFavorite = useSelector((state) => state.createNewTodo.isFavorite)

    // const [isOpenLabelPopup, setIsOpenLabelPopup] = useState(false);
    // console.log(isOpenLabelPopup)

    const user = useSelector((state) => state.auth.user)

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");


    function switcherIsFavorite() {
        dispatch(isFavoriteAction())
    }

    function changeTitle(e) {
        const text = e.target.value
        setInputValue(text)
        dispatch(titleTextAction(text))
    }

    function addColorsToUser() {
        dispatch(colorsAction(user.colors))
    }

    // ---poup label
    const [openPopUpLabel, setOpenPopUpLabel] = React.useState(false);
    const handleClickOpen = () => {
        setOpenPopUpLabel(true);

            dispatch(getCardIds());

    };

    const handleClose = () => {
        setOpenPopUpLabel(false);
    };
    // ---poup label

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


                {

                    // isOpenLabelPopup && (
                        <AnimatePresence>
                            <motion.div
                                initial={{height: 0,}}
                                animate={{height: 'auto',}}
                                exit={{height: 0,}}
                                transition={{duration: 0.5}}
                            >
                                <LabelPopupComponent

                                    openPopUpLabel={openPopUpLabel}
                                    // handleClickOpen={handleClickOpen}
                                    handleClose={handleClose}
                                    // isOpenLabelPopup={isOpenLabelPopup}
                                    //                  setIsOpenLabelPopup={setIsOpenLabelPopup}
                                />
                            </motion.div>
                        </AnimatePresence>
                    // )

                }


                <BeenhereIcon
                    onClick={handleClickOpen}
                    // onClick={() => setIsOpenLabelPopup(true)}
                />
                {
                    isFavorite
                        ? <StarRateIcon sx={{fill: 'gold'}} onClick={switcherIsFavorite}/>
                        : <StarOutlineIcon onClick={switcherIsFavorite}/>
                }


                <PaletteIcon onClick={addColorsToUser}/>
            </WrapperIcons>
        </WrapperHeader>
    );
};

export default HeaderComponent;