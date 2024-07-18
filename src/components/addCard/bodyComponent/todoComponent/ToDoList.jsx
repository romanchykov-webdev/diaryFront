import './styles.css';
import React, { useState } from "react";
import { Reorder, AnimatePresence } from "framer-motion";
import { Item } from "./Item";
import { Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from 'uuid'; // Для генерации уникальных ID

const initialItems = [
    {id: '1', content: '🍅 Tomato', completed: false},
    {id: '2', content: '🥒 Cucumber', completed: false},
    {id: '3', content: '🥒 Cucumber1', completed: false},
    {id: '4', content: '🥒 Cucumber2', completed: true},
    {id: '5', content: '🧀 Cheese', completed: false},
    {id: '6', content: '🧀 Cheese1', completed: false},
    {id: '7', content: '🧀 Cheese2', completed: false},
    {id: '8', content: '🥬 Lettuce', completed: false},
];

export default function ToDoList() {
    const [items, setItems] = useState(initialItems);

    const removeItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const toggleComplete = (id) => {
        const updatedItems = items.map(item =>
            item.id === id ? {...item, completed: !item.completed} : item
        );
        setItems(updatedItems);
    };

    const handlerAddItem = () => {
        const newItem = {
            id: uuidv4(),
            content: '',
            completed: false
        };
        setItems(prevItems => [...prevItems, newItem]);
    };

    const onReorderItems = (newOrder) => {
        const newItems = [...items];
        const nonCompletedItems = newOrder.filter(item => !item.completed);
        let nonCompletedIndex = 0;

        for (let i = 0; i < newItems.length; i++) {
            if (!newItems[i].completed) {
                newItems[i] = nonCompletedItems[nonCompletedIndex++];
            }
        }

        setItems(newItems);
    };

    return (
        <div className="wrapperTodo">
            <Reorder.Group axis="y" onReorder={onReorderItems} values={items.filter(item => !item.completed)} as="ul">
                <AnimatePresence>
                    {items.filter(item => !item.completed).map(filteredItem => (
                        <Item key={filteredItem.id} item={filteredItem} removeItem={removeItem} toggleComplete={toggleComplete}/>
                    ))}
                </AnimatePresence>
            </Reorder.Group>
            <Box sx={{display: 'flex', alignItems: 'center'}} onClick={handlerAddItem}>
                + <Typography> add item </Typography>
            </Box>
            {items.some(item => item.completed) && (
                <Box>
                    <Typography variant="body1" sx={{textDecoration: 'underline'}}>Completed Items</Typography>
                </Box>
            )}
            <Reorder.Group axis="y" onReorder={onReorderItems} values={items.filter(item => item.completed)} as="ul">
                <AnimatePresence>
                    {items.filter(item => item.completed).map(filteredItem => (
                        <Item key={filteredItem.id} item={filteredItem} removeItem={removeItem} toggleComplete={toggleComplete}/>
                    ))}
                </AnimatePresence>
            </Reorder.Group>
        </div>
    );
}
