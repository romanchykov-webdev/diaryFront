import React, {useCallback, useEffect, useState} from 'react';
import {WrapperHeader, WrapperIcons, WrapperTitle} from "./style";
import { TextField} from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import LabelPopupSmallComponent from "./labelPopupComponent/LabelPopupSmallComponent";
import {useDispatch} from "react-redux";
import { getCardById, updateCard} from "../../../store/thunks/cardActions/cardActions";
import {WrapperIsFavorite} from "../style";
import {useTranslation} from "react-i18next";
// import IsLoadComponent from "../../skeleton/IsLoadComponent";
// import {colorsAction, isFavoriteAction, titleTextAction} from "../bodyComponent/todoComponent/todocomponentSlice";
// import LabelPopupSmallComponent from "./labelPopupComponent/LabelPopupSmallComponent";
// import {motion, AnimatePresence} from "framer-motion";

const HeaderComponent = ({i,userId,itemId,title, isFavorite}) => {

    // translate
    const {t} = useTranslation();
    // translate

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');
    
    useEffect(() => {
        setInputValue(title)
    },[title])

    function switcherIsFavorite() {
        // console.log('i.id',i.id)
        // Создаем обновленный объект карточки с переключенным значением isFavorite
        const updateItem = { ...i, isFavorite: !i.isFavorite };
        // Обновляем карточку на сервере
        dispatch(updateCard({ cardId: i.id, cardData: updateItem }))
            .then(() => {
                // После успешного обновления карточки на сервере, получаем обновленную карточку
                return dispatch(getCardById(i.id));
            })
            .then((response) => {
                // Если запрос на получение обновленной карточки прошел успешно, данные можно будет использовать дальше
                console.log('Updated card:', response.payload);
            })
            .catch((error) => {
                // Обработка ошибок
                console.error('Failed to update card:', error);
            });

        // Для отладки
        // console.log('i', i);
        // console.log('updateItem', updateItem);
    }


    // Внутренний таймер для debounce
    const [debounceTimeout, setDebounceTimeout] = useState(null);

    const changeTitle = useCallback((e) => {
        const text = e.target.value;
        setInputValue(text);

        // Если таймер уже существует, сбрасываем его
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        // Устанавливаем новый таймер на 1 секунду
        const timeout = setTimeout(() => {
            const updateItem = { ...i, title: text };
            dispatch(updateCard({ cardId: i.id, cardData: updateItem }))
                .then(() => dispatch(getCardById(i.id)))
                .then((response) => {
                    // console.log('Updated card:', response.payload);
                })
                .catch((error) => {
                    console.error('Failed to update card:', error);
                });

            // console.log('i', i);
            // console.log('updateItem', updateItem);
        }, 1000);

        // Обновляем таймер
        setDebounceTimeout(timeout);
    }, [debounceTimeout, i, dispatch]);

    // function switcherIsFavorite() {
    //     dispatch(isFavoriteAction())
    // }
    //
    // function changeTitle(e) {
    //     const text = e.target.value
    //     setInputValue(text)
    //     console.log('i.id',i.id)
    //     console.log('i.title old',inputValue)
    //     console.log('i.title new',text)
    //     // Создаем обновленный объект карточки с переключенным значением isFavorite
    //     const updateItem = { ...i, title: text };
    //     // Обновляем карточку на сервере
    //     dispatch(updateCard({ cardId: i.id, cardData: updateItem }))
    //         .then(() => {
    //             // После успешного обновления карточки на сервере, получаем обновленную карточку
    //             return dispatch(getCardById(i.id));
    //         })
    //         .then((response) => {
    //             // Если запрос на получение обновленной карточки прошел успешно
    //             console.log('Updated card:', response.payload);
    //         })
    //         .catch((error) => {
    //             // Обработка ошибок
    //             console.error('Failed to update card:', error);
    //         });
    //
    //     // Для отладки
    //     console.log('i', i);
    //     console.log('updateItem', updateItem);
    // }


    // function changeTitle(e) {
    //     const text = e.target.value
    //     setInputValue(text)
    //     // dispatch(titleTextAction(text))
    //     const updateItem={...i, title:text}
    //     // dispatch(isFavoriteAction())
    //     dispatch(updateCard({ cardId: i.id, cardData: updateItem }))
    //         .then(() => {
    //             dispatch(getAllCards());
    //         });
    //     console.log('i',i)
    //     console.log('updateItem',updateItem)
    // }



    //
    // function addColorsToUser() {
    //     dispatch(colorsAction(user.colors))
    // }


    // const [openPopUpLabel, setOpenPopUpLabel] = React.useState(false);
    // function handlerTrePoints() {
    //     console.log('userId',userId)
    //     console.log('itemId',itemId)
    //     console.log('i',i)
    //     setOpenPopUpLabel(true)
    //     console.log('openPopUpLabel',openPopUpLabel)
    // }


    return (
        <WrapperHeader>
            <WrapperTitle>

                <TextField
                    value={inputValue}
                    autoComplete='off'
                    onChange={(e) => changeTitle(e)}
                    // label="Name"
                    variant="standard"
                    placeholder={t('Note name')}
                    title={t('Note name')}
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

export default HeaderComponent;