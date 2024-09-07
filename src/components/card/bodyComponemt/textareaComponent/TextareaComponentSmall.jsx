import React from 'react';
import {Textarea} from "@mui/joy";

const TextareaComponentSmall = ({textarea}) => {
    return (
        <Textarea

            value={textarea}
            sx={{
                border: 'none',
                // border:'1px solid red',
                // backgroundColor: 'var(--background-color)',
                // color: 'var(--text-color)',
                backgroundColor: 'transparent',
                // color: 'var(--text-color)',
                height: '100% !important',
                // overflow: 'hidden',
                // overflowY: 'scroll',
                padding: '0 !important',
                // '& .MuiBox-root .css-0':{
                //     border: '1px solid red',
                // },
                '& .css-sws92j-JoyTextarea-textarea': {
                    padding: '0 !important',
                    // border: '1px solid red',
                    height: '100% !important',
                    // overflow: 'hidden',
                    // '& .css-0':{
                    //     // height: '100% !important',
                    //     border: '1px solid black',
                    // }
                },
                '& ::-webkit-scrollbar': {
                    display: 'none'
                },

            }}

        >

        </Textarea>
    );
};

export default TextareaComponentSmall;