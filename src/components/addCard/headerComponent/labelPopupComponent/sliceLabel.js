import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    label:[]
}

export const labelSlice =createSlice({
    name:'labelSlice',
    initialState,
    reducers:{
        addRemoveLabelAction(state, action){
            const item=action.payload;
            // state.label=[...state.label,action.payload];
            if (state.label.includes(item)) {
                state.label= state.label.filter(label => label !== item);
            } else {
                state.label= [...state.label, item];
            }
        },
    }
})

export const {
    addRemoveLabelAction,
} = labelSlice.actions;
export default labelSlice.reducer;