import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slice/auth";
import sliceToggleTheme from "../components/themeToggle/sliceToggleTheme";
import languageReducer from '../locales/languageSlice'
import {togglePopupForNewUserReducer} from "../components/popupLesson/sliceLeson";
import toggleIsVisiblePassword from "../components/eye/sliceTogglePasswordIsVisible";

const store = configureStore({
    reducer: {
        auth: authSlice,
        theme: sliceToggleTheme,
        language: languageReducer,
        isVisiblePassword: toggleIsVisiblePassword
        // togglePopupForNewUserAction: togglePopupForNewUserReducer,
    }
})


export default store;