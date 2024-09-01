import React from 'react';
import {Box, TextField, Typography} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ClearIcon from "@mui/icons-material/Clear";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const TodoCompleteComponentSmall = ({todoCompleted}) => {
    return (
        <>
            {todoCompleted.map((item) => (
                <Box key={item.id} value={item}
                     sx={{
                         display:'flex',
                         alignItems:'center',
                     }}
                >
                    {/*<DragIndicatorIcon sx={{*/}
                    {/*    width: '20px',*/}
                    {/*    height: '20px',*/}
                    {/*    '&:hover': {*/}
                    {/*        transform: 'scale(1.5)',*/}
                    {/*        transition: 'transform 0.2s ease-in-out',*/}
                    {/*    },*/}
                    {/*}} />*/}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <CheckBoxIcon sx={{
                            width: '20px',
                            height: '20px',
                        }} />
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
                        // onClick={() => handlerRemoveItem(item.id)}
                    />
                </Box>
            ))}

        </>
    );
};

export default TodoCompleteComponentSmall;