import React, {useEffect, useLayoutEffect, useState} from 'react';
import CardComponent from "../../components/card/CardComponent";
import {WrapperCards, WrapperHomePage} from "./style";
import AddCardMobiComponent from "../../components/addCard/mobile/AddCardMobiComponent";
import {Box, useMediaQuery} from "@mui/material";
import AddCardFsComponent from "../../components/addCard/bigScrin/AddCardFsComponent";
import {useDispatch, useSelector} from "react-redux";
import {getAllCards, getCardIds} from "../../store/thunks/cardActions/cardActions";
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

const ItemType = 'CARD';


const DraggableCard = ({card, index, moveCard}) => {
    const ref = React.useRef(null);


    const [, drop] = useDrop({
        accept: ItemType,
        hover(item) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
        drop(item) {

        },
    });

    const [{isDragging}, drag] = useDrag({
        type: ItemType,
        item: {type: ItemType, id: card.id, index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),

    });

    drag(drop(ref));

    return (
        <Box
            // xs={12} sm={4} md={3} item
            sx={{
                // outline: '1px solid red',
                // paddingTop: '0 !Important',
                // paddingLeft: '0 !Important',
                opacity: isDragging ? 0.5 : 1
            }}
            ref={ref}
        >
            <CardComponent
                i={card}
                sx={{padding: '1px'}}
            />
        </Box>

    );
};

const HomePage = () => {
    const isMobile = useMediaQuery('(max-width:760px)');
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.cards);



    const [localCards, setLocalCards] = useState(cards);

    useEffect(() => {
        dispatch(getCardIds());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllCards());
    }, [dispatch]);


    useLayoutEffect(() => {
        setLocalCards(cards);
    }, [cards])


    let updatedCards
    const moveCard = (fromIndex, toIndex) => {
        updatedCards = localCards.map(card => ({...card})); // Создаем копии объектов

        const [movedCard] = updatedCards.splice(fromIndex, 1); // Удаляем карточку из старого места

        // Вставляем перемещаемую карточку в новое место
        updatedCards.splice(toIndex, 0, movedCard);

        // Если карточка перемещена вверх в списке (индекс уменьшился)
        if (fromIndex > toIndex) {
            for (let i = toIndex; i <= fromIndex; i++) {
                if (i === toIndex) {
                    updatedCards[i].order = updatedCards[i + 1].order + 1; // Увеличиваем order на 1 от следующего
                } else {
                    updatedCards[i].order -= 1; // Остальные уменьшить на 1
                }
            }
        } else {
            // Если карточка перемещена вниз в списке (индекс увеличился)
            for (let i = fromIndex; i <= toIndex; i++) {
                if (i === toIndex) {
                    updatedCards[i].order = updatedCards[i - 1].order - 1; // Уменьшаем order на 1 от предыдущего
                } else {
                    updatedCards[i].order += 1; // Остальные увеличить на 1
                }
            }
        }

        // Устанавливаем обновленный массив
        setLocalCards(updatedCards);
        // dispatch(dragAndDrop(updatedCards));

        // Проверяем какие карточки изменили order и обновляем их в базе данных
        const updatedCardsForDb = getUpdatedCards(localCards, updatedCards);
        if (updatedCardsForDb.length > 0) {

            // dispatch(updateCardOrders(updatedCardsForDb)); // Предполагается, что у вас есть такой экшен
        }

    };


    const getUpdatedCards = (originalCards, updatedCards) => {
        return updatedCards.filter((updatedCard) => {
            const originalCard = originalCards.find(card => card.id === updatedCard.id);
            return originalCard && originalCard.order !== updatedCard.order;
        });
    };


    return (
        <DndProvider backend={HTML5Backend}>
            <WrapperHomePage>
                {isMobile ? <AddCardMobiComponent/> : <AddCardFsComponent/>}

                {/*<Grid*/}
                {/*    // container sx={{flexGrow: 1, gap: '10px'}}*/}
                {/*>*/}
                <WrapperCards>
                    {localCards.map((card, index) => (
                        <DraggableCard
                            style={{paddingTop: '2px'}}
                            key={card.id}
                            index={index}
                            card={card}
                            moveCard={moveCard}
                            dispatch={dispatch}
                            localCards={localCards}
                        />
                    ))}
                </WrapperCards>
                {/*</Grid>*/}
            </WrapperHomePage>
        </DndProvider>
    );
};

export default HomePage;
