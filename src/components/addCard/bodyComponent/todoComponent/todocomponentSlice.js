import {v4 as uuidv4} from 'uuid';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todo: [
        {id: uuidv4(), content: '', completed: false}
    ],
    todoCompleted: [],
    textarea: '',
    isFavorite: false,
    colors: [],
    colorsSwitcher:false,
    labels: [],
    title: '',
    backgroundColorCard:''
}

export const createNewTodoSlice = createSlice({
    name: 'createNewTodo',
    initialState,
    reducers: {
        addTodoItemAction(state, action) {
            const {id} = action.payload;
            const exists = state.todo.some(item => item.id === id);

            if (!exists) {
                // Добавляем новый элемент в массив todo
                state.todo = [...state.todo, action.payload];
            } else {
                console.warn(`Element with id ${id} already exists.`);
            }

        },
        removeTodoItemAction(state, action) {
            // debugger
            const id = action.payload;
            // Проверяем, существует ли элемент с данным id
            const exists = state.todo.some(item => item.id === id);

            if (exists) {
                // Удаляем элемент с данным id
                state.todo = state.todo.filter(item => item.id !== id);
            } else {
                console.warn(`Element with id ${id} not found.`);
            }
        },
        removeTodoCompletedItemAction(state, action) {
            // debugger
            const id = action.payload;
            // Проверяем, существует ли элемент с данным id
            const exists = state.todoCompleted.some(item => item.id === id);

            if (exists) {
                // Удаляем элемент с данным id
                state.todoCompleted = state.todoCompleted.filter(item => item.id !== id);
            } else {
                console.warn(`Element with id ${id} not found.`);
            }
        },
        todoCompletedAction(state, action) {
            // debugger
            const {item} = action.payload;
            // Проверяем, существует ли элемент с данным id
            const exists = state.todoCompleted.some(i => i.id === item.id);
            if (!exists) {
                // Клонируем элемент и обновляем его состояние completed на true
                const updatedItem = {...item, completed: true};
                // Добавляем элемент в массив todoCompleted
                state.todoCompleted = [...state.todoCompleted, updatedItem];
                // Удаляем элемент из массива todo
                state.todo = state.todo.filter(i => i.id !== item.id);
            } else {
                console.warn(`Element with id ${item.id} not found.`);
            }

        },
        todoNonCompletedAction(state, action) {
            // debugger
            const {item} = action.payload;
            // Проверяем, существует ли элемент с данным id
            const exists = state.todo.some(i => i.id === item.id);
            if (!exists) {
                // Клонируем элемент и обновляем его состояние completed на true
                const updatedItem = {...item, completed: false};
                // Добавляем элемент в массив todoCompleted
                state.todo = [...state.todo, updatedItem];
                // Удаляем элемент из массива todo
                state.todoCompleted = state.todoCompleted.filter(i => i.id !== item.id)
            } else {
                console.warn(`Element with id ${item.id} not found.`);
            }
        },
        changeTextAction(state, action) {
            // debugger
            const {id, text} = action.payload;
            const exists = state.todo.some(item => item.id === id);
            if (exists) {
                // Обновляем элемент с данным id
                state.todo = state.todo.map(item =>
                    item.id === id ? {...item, content: text} : item
                );
            }
        },
        changeTextareaAction(state,action){
            state.textarea = action.payload;
        },
        dropItemAction(state, action) {
            // debugger
            state.todo = action.payload;
        },
        titleTextAction(state, action) {
            state.title = action.payload;
        },
        labelAction(state, action) {

        },
        isFavoriteAction(state, action) {
            state.isFavorite = !state.isFavorite;
        },
        colorsAction(state, action) {
            state.colors = action.payload;
            state.colorsSwitcher = !state.colorsSwitcher;
        },
        addNewColorAction(state,action){
            state.colors=[...state.colors,action.payload]
        },
        removeColorAction(state,action){
            // debugger
            state.colors=state.colors.filter(item => item !== action.payload);
            state.backgroundColorCard=''
        },
        backgroundColorCardAction(state,action){
            state.backgroundColorCard=action.payload
        },
        exitAction(state, action) {
            state.todo = [{id: uuidv4(), content: '', completed: false}]
            state.todoCompleted = []
            state.textarea = ''
            state.isFavorite = false
            state.colors = []
            state.colorsSwitcher=false
            state.labels = []
            state.title = ''
            state.backgroundColorCard=''
        },

    }
})

export const {
    addTodoItemAction,
    removeTodoItemAction,
    removeTodoCompletedItemAction,
    todoCompletedAction,
    todoNonCompletedAction,
    changeTextAction,
    changeTextareaAction,
    dropItemAction,
    titleTextAction,
    colorsAction,
    addNewColorAction,
    removeColorAction,
    backgroundColorCardAction,
    isFavoriteAction,
    exitAction
} = createNewTodoSlice.actions
export default createNewTodoSlice.reducer