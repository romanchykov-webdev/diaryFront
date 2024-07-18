import * as React from "react";
import {Reorder} from "framer-motion";
// import { useRaisedShadow } from "./use-raised-shadow";
import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import {Box, TextField} from "@mui/material";
import {useState} from "react";


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

export const Item = ({item, removeItem, toggleComplete}) => {
    // const y = useMotionValue(0);
    // const boxShadow = useRaisedShadow(y);
    const [inputValue, setInputValue] = useState(item.content)

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
            <Box onClick={() => toggleComplete(item.id)}
                 sx={{
                     display: 'flex',
                     alignItems: 'center',
                 }}
            >

                {
                    item.completed
                        ? <CheckBoxIcon sx={{
                            cursor: 'pointer',
                            width: '20px',
                            height: '20px',
                            '&:hover': {
                                transform: 'scale(1.5)',
                                transition: 'transform 0.2s ease-in-out',
                            },
                        }}/>
                        : <CheckBoxOutlineBlankIcon sx={{
                            cursor: 'pointer',
                            width: '20px',
                            height: '20px',
                            '&:hover': {
                                transform: 'scale(1.5)',
                                transition: 'transform 0.2s ease-in-out',
                            },
                        }}/>
                }


            </Box>
            <TextField sx={{width: '100%', ml: 1, mr: 1}} variant="standard" value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}/>
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
                onClick={() => removeItem(item.id)}/>

        </Reorder.Item>
    );
};
