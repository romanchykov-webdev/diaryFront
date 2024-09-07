import {createSlice} from "@reduxjs/toolkit";


const initialState={
    searchCards: null
}

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        searchCardsActions: (state, action) => {
            // debugger
            state.searchCards = action.payload;
        },
    }
})

export const {searchCardsActions} = searchSlice.actions;
export default searchSlice.reducer