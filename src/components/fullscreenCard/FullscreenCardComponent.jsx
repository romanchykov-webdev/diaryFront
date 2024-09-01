import React, { useEffect,  useState} from 'react';
import {WrapperFullscreen, WrapperCard} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {fullscreenToggleAction} from "../card/cardsSlice";
import Header from "./cardComponents/Header";
import Body from "./cardComponents/Body/Body";
import Footer from "./cardComponents/Footer/Footer";
import {getCardById, updateCard} from "../../store/thunks/cardActions/cardActions";

const FullscreenCardComponent = () => {

    const dispatch = useDispatch();

    // const cardId = useSelector((state) => state.fullscreenToggle.card);
    const card = useSelector((state) => state.fullscreenToggle.card);

    const [cardData, setCardData] = useState({});


    // const isOverflowHiddenBody = useSelector((state) => state.fullscreenToggle.fullscreen)




    useEffect(() => {
        setCardData(card);
    }, [ card])

    // console.log('allCards',allCards)
    // console.log('cardId',cardId)
    // console.log('cardData', cardData)



    const handlerCloseFullscreen = () => {
        dispatch(fullscreenToggleAction())

        // document.body.style.overflow =  'auto';
        // console.log('isOverflowHiddenBody',isOverflowHiddenBody)

    }
    // save card
    const updateCardItem = useSelector((state) => state.fullscreenToggle.card)
    const saveCard = () => {
        // console.log('updateCard', updateCard)
        dispatch(updateCard({cardId: updateCardItem.id, cardData: updateCardItem}))
            .then(() => {
                // После успешного обновления карточки на сервере, получаем обновленную карточку
                return dispatch(getCardById(updateCardItem.id));
            })
            .then((response) => {
                // Если запрос на получение обновленной карточки прошел успешно, данные можно будет использовать дальше
                console.log('Updated card:', response.payload);
            })
            .catch((error) => {
                // Обработка ошибок
                console.error('Failed to update card:', error);
            });
        handlerCloseFullscreen()

    }
    // save card

    return (
        <WrapperFullscreen
            // onClick={saveCard}
        >
            {Object.keys(cardData).length > 0 ? (
                <WrapperCard
                    onClick={(e) => e.stopPropagation()} // Останавливаем распространение события
                    sx={{
                        backgroundColor: cardData.colors === '' ? `var(--background-color)` : cardData.colors,
                        backgroundImage: cardData.backgroundColorCard ? `url(${cardData.backgroundColorCard})` : 'none',
                        backgroundPositionX: 'right',
                        backgroundPositionY: 'bottom',
                        backgroundSize: 'cover',

                    }}
                >
                    <Header i={cardData} title={cardData.title} />
                    {/*<Body todo={cardData.todo} todoCompleted={cardData.todoCompleted} textarea={cardData.textarea}/>*/}
                    <Body cardData={cardData} />
                    <Footer
                        cardId={cardData.id}
                        // labels={cardData.labels}
                        // cardData={cardData}
                        handlerCloseFullscreen={handlerCloseFullscreen}
                        saveCard={saveCard}
                    />


                </WrapperCard>
            ) : (
                <div>Loading...</div>
            )}
        </WrapperFullscreen>
    )
        ;
};

export default FullscreenCardComponent;