import React from 'react';
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {Box, TextField} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ClearIcon from "@mui/icons-material/Clear";

const TodoNonCompleteComponentSmall = ({todo}) => {
    return (
        <>
            {todo.map((item) => (
            <Box key={item.id} value={item}
            sx={{
                display:'flex',
                alignItems:'center',
            }}
            >
                <DragIndicatorIcon sx={{
                    width: '20px',
                    height: '20px',
                    '&:hover': {
                        transform: 'scale(1.5)',
                        transition: 'transform 0.2s ease-in-out',
                    },
                }} />
                <Box
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
                           // onKeyDown={handleKeyDown}
                           // onChange={(e) => handlerChangeText(e, item.id)}
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
                    // onClick={() => handlerRemoveItem(item.id)}
                />
            </Box>
            ))}

        </>
    );
};

export default TodoNonCompleteComponentSmall;