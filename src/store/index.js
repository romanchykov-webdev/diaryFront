import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slice/auth";
import sliceToggleTheme from "../components/themeToggle/sliceToggleTheme";
import languageReducer from '../locales/languageSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        theme:sliceToggleTheme,
        language: languageReducer,
    }
})


export default store;