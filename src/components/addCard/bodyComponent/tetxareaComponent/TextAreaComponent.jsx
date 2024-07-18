import React from 'react';
import {WrapperTextArea} from "./style";
import {Textarea} from "@mui/joy";

const TextAreaComponent = () => {
    return (
        <WrapperTextArea>
            <Textarea sx={{backgroundColor:'transparent'}} minRows={2} />
        </WrapperTextArea>
    );
};

export default TextAreaComponent;