import React, {useEffect, useState} from 'react';
import {WrapperTextArea} from "./style";
import {Textarea} from "@mui/joy";
import {useDispatch, useSelector} from "react-redux";
import {changeTextareaAction} from "../todoComponent/todocomponentSlice";

const TextAreaComponent = () => {
    const dispatch=useDispatch()

    const textArea=useSelector((state)=>state.createNewTodo.textarea)

    const[valueTextarea,setValueTextarea] = useState(textArea)

    useEffect(() => {
        setValueTextarea(textArea)
    }, [textArea]);

    const handlerText=(e)=>{
        const text=e.target.value
        setValueTextarea(text)
        dispatch(changeTextareaAction(text))
    }
    return (
        <WrapperTextArea>
            <Textarea
                value={valueTextarea}
                onChange={(e)=>handlerText(e)}
                sx={{backgroundColor:'transparent'}}
                minRows={2}
            />
        </WrapperTextArea>
    );
};

export default TextAreaComponent;