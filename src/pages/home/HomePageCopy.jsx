// rsc
import React, {useEffect} from 'react';
import CardComponent from "../../components/card/CardComponent";
import { WrapperHomePage} from "./style";
import AddCardMobiComponent from "../../components/addCard/mobile/AddCardMobiComponent";
import {Grid, useMediaQuery} from "@mui/material";
import AddCardFsComponent from "../../components/addCard/bigScrin/AddCardFsComponent";
import {useDispatch, useSelector} from "react-redux";
import {getAllCards, updateCard} from "../../store/thunks/cardActions/cardActions";
import { Reorder, AnimatePresence } from 'framer-motion';
// import GeoLocationDisplay from "../../components/geoLocationDisplay/GeoLocationDisplay";
// import DateTimeDisplay from "../../components/addCard/timeDataComponent/TimeDataComponent";


const HomePage = () => {

    const isMobile = useMediaQuery('(max-width:760px)')
    const dispatch = useDispatch()
    const cards =useSelector((state) => state.cards.cards);

    useEffect(() => {
        dispatch(getAllCards())
    }, [dispatch]);
    // console.log(isMobile)

    // Сортировка карточек по полю order от большего к меньшему
    const sortedCards = [...cards].sort((a, b) => b.order - a.order);


    // drag and drop
    const handleReorder = (newOrder) => {
        newOrder.forEach((item, index) => {
            item.order = index + 1;
            // dispatch(updateCard({ cardId: item.id, order: item.order }));
        });
    };

    return (
        <WrapperHomePage >
            {/*<DateTimeDisplay/>*/}
            {/*<GeoLocationDisplay />*/}
            {
                isMobile ? <AddCardMobiComponent/> : <AddCardFsComponent/>
            }
            {/*<AddCardFsComponent/>*/}

            <Grid container spacing={2} sx={{flexGrow: 1,}}>
                {
                    sortedCards.map(i=>(
                        <CardComponent i={i} key={i.id} />

                    ))
                }

            </Grid>


        </WrapperHomePage>
    )


};

export default HomePage;
