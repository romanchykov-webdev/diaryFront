import React from 'react';


import { Typography} from "@mui/material";

import TodoNonCompleteComponentSmall from "./todoNonCompleteComponentSmall/TodoNonCompleteComponentSmall";
import TodoCompleteComponentSmall from "./todoCompleteComponentSmall/TodoCompleteComponentSmall";
import {WrapperTodoComponents} from "./style";

const TodoComponentSmall = ({todo,todoCompleted}) => {



    return (
        <WrapperTodoComponents>
            <TodoNonCompleteComponentSmall todo={todo}/>
            {
                todoCompleted && <Typography>
                    completed items {todoCompleted.length}
                </Typography>
            }
            <TodoCompleteComponentSmall todoCompleted={todoCompleted}/>

        </WrapperTodoComponents>
    );
};

export default TodoComponentSmall;