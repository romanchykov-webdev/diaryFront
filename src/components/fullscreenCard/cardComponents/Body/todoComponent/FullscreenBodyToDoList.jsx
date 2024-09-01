import './styles.css';
import React, { useState} from "react";
import {Reorder, AnimatePresence} from "framer-motion";

import {Box, Typography} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import TodoCompleteComponent from "./todoCompleteComponent/TodoCompleteComponent";
import TodoNonCompleteComponent from "./todoNonCompleteComponent/TodoNonCompleteComponent";
import {useDispatch} from "react-redux";
import {addNewTodoAction} from "../../../../card/cardsSlice";


export default function FullscreenBodyToDoList({cardData}) {
    const {todo, todoCompleted} = cardData

    // console.log('FullscreenBodyToDoList', cardData)


    const [items, setItems] = useState(todo);

    // const [reorderedItems, setReorderedItems] = useState(todo);

    const dispatch = useDispatch();

    const handlerAddItem = () => {

        const newItem = {
            id: uuidv4(),
            content: '',
            completed: false
        };
        setItems(prevItems => [...prevItems, newItem]);
        console.log('handlerAddItem')
        dispatch(addNewTodoAction(newItem))
    };

    const onReorderItems = (newOrder) => {
        setItems(newOrder);
    };


    const handleDragEnd = () => {
        setItems(items)
        // const updateItem = { ...cardData, todo: items };
    };


    return (
        <div className="wrapperTodo" style={{height: '100%', overflowY: 'scroll', padding: '0'}}>
            {/*no completed*/}
            <Reorder.Group axis="y" onReorder={onReorderItems} values={items.filter(item => !item.completed)}
                           as="ul"
            >
                <AnimatePresence>
                    <TodoNonCompleteComponent
                        // items={items}
                        handlerAddItem={handlerAddItem}
                        handleDragEnd={handleDragEnd}

                        // lastItemRef={lastItemRef}  // Передаем ссылку на последний элемент
                    />
                </AnimatePresence>
            </Reorder.Group>
            <Box sx={{display: 'flex', alignItems: 'center', mb: 2, mt: 2,}} onClick={handlerAddItem}>
                <Typography sx={{cursor: 'pointer', pl: 4, pr: 4}}> + add item </Typography>
            </Box>

            <TodoCompleteComponent
                todoCompleted={todoCompleted}


            />
        </div>
    );
}
