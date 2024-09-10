import './styles.css';
import React, {useEffect, useState} from "react";
import {Reorder, AnimatePresence,motion} from "framer-motion";

import {Box, Typography} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import TodoCompleteComponent from "./todoCompleteComponent/TodoCompleteComponent";
import TodoNonCompleteComponent from "./todoNonCompleteComponent/TodoNonCompleteComponent";
import {useDispatch, useSelector} from "react-redux";
import {addNewTodoAction, handleDragEndAction} from "../../../../card/cardsSlice";
import {useTranslation} from "react-i18next";


export default function FullscreenBodyToDoList() {

    // translate
    const {t} = useTranslation();
    // translate


    // const {todo, todoCompleted} = cardData

    // console.log('FullscreenBodyToDoList', cardData)

    const todo=useSelector((store)=>store.fullscreenToggle.card.todo)
    const todoCompleted=useSelector((store)=>store.fullscreenToggle.card.todoCompleted)

    const [items, setItems] = useState(todo);

    useEffect(()=>{
        setItems(todo)
    },[todo])

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
        // console.log('setItems',items)
        dispatch(handleDragEndAction(items))
    };


    return (
        <motion.div
            className="wrapperTodo"
            style={{height: '100%', overflowY: 'scroll', padding: '0'}}
            layout
            transition={{ ease: "easeInOut"}} // добавляем плавность через ease
        >
            {/*<div className="wrapperTodo" style={{height: '100%', overflowY: 'scroll', padding: '0'}}>*/}
            {/*no completed*/}
            <Reorder.Group axis="y" onReorder={onReorderItems} values={items.filter(item => !item.completed)}
                           as="ul"
                           layout
                           transition={{ ease: "easeInOut"}} // плавная анимация для изменения порядка
            >
                <AnimatePresence>
                    <TodoNonCompleteComponent
                        // items={items}
                        todoNoCompleted={items}
                        handlerAddItem={handlerAddItem}
                        handleDragEnd={handleDragEnd}

                        // lastItemRef={lastItemRef}  // Передаем ссылку на последний элемент
                    />
                </AnimatePresence>
            </Reorder.Group>
            <Box sx={{display: 'flex', alignItems: 'center', mb: 2, mt: 2,}} onClick={handlerAddItem}>
                <Typography sx={{cursor: 'pointer', pl: 4, pr: 4}}> + {t('Add')} </Typography>
            </Box>

            <motion.div layout transition={{ ease: "easeInOut"}}>
                <TodoCompleteComponent
                    todoCompleted={todoCompleted}
                />
            </motion.div>
            {/*</div>*/}
        </motion.div>
    );
}
