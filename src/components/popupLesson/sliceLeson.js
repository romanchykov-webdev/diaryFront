import {createSlice} from "@reduxjs/toolkit";
import store from "../../store";


const initialState = {
    popupForNewUser:true
}

export const togglePopupForNewUserReducer = createSlice({
    name: "popupForNewUser",
    initialState,
    reducers:{
        togglePopupForNewUserAction(state, action){
            state.popupForNewUser = !state.popupForNewUser;
        }
    }
})

export const {togglePopupForNewUserAction} = togglePopupForNewUserReducer.actions
export default togglePopupForNewUserReducer.reducer