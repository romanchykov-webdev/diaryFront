import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    fullscreen: false,
    card: null,
}

const fullscreenSlice = createSlice({
    name: 'fullscreen',
    initialState,
    reducers: {
        fullscreenToggleAction(state, action) {
            // debugger
            if (state.fullscreen === false) {
                state.fullscreen = true
                state.card = action.payload;
            } else {
                state.fullscreen = false
                state.card = null
            }
        },
        changeTitleAction(state, action) {
            state.card.title = action.payload;
        },
        toggleCompletedAction(state, action) {
            // debugger
            const itemCompleted = action.payload

            // Добавляем элемент в массив `todoCompleted`
            state.card.todoCompleted.push(itemCompleted);
            // Удаляем элемент из массива todo_
            state.card.todo = state.card.todo.filter(item => item.id !== itemCompleted.id);

        },
        toggleNoCompletedAction(state, action) {
            // debugger
            const itemCompleted = action.payload
            // Добавляем элемент в массив
            state.card.todo.push(itemCompleted)
            // Удаляем элемент из массива
            state.card.todoCompleted = state.card.todoCompleted.filter(item => item.id !== itemCompleted.id);


        }, removeItemAction(state, action) {
            // debugger
            const removeItem = action.payload
            if (removeItem.completed === false) {
                // Удаляем элемент из массива `todo`
                state.card.todo = state.card.todo.filter(item => item.id !== removeItem.id);
            } else {
                state.card.todoCompleted = state.card.todoCompleted.filter(item => item.id !== removeItem.id)
            }
        },
        addNewTodoAction(state, action) {

            const newItem = action.payload
            state.card.todo.push(newItem)
        },
        changeTextItemTodoAction(state, action) {
            // debugger
            const {id, text} = action.payload;

            state.card.todo = state.card.todo.filter(item => item.id === id ? item.content = text : item);
        },
        toggleIsFavoriteAction(state) {
            state.card.isFavorite = !state.card.isFavorite
        },
        changeTextTextareaAction(state, action) {
            // debugger
            state.card.textarea = action.payload;
        },
        changeBackgroundCardAction(state, action) {
            state.card.backgroundColorCard = action.payload;

        },

        changeColorCardAction(state, action) {
            state.card.colors = action.payload;
            state.card.backgroundColorCard = action.payload;

        },
        LabelAddRemoveLabelAction(state, action) {
            const item = action.payload;

            if (state.card.labels.includes(item)) {
                // Удаление метки, если она уже существует
                state.card.labels = state.card.labels.filter(i => i !== item);
            } else {
                // Добавление метки, если её нет
                state.card.labels.push(item);
            }

        },
        handleDragEndAction(state, action) {
            const items = action.payload;
            state.card.todo = items
        }
    }
})
export const {
    fullscreenToggleAction,
    changeTitleAction,
    toggleCompletedAction,
    toggleNoCompletedAction,
    removeItemAction,
    addNewTodoAction,
    changeTextItemTodoAction,
    toggleIsFavoriteAction,
    changeTextTextareaAction,
    changeBackgroundCardAction,
    changeColorCardAction,
    LabelAddRemoveLabelAction,
    handleDragEndAction,
} = fullscreenSlice.actions

export default fullscreenSlice.reducer;
