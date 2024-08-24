import React from 'react';
import {Textarea} from "@mui/joy";

const TextareaComponentSmall = ({textarea}) => {
    return (
        <Textarea
            value={textarea}
            sx={{
                border:'none',
                backgroundColor: 'var(--background-color)', color: 'var(--text-color)',
                height: '100%'
            }}>
        </Textarea>
    );
};

export default TextareaComponentSmall;