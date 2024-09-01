import React, { useEffect, useState} from 'react';
import {WrapperTextArea} from "./style";
import {Textarea} from "@mui/joy";
import {useDispatch} from "react-redux";
import {changeTextTextareaAction} from "../../../../card/cardsSlice";

const TextAreaComponent = ({cardData}) => {
    const dispatch = useDispatch()

    const {textarea} = cardData
    // const textArea=useSelector((state)=>state.createNewTodo.textarea)

    const [valueTextarea, setValueTextarea] = useState([])

    useEffect(() => {
        setValueTextarea(textarea)
    }, [textarea]);





    const handlerText=(e)=>{
        const text=e.target.value
        setValueTextarea(text)
        dispatch(changeTextTextareaAction(text))
    }
    return (
        <WrapperTextArea
            sx={{
                height: '100% !important',
            }}
        >
            <Textarea
                value={valueTextarea}
                placeholder={valueTextarea ==='' && 'ведитте текст'}
                onChange={(e) => handlerText(e)}
                sx={{
                    // width: '100%',
                    backgroundColor: 'transparent',
                    overflow: 'none !important',
                    overflowY: 'scroll',
                    height: '100% !important',
                    border: valueTextarea ==='' ? '1px solid black' : '1px solid transparent',
                    padding:'0 !important',
                }}
                minRows={2}
            />
        </WrapperTextArea>
    );
};

export default TextAreaComponent;