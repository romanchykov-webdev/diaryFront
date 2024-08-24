import React, {useEffect, useState} from 'react';

import {Grid} from "@mui/material";
import HeaderComponent from "./headerComponent/HeaderComponent";
// import {isFavoriteAction} from "../addCard/bodyComponent/todoComponent/todocomponentSlice";
import {useDispatch} from "react-redux";
import BodyComponent from "./bodyComponemt/BodyComponent";
import { getCardById, updateCard} from "../../store/thunks/cardActions/cardActions";
import FooterComponent from "./footerComponent/FooterComponent";
import {WrapperCard} from "./style";


const CardComponent = ({i}) => {
    // console.log('i', i);
    const dispatch = useDispatch();





    // function switcherIsFavorite() {
    //     const updateItem = {...i, isFavorite: !i.isFavorite}
    //     // const updateItem=i.filter(item => item.isFavorite = !i.isFavorite);
    //
    //     // dispatch(isFavoriteAction())
    //     dispatch(updateCard({cardId: i.id, cardData: updateItem}))
    //         .then(() => {
    //             dispatch(getAllCards());
    //         });
    //     console.log('i', i)
    //     console.log('updateItem', updateItem)
    // }


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

    return (
        <WrapperCard
            //     xs={12} sm={6} md={3} item
                sx={{
                    // padding:'5px',
                // width:'100%',
                // maxWidth:'100%',
                // outline: '1px solid red',
                // padding: '5px'
                    backgroundColor: i.colors==='' ? `var(--background-color)` : i.colors,
                    backgroundImage: i.backgroundColorCard ? `url(${i.backgroundColorCard})` : 'none',
                    backgroundPositionX: 'right',
                    backgroundPositionY: 'bottom',
                    backgroundSize: 'cover',
            }}
        >
            {/*<Box>*/}
            <HeaderComponent i={i} userId={i.userId} itemId={i.id} title={i.title} isFavorite={i.isFavorite}
                             switcherIsFavorite={switcherIsFavorite}/>
            <BodyComponent
                sx={{ flex: '1 1 auto' }} // Заполняет оставшееся пространство
                todo={i.todo} todoCompleted={i.todoCompleted} textarea={i.textarea}/>
            <FooterComponent i={i}/>
            {/*</Box>*/}
        </WrapperCard>
    );
};

// lg   md  sm xl xs

export default CardComponent;