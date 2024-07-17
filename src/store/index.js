import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slice/auth";
import sliceToggleTheme from "../components/themeToggle/sliceToggleTheme";
import languageReducer from '../locales/languageSlice'
import toggleIsVisiblePassword from "../components/eye/sliceTogglePasswordIsVisible";
import switcherFolderSlice from "../components/switcher-folder/SwitcherFolderSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        theme: sliceToggleTheme,
        language: languageReducer,
        isVisiblePassword: toggleIsVisiblePassword,
        switcherFolder: switcherFolderSlice,
    }
})


export default store;