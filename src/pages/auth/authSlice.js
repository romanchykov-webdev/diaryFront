import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isVisible: false
}
export const visiblePasswordSlice = createSlice({
    name: 'visiblePassword',
    initialState,
    reducers: {
        toggleVisitable: (state, action) => {
            state.isVisible = action.payload;
        }
    }
})
export const {toggleVisitable} = visiblePasswordSlice.actions
export default visiblePasswordSlice.reducer