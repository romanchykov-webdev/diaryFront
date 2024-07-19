import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ClearIcon from "@mui/icons-material/Clear";
import {useDispatch, useSelector} from "react-redux";
import {removeTodoCompletedItemAction,  todoNonCompletedAction} from "../todocomponentSlice";
import {motion} from 'framer-motion';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const TodoCompleteComponent = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.createNewTodo.todoCompleted);

    const lengthItemsCompleted=Object.keys(items).length;
    console.log('lengthItemsCompleted',lengthItemsCompleted)


    const handlerTodoNonCompleted = (item) => {
        dispatch(todoNonCompletedAction({item}))
    }


    const handlerRemoveItem = (id) => {
        // dispatch(removeTodoItemAction(id))
        dispatch(removeTodoCompletedItemAction(id))
    }

    // console.log('itemNoComplete', items)

    return (
        <>
            {
                lengthItemsCompleted > 0 && (
                    <motion.ul
                        initial={{height: 0, opacity: 0}}
                        animate={{height: 'auto', opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.5}}
                    >
                        <Accordion sx={{backgroundColor: 'transparent',}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography variant="body1" sx={{textDecoration: 'underline'}}>
                                    {lengthItemsCompleted}
                                    Completed Items</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {items.map(item =>  (
                                    <motion.li
                                        className="reorder-item"
                                        key={item.id}
                                        style={{
                                            cursor: 'no-drop',
                                            listStyleType: 'none'
                                        }}
                                        initial={{height: 0, opacity: 0}}
                                        animate={{height: 'auto', opacity: 1}}
                                        exit={{height: 0, opacity: 0}}
                                        transition={{duration: 0.5}}
                                    >
                                        <Box onClick={() => handlerTodoNonCompleted(item)}
                                             sx={{
                                                 display: 'flex',
                                                 alignItems: 'center',
                                             }}
                                        >
                                            <CheckBoxIcon sx={{
                                                cursor: 'pointer',
                                                width: '20px',
                                                height: '20px',
                                                '&:hover': {
                                                    transform: 'scale(1.5)',
                                                    transition: 'transform 0.2s ease-in-out',
                                                },
                                            }}/>
                                        </Box>
                                        <Typography
                                            sx={{
                                                width: '100%',
                                                ml: 1,
                                                mr: 1,
                                                textDecoration: 'line-through',
                                                cursor: 'no-drop',
                                            }}
                                            variant="standard">
                                            {item.content}
                                        </Typography>
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
                                            onClick={() => handlerRemoveItem(item.id)}
                                        />
                                    </motion.li>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    </motion.ul>
                )

            }
        </>

    )
        ;
};

export default TodoCompleteComponent;


