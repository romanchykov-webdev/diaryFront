import React from 'react';
import {WrapperBody} from "./style";
import {useSelector} from "react-redux";
import TextAreaComponent from "./tetxareaComponent/TextAreaComponent";
import ToDoList from "./todoComponent/ToDoList";
import LabelsComponent from "./labelsComponent/LabelsComponent";

const BodyComponent = () => {

    const labelsCart=useSelector((state)=>state.createNewTodo.labels)

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

            {
                labelsCart && <LabelsComponent labelsCart={labelsCart}/>
            }
        </WrapperBody>
    );
};

export default BodyComponent;