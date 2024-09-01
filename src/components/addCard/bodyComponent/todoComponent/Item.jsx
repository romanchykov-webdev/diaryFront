import * as React from "react";
import {Reorder} from "framer-motion";
import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import {Box, TextField} from "@mui/material";
import { useState} from "react";
import {useDispatch} from "react-redux";
import {
    changeTextAction,
    removeTodoItemAction,
    // switcherCompletedAction,
    todoCompletedAction
} from "./todocomponentSlice";


// animation init,animate exit
const variants = {
    initial: {
        opacity: 0,
        height: 0,
    },
    animate: {
        opacity: 1,
        height: 'auto',
    },
    exit: {
        opacity: 0,
        height: 0,
    }
}
// animation init,animate exit

export const Item = (
    {
        item,
        handlerAddItem,
        // inputRef
    }) => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState(item.content)



    const handlerTodoCompleted = (item) => {
        dispatch(todoCompletedAction({item}))
    }

    const handlerChangeText = (e, id) => {
        const text = e.target.value
        setInputValue(text)
        // console.log('text', text)
        dispatch(changeTextAction({id, text}))
    }

    const handlerRemoveItem = (id) => {
        dispatch(removeTodoItemAction(id))
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handlerAddItem();
        }
    };

    return (
        <Reorder.Item value={item} id={item.id} className="reorder-item"
            // style={{ boxShadow, y }}
                      {...variants}
                      whileDrag={{
                          scale: 1.1,
                      }}


        >
            <DragIndicatorIcon sx={{
                width: '20px',
                height: '20px',
                '&:hover': {
                    transform: 'scale(1.5)',
                    transition: 'transform 0.2s ease-in-out',
                },
            }}/>
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
                }}/>

            </Box>
            <TextField sx={{width: '100%', ml: 1, mr: 1}} variant="standard"
                       value={inputValue}
                       autoComplete="off"
                       onKeyDown={handleKeyDown}
                       // inputRef={inputRef}
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
                onClick={() => handlerRemoveItem(item.id)}/>

        </Reorder.Item>
    );
};
