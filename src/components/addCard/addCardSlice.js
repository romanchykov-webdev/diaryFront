import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    todo: false,
    textarea:false,
    showSwitcher: true,
}

export const addCardSlice = createSlice({
    name: "addCard",
    initialState,
    reducers:{
        addTodoAction(state, action){
            state.todo = true;
            state.textarea = false;
            state.showSwitcher = false;
        },
        addTextAreaAction(state, action){
            state.textarea = true;
            state.todo = false;
            state.showSwitcher = false;
        },
        handlerExitAction(state, action){
            state.textarea = false;
            state.todo = false;
            state.showSwitcher = true;
        }
    }
})
export const {
    addTodoAction,
    addTextAreaAction,
    handlerExitAction,
} = addCardSlice.actions
export default addCardSlice.reducer