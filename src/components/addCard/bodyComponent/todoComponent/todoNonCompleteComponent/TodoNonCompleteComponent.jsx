import React from 'react';
import { Reorder } from "framer-motion";
import { Box, TextField } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// import {Item} from "../Item";
import {
    changeTextAction,
    removeTodoItemAction,
    todoCompletedAction
} from "../todocomponentSlice";
import {useDispatch} from "react-redux";
const TodoNonCompleteComponent = (
    {
        items,
        handlerAddItem,
        handleDragEnd
        // lastItemRef
    }) => {

    const dispatch = useDispatch();

    const handlerTodoCompleted = (item) => {
        dispatch(todoCompletedAction({ item }));
    };

    const handlerChangeText = (e, id) => {
        const text = e.target.value;
        dispatch(changeTextAction({ id, text }));
    };

    const handlerRemoveItem = (id) => {
        dispatch(removeTodoItemAction(id));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handlerAddItem();
        }
    };


    return (
        <>
            {/*{items.filter(item => !item.completed).map((itemNoComplete, index) => (*/}
            {/*    <Item*/}
            {/*        key={itemNoComplete.id}*/}
            {/*        item={itemNoComplete}*/}
            {/*        handlerAddItem={handlerAddItem}*/}
            {/*        // inputRef={index === items.filter(i => !i.completed).length - 1 ? lastItemRef : null}  // Устанавливаем ссылку только для последнего элемента*/}
            {/*    />*/}
            {/*))}*/}
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
                        onClick={() => handlerRemoveItem(item.id)} />
                </Reorder.Item>
            ))}

        </>
    );
};

export default TodoNonCompleteComponent;