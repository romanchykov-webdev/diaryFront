import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data:''
}
export const dataTimeSlice = createSlice({
    name: 'timeData',
    initialState,
    reducers:{
        getTimeDataAction(state, action){
            state.data = action.payload
        }
    }
})

export const {
    getTimeDataAction
} = dataTimeSlice.actions
export default dataTimeSlice.reducer