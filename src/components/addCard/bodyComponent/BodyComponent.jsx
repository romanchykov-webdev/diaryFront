import React from 'react';
import {WrapperBody} from "./style";
import {useSelector} from "react-redux";
import TextAreaComponent from "./tetxareaComponent/TextAreaComponent";
// import TodoComponent from "./todoComponent/TodoComponent";
import ToDoList from "./todoComponent/ToDoList";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
const BodyComponent = () => {
    const addCardSwitcher = useSelector((state) => state.addCard)
    const todo = addCardSwitcher.todo
    const textarea = addCardSwitcher.textarea
    // const showSwitcher = addCardSwitcher.showSwitcher
    return (
        <WrapperBody>
            {todo && <div>
                <DndProvider backend={HTML5Backend}>
                    <ToDoList />
                </DndProvider>
            </div>}
            {textarea && <div>
                <TextAreaComponent/>

            </div>}
        </WrapperBody>
    );
};

export default BodyComponent;