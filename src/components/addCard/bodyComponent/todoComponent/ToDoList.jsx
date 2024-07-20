import './styles.css';
import React, {useEffect,  useState} from "react";
import {Reorder, AnimatePresence} from "framer-motion";

import {Box, Typography} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import TodoCompleteComponent from "./todoCompleteComponent/TodoCompleteComponent";
import TodoNonCompleteComponent from "./todoNonCompleteComponent/TodoNonCompleteComponent";
import {useDispatch, useSelector} from "react-redux";
import {addTodoItemAction, dropItemAction} from "./todocomponentSlice"; // Для генерации уникальных ID



export default function ToDoList() {

    const initialItems = useSelector((state) => state.createNewTodo.todo);

    // const initialItemsTodoCompleted = useSelector((state) => state.createNewTodo.todoCompleted);



    const [items, setItems] = useState(initialItems);

    // const [reorderedItems, setReorderedItems] = useState(initialItems);

    const dispatch = useDispatch();

    // const completedItemsCount = items.filter(item => item.completed).length;

    // const [isNewItemAdded, setIsNewItemAdded] = useState(false);  // Добавляем флаг состояния

    // const lastItemRef = useRef(null);  // Создаем ссылку для последнего элемента

    useEffect(() => {
        setItems(initialItems)
        // setReorderedItems(initialItems);
    }, [initialItems]);
    // }, [initialItems, completedItemsCount]);


    const handlerAddItem = () => {

        const newItem = {
            id: uuidv4(),
            content: '',
            completed: false
        };
        setItems(prevItems => [...prevItems, newItem]);
        // setReorderedItems(prevItems => [...prevItems, newItem]);
        dispatch(addTodoItemAction(newItem))
        // setIsNewItemAdded(true);  // Устанавливаем флаг в true при добавлении нового элемента
    };

    // useEffect(() => {
    //     if (isNewItemAdded && lastItemRef.current) {
    //         lastItemRef.current.focus();
    //         setIsNewItemAdded(false);  // Сбрасываем флаг после фокусировки
    //     }
    // }, [isNewItemAdded, items]);

    // const onReorderItems = (newOrder) => {
    //     const newItems = [...items];
    //     const nonCompletedItems = newOrder.filter(item => !item.completed);
    //     let nonCompletedIndex = 0;
    //
    //     for (let i = 0; i < newItems.length; i++) {
    //         if (!newItems[i].completed) {
    //             newItems[i] = nonCompletedItems[nonCompletedIndex++];
    //         }
    //     }
    //
    //     setItems(newItems);
    //
    // };

    const onReorderItems = (newOrder) => {
        setItems(newOrder);
    };
    const handleDragEnd = () => {
        // setItems(reorderedItems);
        dispatch(dropItemAction(items));
        console.log('onDragEnd');
    };
    return (
        <div className="wrapperTodo">
            {/*no completed*/}
            <Reorder.Group axis="y" onReorder={onReorderItems} values={items.filter(item => !item.completed)}
                           as="ul"
            >
                <AnimatePresence>
                    <TodoNonCompleteComponent
                        items={items}
                        handlerAddItem={handlerAddItem}
                        handleDragEnd={handleDragEnd}
                        // lastItemRef={lastItemRef}  // Передаем ссылку на последний элемент
                    />
                </AnimatePresence>
            </Reorder.Group>
            <Box sx={{display: 'flex', alignItems: 'center', mb: 2, mt: 2,}} onClick={handlerAddItem}>
                <Typography sx={{cursor: 'pointer', pl: 4, pr: 4}}> + add item </Typography>
            </Box>
            {/*no completed*/}

            {/*completed*/}
            {/*{completedItemsCount>0 &&(<span>{completedItemsCount} complited</span>)}*/}

            <TodoCompleteComponent
                // items={initialItemsTodoCompleted}
                // completedItemsCount={completedItemsCount}
            />
            {/*completed*/}
        </div>
    );
}
