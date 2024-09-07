import React, {useEffect, useState} from 'react';
import { Reorder } from "framer-motion";
import { Box, TextField } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// import {Item} from "../Item";

import {useDispatch, useSelector} from "react-redux";
import {changeTextItemTodoAction, removeItemAction, toggleCompletedAction} from "../../../../../card/cardsSlice";
const TodoNonCompleteComponent = (
    {
        // items,
        todoNoCompleted,
        handlerAddItem,
        handleDragEnd,

        // lastItemRef
    }) => {


// const todoNoCompleted=useSelector((state)=>state.fullscreenToggle.card.todo)
    // console.log('todoNoCompleted',todoNoCompleted)
    const [items,setItems]=useState(todoNoCompleted);
    useEffect(() => {
        setItems(todoNoCompleted)
    }, [todoNoCompleted]);
    // console.log('TodoNonCompleteComponent',todoNoCompleted)

    const dispatch = useDispatch();

    const handlerTodoCompleted = (item) => {
        console.log('handlerTodoCompleted')
        const newItem={...item,completed:!item.completed}
        dispatch(toggleCompletedAction(newItem))
    };

    const handlerChangeText = (e, id) => {
        const text = e.target.value;
        // dispatch(changeTextAction({ id, text }));
        console.log('handlerChangeText',text)
        dispatch(changeTextItemTodoAction({id,text}))
    };

    const handlerRemoveItem = (item) => {
        // dispatch(removeTodoItemAction(id));
        // console.log('handlerRemoveItem')
        dispatch(removeItemAction(item))
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handlerAddItem();
        }
    };


    return (
        <>

            {items.map((item) => (
                <Reorder.Item key={item.id} value={item} className="reorder-item" onDragEnd={handleDragEnd}>
                    <DragIndicatorIcon sx={{
                        width: '20px',
                        height: '20px',
                        '&:hover': {
                            transform: 'scale(1.5)',
                            transition: 'transform 0.2s ease-in-out',
                        },
                    }} />
                    <Box onClick={() => handlerTodoCompleted(item)}
                         sx={{
                             display: 'flex',
                             alignItems: 'center',
                         }}
                    >
                        <CheckBoxOutlineBlankIcon sx={{
                            cursor: 'pointer',
                            width: '20px',
                            height: '20px',
                            '&:hover': {
                                transform: 'scale(1.5)',
                                transition: 'transform 0.2s ease-in-out',
                            },
                        }} />
                    </Box>
                    <TextField sx={{ width: '100%', ml: 1, mr: 1 }} variant="standard"
                               value={item.content}
                               autoComplete="off"
                               onKeyDown={handleKeyDown}
                               onChange={(e) => handlerChangeText(e, item.id)}
                    />
                    <ClearIcon
                        sx={{
                            borderLeft: '1px solid var(--border-color)',
                            backgroundColor: 'rgb(244, 244, 244,  9%)',
                            cursor: 'pointer',
                            width: '20px',
                            height: '30px',
                            transition: '0.5s',
                            '&:hover': {
                                backgroundColor: 'rgb(244, 244, 244,  20%)',
                                transform: 'scale(1.5)',
                                transition: 'transform 0.2s ease-in-out',
                            }
                        }}
                        onClick={() => handlerRemoveItem(item)} />
                </Reorder.Item>
            ))}

        </>
    );
};

export default TodoNonCompleteComponent;