import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isVisible: true,
}

export const toggleIsVisiblePassword = createSlice({
    name: 'toggleIsVisiblePassword',
    initialState,
    reducers: {
        isVisiblePasswordAction(state, action) {
            state.isVisible = action.payload;
        }
    }
})

export const {isVisiblePasswordAction} = toggleIsVisiblePassword.actions

export default toggleIsVisiblePassword.reducer