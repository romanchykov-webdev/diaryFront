import React from 'react';

import {Box, Grid} from "@mui/material";
import HeaderComponent from "./headerComponent/HeaderComponent";
// import {isFavoriteAction} from "../addCard/bodyComponent/todoComponent/todocomponentSlice";
import {useDispatch} from "react-redux";
import BodyComponent from "./bodyComponemt/BodyComponent";
import {getAllCards, updateCard} from "../../store/thunks/cardActions/cardActions";


const CardComponent = ({i}) => {
    console.log('i', i);
    const dispatch = useDispatch();


    function switcherIsFavorite() {
        const updateItem={...i, isFavorite:!i.isFavorite}
        // const updateItem=i.filter(item => item.isFavorite = !i.isFavorite);

        // dispatch(isFavoriteAction())
        dispatch(updateCard({ cardId: i.id, cardData: updateItem }))
            .then(() => {
                dispatch(getAllCards());
            });
        console.log('i',i)
        console.log('updateItem',updateItem)
    }


    return (
        <Grid xs={12} sm={6} md={3} item sx={{outline: '1px solid red', padding: '5px'}}>
            <Box>
                <HeaderComponent i={i} userId={i.userId} itemId={i.id} title={i.title} isFavorite={i.isFavorite}
                                 switcherIsFavorite={switcherIsFavorite}/>
                <BodyComponent todo={i.todo} todoCompleted={i.todoCompleted} textarea={i.textarea}/>
            </Box>
        </Grid>
    );
};

// lg   md  sm xl xs

export default CardComponent;