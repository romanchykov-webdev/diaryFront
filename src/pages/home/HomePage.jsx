import React, {useEffect, useState} from 'react';
import CardComponent from "../../components/card/CardComponent";
import {WrapperHomePage} from "./style";
import AddCardMobiComponent from "../../components/addCard/mobile/AddCardMobiComponent";
import {Box, Grid, useMediaQuery} from "@mui/material";
import AddCardFsComponent from "../../components/addCard/bigScrin/AddCardFsComponent";
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../store/thunks/cardActions/cardActions";
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
            xs={12} sm={6} md={3} item
            sx={{outline: '1px solid red', padding: '5px', opacity: isDragging ? 0.5 : 1}}
            ref={ref}
        >
            <CardComponent i={card}
                           />
        </Grid>

    );
};

const HomePage = () => {
    const isMobile = useMediaQuery('(max-width:760px)');
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.cards);

    const [localCards, setLocalCards] = useState([]);

    useEffect(() => {
        dispatch(getAllCards());
    }, [dispatch]);

    useEffect(() => {
        setLocalCards([...cards].sort((a, b) => a.order - b.order));
    }, [cards]);

    const moveCard = (fromIndex, toIndex) => {
        const updatedCards = [...localCards];
        const [movedCard] = updatedCards.splice(fromIndex, 1);
        updatedCards.splice(toIndex, 0, movedCard);

        setLocalCards(updatedCards);
        console.log('DraggableCard', updatedCards)
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <WrapperHomePage>
                {isMobile ? <AddCardMobiComponent/> : <AddCardFsComponent/>}

                <Grid container spacing={2} sx={{flexGrow: 1,}}>
                    {localCards.map((card, index) => (
                        <DraggableCard key={card.id} index={index} card={card} moveCard={moveCard}/>
                    ))}
                </Grid>
            </WrapperHomePage>
        </DndProvider>
    );
};

export default HomePage;
