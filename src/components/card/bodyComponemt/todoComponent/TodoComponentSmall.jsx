import React from 'react';


import { Typography} from "@mui/material";

import TodoNonCompleteComponentSmall from "./todoNonCompleteComponentSmall/TodoNonCompleteComponentSmall";
import TodoCompleteComponentSmall from "./todoCompleteComponentSmall/TodoCompleteComponentSmall";
import {WrapperTodoComponents} from "./style";
import {useTranslation} from "react-i18next";

const TodoComponentSmall = ({todo,todoCompleted}) => {

    // translate
    const {t} = useTranslation();
    // translate


    return (
        <WrapperTodoComponents>
            <TodoNonCompleteComponentSmall todo={todo}/>
            {
                todoCompleted.length>0 && <Typography>
                    {todoCompleted.length} {t('Completed item')}
                </Typography>
            }
            <TodoCompleteComponentSmall todoCompleted={todoCompleted}/>

        </WrapperTodoComponents>
    );
};

export default TodoComponentSmall;