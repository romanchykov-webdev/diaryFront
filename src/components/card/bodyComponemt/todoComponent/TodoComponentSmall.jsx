import React, {useState} from 'react';
import {AnimatePresence, Reorder} from "framer-motion";

import {Box, Typography} from "@mui/material";

import TodoNonCompleteComponentSmall from "./todoNonCompleteComponentSmall/TodoNonCompleteComponentSmall";
import TodoCompleteComponentSmall from "../todoCompleteComponentSmall/TodoCompleteComponentSmall";

const TodoComponentSmall = ({todo,todoCompleted}) => {

    const [itemsTodo, setItemsTodo] = useState(todoCompleted);

    const onReorderItems = (newOrder) => {
        setItemsTodo(newOrder);
    };

    return (
        <div className="wrapperTodo">
            {/*no completed*/}
            <Reorder.Group axis="y"
                           onReorder={onReorderItems}
                           values={itemsTodo}
                           as="ul"
            >
                <AnimatePresence>
                    <TodoNonCompleteComponentSmall
                        // items={items}
                        // handlerAddItem={handlerAddItem}
                        // handleDragEnd={handleDragEnd}
                        // lastItemRef={lastItemRef}  // Передаем ссылку на последний элемент
                    />
                </AnimatePresence>
            </Reorder.Group>
            <Box sx={{display: 'flex', alignItems: 'center', mb: 2, mt: 2,}}
                 // onClick={handlerAddItem}
            >
                <Typography sx={{cursor: 'pointer', pl: 4, pr: 4}}> + add item </Typography>
            </Box>
            {/*no completed*/}

            {/*completed*/}


            <TodoCompleteComponentSmall

            />
            {/*completed*/}
        </div>
    );
};

export default TodoComponentSmall;