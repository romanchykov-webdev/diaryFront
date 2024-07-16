import {createSlice} from "@reduxjs/toolkit";

// Проверка предпочтительной цветовой схемы пользователя
const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log('isDarkTheme', isDarkTheme)
const defaultTheme = isDarkTheme ? 'dark' : 'light';
console.log('defaultTheme', defaultTheme)
const initialState = {
    // themeMode: 'dark',
    themeMode: defaultTheme,
}

export const toggleTheme = createSlice({
    name: 'toggleTheme',
    initialState,
    reducers: {
        toggleThemeAction(state, action) {
            // debugger
            if (action.payload === undefined) {
                state.themeMode = defaultTheme;
            } else {
                state.themeMode = action.payload;
            }
            // localStorage.setItem("themeModeDiary", action.payload); // Сохранение состояния в localStorage
        }
    }
})

export const {toggleThemeAction} = toggleTheme.actions
export default toggleTheme.reducer