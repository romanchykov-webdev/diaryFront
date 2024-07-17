import React from 'react';
import {WrapperBody} from "./style";
import {useSelector} from "react-redux";
import { Textarea } from '@mui/joy';
const BodyComponent = () => {
    const addCardSwitcher = useSelector((state) => state.addCard)
    const todo = addCardSwitcher.todo
    const textarea = addCardSwitcher.textarea
    // const showSwitcher = addCardSwitcher.showSwitcher
    return (
        <WrapperBody>
            {todo && <div>
                <h1>todo body</h1>
            </div>}
            {textarea && <div>
                <Textarea sx={{backgroundColor:'transparent'}} minRows={2} />
            </div>}
        </WrapperBody>
    );
};

export default BodyComponent;