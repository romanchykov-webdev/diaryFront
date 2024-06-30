import {createSlice} from "@reduxjs/toolkit";

// Проверка предпочтительной цветовой схемы пользователя
const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// console.log(isDarkTheme)
const defaultTheme = isDarkTheme ? 'dark' : 'light';

const initialState = {
    themeMode: localStorage.getItem("themeModeDiary") || defaultTheme,
}

export const toggleTheme = createSlice({
    name: 'toggleTheme',
    initialState,
    reducers: {
        toggleThemeAction(state, action) {
            state.themeMode = action.payload;
            localStorage.setItem("themeModeDiary", action.payload); // Сохранение состояния в localStorage
        }
    }
})

export const {toggleThemeAction} = toggleTheme.actions
export default toggleTheme.reducer