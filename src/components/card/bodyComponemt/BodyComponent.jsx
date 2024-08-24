import React from 'react';
import TextareaComponentSmall from "./textareaComponent/TextareaComponentSmall";
import TodoCompleteComponentSmall from "./todoCompleteComponentSmall/TodoCompleteComponentSmall";
import {Box} from "@mui/material";

const BodyComponent = ({todo, todoCompleted, textarea,sx}) => {
    function handkerClick() {
        console.log('click body component')
    }

    return (
    <Box
        onClick={handkerClick}
        sx={{ flex: '1 1 auto', ...sx }}
    >
        {
            textarea ? <TextareaComponentSmall textarea={textarea}/>
                : <TodoCompleteComponentSmall todo={todo} todoCompleted={todoCompleted}/>
        }
    </Box>
    );
};

export default BodyComponent;