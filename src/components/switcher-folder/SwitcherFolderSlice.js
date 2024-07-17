import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    switcherFolder: 'tile',
}

export const switcherFolderSlice = createSlice({
    name: 'switcherFolderSlice',
    initialState,
    reducers:{
        switcherFolderAction(state, action){
            state.switcherFolder = action.payload;
        }
    }
})
export const {switcherFolderAction} = switcherFolderSlice.actions

export default switcherFolderSlice.reducer

