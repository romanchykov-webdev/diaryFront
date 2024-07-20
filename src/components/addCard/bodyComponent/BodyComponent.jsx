import React from 'react';
import {WrapperBody} from "./style";
import {useSelector} from "react-redux";
import TextAreaComponent from "./tetxareaComponent/TextAreaComponent";
import ToDoList from "./todoComponent/ToDoList";
const BodyComponent = () => {
    const addCardSwitcher = useSelector((state) => state.addCard)
    const todo = addCardSwitcher.todo
    const textarea = addCardSwitcher.textarea
    return (
        <WrapperBody>
            {todo && <div>
                    <ToDoList />
            </div>}
            {textarea && <div>
                <TextAreaComponent/>
            </div>}
        </WrapperBody>
    );
};

export default BodyComponent;