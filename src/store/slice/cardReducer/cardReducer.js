import { createSlice } from '@reduxjs/toolkit';
import { createCard, getAllCards,updateCard } from '../../thunks/cardActions/cardActions';

const initialState = {
    cards: [],
    loading: false,
    error: null,
};

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createCard.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCard.fulfilled, (state, action) => {
                state.loading = false;
                state.cards.push(action.payload);
            })
            .addCase(createCard.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getAllCards.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllCards.fulfilled, (state, action) => {
                state.loading = false;
                state.cards = action.payload;
            })
            .addCase(getAllCards.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateCard.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCard.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.cards.findIndex(card => card.id === action.payload.id);
                if (index !== -1) {
                    state.cards[index] = action.payload;
                }
            })
            .addCase(updateCard.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default cardSlice.reducer;
