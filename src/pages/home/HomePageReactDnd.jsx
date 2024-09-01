import React, {useEffect, useState} from 'react';
import CardComponent from "../../components/card/CardComponent";
import {WrapperHomePage} from "./style";
import AddCardMobiComponent from "../../components/addCard/mobile/AddCardMobiComponent";
import { Grid, useMediaQuery} from "@mui/material";
import AddCardFsComponent from "../../components/addCard/bigScrin/AddCardFsComponent";
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../store/thunks/cardActions/cardActions";
// DND
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import SortableItem from './SortableItem'; // компонент для сортируемого элемента, который мы создадим ниже




//
const HomePage = () => {
    // DND
    const SortableItem = (props) => {
        const {
            attributes,
            listeners,
            setNodeRef,
            transform,
            transition,
            isDragging
        } = useSortable({ id: props.id });

        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
            // Добавление стилей для анимации и визуализации перетаскивания
            background: isDragging ? 'lightgrey' : 'white',
            border: '1px solid #ddd',
            padding: '16px',
            marginBottom: '8px',
            borderRadius: '4px',
            boxShadow: isDragging ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
            ...props.style
        };

        return (
            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                {props.children}
            </div>
        );
    };
// DND


    const isMobile = useMediaQuery('(max-width:760px)');

    const dispatch = useDispatch();

    const cards = useSelector((state) => state.cards.cards);

    const [localCards, setLocalCards] = useState([]);

    useEffect(() => {
        dispatch(getAllCards());
    }, [dispatch]);

    useEffect(() => {
        setLocalCards([...cards].sort((a, b) => b.order - a.order));
    }, [cards]);

    useEffect(() => {
        console.log('localCards', localCards);
    }, [localCards]);


    // DND

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setLocalCards((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);
                const newItems = arrayMove(items, oldIndex, newIndex).map((card, index) => ({
                    ...card,
                    order: index,
                }));

                // Optionally, you can also dispatch an action to update the order in the backend
                // dispatch(updateCardsOrder(newItems)); // Пример действия для обновления порядка на сервере

                return newItems;
            });
        }
    };

    // DND

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <WrapperHomePage>
                {isMobile ? <AddCardMobiComponent /> : <AddCardFsComponent />}

                <Grid container spacing={2} sx={{ flexGrow: 1, }}>
                    <SortableContext
                        items={localCards.map(card => card.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        {localCards.map((card, index) => (
                            <SortableItem key={card.id} id={card.id}>
                                <CardComponent i={card} />
                            </SortableItem>
                        ))}
                    </SortableContext>
                </Grid>
            </WrapperHomePage>
        </DndContext>
    );
};

export default HomePage;
