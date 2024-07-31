import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slice/auth";
import sliceToggleTheme from "../components/themeToggle/sliceToggleTheme";
import languageReducer from '../locales/languageSlice'
import toggleIsVisiblePassword from "../components/eye/sliceTogglePasswordIsVisible";
import switcherFolderSlice from "../components/switcher-folder/SwitcherFolderSlice";
import addCardSlice from "../components/addCard/addCardSlice";
import createNewTodoSlice from "../components/addCard/bodyComponent/todoComponent/todocomponentSlice";
import labelSlice from "../components/addCard/headerComponent/labelPopupComponent/sliceLabel";
import dataTimeSlice from "../components/addCard/timeDataComponent/sliceTimeData";
import cardSlice from "./slice/cardReducer/cardReducer";

const store = configureStore({
    reducer: {
        auth: authSlice,
        cards:cardSlice,
        theme: sliceToggleTheme,
        language: languageReducer,
        isVisiblePassword: toggleIsVisiblePassword,
        switcherFolder: switcherFolderSlice,
        addCard:addCardSlice,
        createNewTodo:createNewTodoSlice,
        labelSlice:labelSlice,
        dataTime:dataTimeSlice
    }
})


export default store;