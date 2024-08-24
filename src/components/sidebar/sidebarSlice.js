import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    activeLabel: 'allCards'
}

export const sidebarSlice = createSlice({
    name: 'sidebarSlice',
    initialState,
    reducers: {
        addLabelAction(state, action) {
            state.activeLabel = action.payload;
        }
    }
})
export const {
    addLabelAction,
} = sidebarSlice.actions
export default sidebarSlice.reducer