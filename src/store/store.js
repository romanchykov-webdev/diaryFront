// store/index.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toggleThemeReducer from '../components/themeToggle/sliceToggleTheme';
import toggleVisitable from "../pages/auth/authSlice";

const rootReducer = combineReducers({
    theme: toggleThemeReducer,
    toggleVisitablePassword:toggleVisitable,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
