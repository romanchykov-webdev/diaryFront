import React, {useEffect, useLayoutEffect, useState} from 'react';
import {WrapperFullscreen, WrapperCard, BodyWrapper} from "./style";
import {useDispatch, useSelector} from "react-redux";
import HeaderComponent from "../card/headerComponent/HeaderComponent";
import BodyComponent from "../card/bodyComponemt/BodyComponent";
import FooterComponent from "../card/footerComponent/FooterComponent";
import Button from "@mui/material/Button";
import {fullscreenToggleAction} from "../card/cardsSlice";
import ToDoList from "../addCard/bodyComponent/todoComponent/ToDoList";
import TextAreaComponent from "../addCard/bodyComponent/tetxareaComponent/TextAreaComponent";
import LabelsComponent from "../addCard/bodyComponent/labelsComponent/LabelsComponent";
import {Box} from "@mui/material";
import Header from "./cardComponents/Header";
import Body from "./cardComponents/Body/Body";
import Footer from "./cardComponents/Footer/Footer";

const FullscreenCardComponent = () => {

    const dispatch = useDispatch();

    const cardId = useSelector((state) => state.fullscreenToggle.card);
    const allCards = useSelector((state) => state.cards.cards);

    const [cardData, setCardData] = useState({});


    useLayoutEffect(() => {
        const card = allCards.find((item) => item.id === cardId);
        if (card) {
            setCardData(card);
        }
    }, [cardId, allCards])

    // console.log('allCards',allCards)
    // console.log('cardId',cardId)
    console.log('cardData', cardData)


    const handlerCloseFullscreen = () => {
        dispatch(fullscreenToggleAction())
    }


    return (
        <WrapperFullscreen>
            {Object.keys(cardData).length > 0 ? (
                <WrapperCard
                    sx={{
                        backgroundColor: cardData.colors === '' ? `var(--background-color)` : cardData.colors,
                        backgroundImage: cardData.backgroundColorCard ? `url(${cardData.backgroundColorCard})` : 'none',
                        backgroundPositionX: 'right',
                        backgroundPositionY: 'bottom',
                        backgroundSize: 'cover',
                    }}
                >
                    <Header i={cardData} title={cardData.title} isFavorite={cardData.isFavorite}/>
                    <Body todo={cardData.todo} todoCompleted={cardData.todoCompleted} textarea={cardData.textarea}/>
                    <Footer labels={cardData.labels}/>

                    <Button onClick={handlerCloseFullscreen}>close</Button>
                </WrapperCard>
            ) : (
                <div>Loading...</div>
            )}
        </WrapperFullscreen>
    )
        ;
};

export default FullscreenCardComponent;