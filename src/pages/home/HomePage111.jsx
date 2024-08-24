import React, {useEffect, useLayoutEffect, useState} from 'react';
import CardComponent from "../../components/card/CardComponent";
import {WrapperHomePage} from "./style";
import AddCardMobiComponent from "../../components/addCard/mobile/AddCardMobiComponent";
import {Grid, useMediaQuery} from "@mui/material";
import AddCardFsComponent from "../../components/addCard/bigScrin/AddCardFsComponent";
import {useDispatch, useSelector} from "react-redux";
import {getAllCards, updateCardOrders} from "../../store/thunks/cardActions/cardActions";
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {dragAndDrop} from "../../store/slice/cardReducer/cardReducer";

const ItemType = 'CARD';

const DraggableCard = ({card, index, moveCard, dispatch, localCards, cards}) => {
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
            dispatch(dragAndDrop(localCards));
            // Вызываем функцию для отправки обновлений на сервер после окончания перетаскивания
            // Проверка и отправка измененных карточек на сервер
            const updatedCardsForDb = localCards.filter((updatedCard) => {
                const originalCard = cards.find(card => card.id === updatedCard.id);
                return originalCard && originalCard.order !== updatedCard.order;
            });
            if (updatedCardsForDb.length > 0) {
                dispatch(updateCardOrders(updatedCardsForDb)); // Отправляем на сервер
            }
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
        <Grid
            xs={12} sm={4} md={3} item
            sx={{
                outline: '1px solid red',
                paddingTop: '0 !Important',
                paddingLeft: '0 !Important',
                opacity: isDragging ? 0.5 : 1
            }}
            ref={ref}
        >
            <CardComponent
                i={card}
                sx={{padding: '1px'}}
            />
        </Grid>

    );
};

const HomePage = () => {
    const isMobile = useMediaQuery('(max-width:760px)');
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.cards);

    const [localCards, setLocalCards] = useState(cards);

    useEffect(() => {
        dispatch(getAllCards());
    }, [dispatch]);

    // useEffect(() => {
    //     setLocalCards(cards);
    // }, [cards]);

    useLayoutEffect(() => {
        setLocalCards(cards);
    }, [cards])

    // const moveCard = (fromIndex, toIndex) => {
    //     const updatedCards = [...localCards];
    //     const [movedCard] = updatedCards.splice(fromIndex, 1);
    //     updatedCards.splice(toIndex, 0, movedCard);
    //
    //     setLocalCards(updatedCards);
    //     console.log('DraggableCard', updatedCards)
    // };

    // const moveCard = (fromIndex, toIndex) => {
    //     const updatedCards = localCards.map(card => ({ ...card })); // Создаем копии объектов
    //
    //     const [movedCard] = updatedCards.splice(fromIndex, 1); // Удаляем карточку из старого места
    //
    //     // Определяем направление сдвига
    //     const direction = toIndex > fromIndex ? -1 : 1;
    //
    //     // Смещаем карточки между старой и новой позицией
    //     for (let i = Math.min(fromIndex, toIndex); i <= Math.max(fromIndex, toIndex); i++) {
    //         if (i !== fromIndex) {
    //             updatedCards[i].order += direction;
    //         }
    //     }
    //
    //     // Вставляем перемещаемую карточку в новое место
    //     movedCard.order = updatedCards[toIndex].order; // Перемещенная карточка получает новый `order`
    //     updatedCards.splice(toIndex, 0, movedCard); // Вставляем карточку на новое место
    //
    //     // Обновляем порядок в массиве
    //     const reorderedCards = updatedCards.map((card, index) => ({
    //         ...card,
    //         order: index + 1, // Обновляем поле `order` в соответствии с текущим порядком в массиве
    //     }));
    //
    //     setLocalCards(reorderedCards);
    //     dispatch(dragAndDrop(reorderedCards));
    //     console.log('DraggableCard', reorderedCards);
    // };


    // const moveCard = (fromIndex, toIndex) => {
    //     const updatedCards = localCards.map(card => ({ ...card })); // Создаем копии объектов
    //
    //     const [movedCard] = updatedCards.splice(fromIndex, 1); // Удаляем карточку из старого места
    //
    //     // Определяем направление сдвига
    //     const direction = toIndex > fromIndex ? -1 : 1;
    //
    //     // Смещаем карточки между старой и новой позицией
    //     for (let i = Math.min(fromIndex, toIndex); i <= Math.max(fromIndex, toIndex); i++) {
    //         if (i !== fromIndex) {
    //             updatedCards[i].order += direction;
    //         }
    //     }
    //
    //     // Вставляем перемещаемую карточку в новое место
    //     updatedCards.splice(toIndex, 0, movedCard); // Вставляем карточку на новое место
    //
    //     // Обновляем порядок в массиве и устанавливаем новый `order`
    //     const reorderedCards = updatedCards.map((card, index) => ({
    //         ...card,
    //         order: index + 1, // Обновляем поле `order` в соответствии с текущим порядком в массиве
    //     }));
    //
    //     setLocalCards(reorderedCards);
    //     dispatch(dragAndDrop(reorderedCards));
    //     console.log('DraggableCard', reorderedCards);
    //
    //     // Теперь вызываем функцию для обновления базы данных
    //     const updatedCardsForDb = getUpdatedCards(localCards, reorderedCards);
    //     if (updatedCardsForDb.length > 0) {
    //         dispatch(updateCardOrders(updatedCardsForDb)); // Предполагается, что у вас есть такой экшен
    //     }
    // };
    // const getUpdatedCards = (originalCards, updatedCards) => {
    //     return updatedCards.filter((updatedCard, index) => {
    //         const originalCard = originalCards.find(card => card.id === updatedCard.id);
    //         return originalCard && originalCard.order !== updatedCard.order;
    //     });
    // };


    const moveCard = (fromIndex, toIndex) => {
        const updatedCards = localCards.map(card => ({...card})); // Создаем копии объектов

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
        dispatch(dragAndDrop(updatedCards));

        // Проверяем какие карточки изменили order и обновляем их в базе данных
        // const updatedCardsForDb = getUpdatedCards(localCards, updatedCards);
        // if (updatedCardsForDb.length > 0) {
        //     dispatch(updateCardOrders(updatedCardsForDb)); // Предполагается, что у вас есть такой экшен
        // }
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

                <Grid container sx={{flexGrow: 1, gap: '10px'}}>
                    {localCards.map((card, index) => (
                        <DraggableCard
                            style={{paddingTop: '2px'}}
                            key={card.id}
                            index={index}
                            card={card}
                            moveCard={moveCard}
                            dispatch={dispatch}
                            localCards={localCards}
                            cards={cards}

                        />
                    ))}
                </Grid>
            </WrapperHomePage>
        </DndProvider>
    );
};

export default HomePage;
