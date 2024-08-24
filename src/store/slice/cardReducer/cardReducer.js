import {createSlice} from '@reduxjs/toolkit';
import {
    createCard,
    getAllCards,
    getCardById, getCardIds,
    updateCard,
    updateCardOrders
} from '../../thunks/cardActions/cardActions';

const initialState = {
    cards: [],
    labels: [],
    loading: true,
    error: null,
};

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        dragAndDrop(state, action) {
            state.cards = action.payload;
        },
        addNewLabelAction(state,action){
            const newLabel = action.payload;
            state.labels.push(newLabel)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCard.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCard.fulfilled, (state, action) => {
                state.loading = false;
                state.cards.push(action.payload);
                // state.cards.unshift(action.payload); //  unshift для добавления новой карточки в начало массива
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
            })
            .addCase(updateCardOrders.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCardOrders.fulfilled, (state, action) => {
                state.loading = false;

                // Проверяем, что action.payload является массивом
                if (Array.isArray(action.payload)) {
                    action.payload.forEach((updatedCard) => {
                        const index = state.cards.findIndex(card => card.id === updatedCard.id);
                        if (index !== -1) {
                            state.cards[index].order = updatedCard.order;
                        }
                    });
                } else {
                    // Если это не массив, обрабатываем результат по-другому (например, выводим в консоль)
                    // console.error('Expected an array but got:', action.payload);
                }
            })
            .addCase(updateCardOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getCardById.pending, (state) => {
                state.loading = true;
                state.currentCard = null; // Очистка текущей карточки при новом запросе
            })
            .addCase(getCardById.fulfilled, (state, action) => {
                state.loading = false;
                state.currentCard = action.payload; // Сохранение текущей карточки
            })
            // Добавление нового case для получения идентификаторов карточек
            .addCase(getCardIds.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCardIds.fulfilled, (state, action) => {
                // debugger
                const {labels}=action.payload;
                state.loading = false;
                state.labels = labels;
            })
            .addCase(getCardIds.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            ;
    },
});
export const {
    dragAndDrop,
    addNewLabelAction,
} = cardSlice.actions;
export default cardSlice.reducer;
