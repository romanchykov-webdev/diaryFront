import React, {useCallback, useEffect, useState} from 'react';
import {getCardById, updateCard} from "../../../store/thunks/cardActions/cardActions";
import {WrapperHeader, WrapperIcons, WrapperTitle} from "../../card/headerComponent/style";
import {TextField} from "@mui/material";
import {WrapperIsFavorite} from "../../card/style";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {useDispatch, useSelector} from "react-redux";
import {changeTitleAction, toggleIsFavoriteAction} from "../../card/cardsSlice";

const Header = ({i}) => {

    const isFavorite=useSelector((state)=>state.fullscreenToggle.card.isFavorite);
    const title=useSelector((state)=>state.fullscreenToggle.card.title);

    const dispatch = useDispatch();
    // console.log('title',title)

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(title)
    },[title])

    function switcherIsFavorite() {
        dispatch(toggleIsFavoriteAction())
    }


    // Внутренний таймер для debounce
    const [debounceTimeout, setDebounceTimeout] = useState(null);

    const changeTitle =(e)=>{
        const text = e.target.value
        dispatch(changeTitleAction(text))
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
                <WrapperIsFavorite
                    onClick={switcherIsFavorite}
                >
                    {/*<IsLoadComponent isLoading={isLoading} style={{*/}
                    {/*    top: '-2px',*/}
                    {/*    left: '-4px',*/}
                    {/*}}/>*/}

                    {
                        isFavorite
                            ? <StarRateIcon sx={{fill: 'gold'}}
                                // onClick={switcherIsFavorite}
                            />
                            : <StarOutlineIcon
                                // onClick={switcherIsFavorite}
                            />
                    }
                </WrapperIsFavorite>

                {/*<MoreVertIcon onClick={handlerTrePoints} />*/}
                {/*{*/}
                {/*    openPopUpLabel && <LabelPopupSmallComponent setOpenPopUpLabel={setOpenPopUpLabel} labels={i.labels}/>*/}
                {/*}*/}

            </WrapperIcons>
        </WrapperHeader>
    );
};

export default Header;