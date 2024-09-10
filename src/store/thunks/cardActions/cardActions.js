import { createAsyncThunk } from '@reduxjs/toolkit';
import {instanceAuth} from "../../../utils/axios";

// Действие для создания карточки
export const createCard = createAsyncThunk(
    'cards/create',
    async (cardData, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.post('/cards', cardData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Действие для получения всех карточек
export const getAllCards = createAsyncThunk(
    'cards/getAllCards',
    async (_, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.get('/cards');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Действие для обновления карточки
export const updateCard = createAsyncThunk(
    'cards/update',
    async ({ cardId, cardData }, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.patch(`cards/${cardId}`, cardData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Действие для получения 10  карточек с пагинацией
// export const getPaginatedCards = createAsyncThunk(
//     'cards/getPaginatedCards',
//     async ({ limit = 10, offset = 0 }, { rejectWithValue }) => {
//         try {
//             console.log('Fetching paginated cards with limit and offset:', { limit, offset });
//             const response = await instanceAuth.get(`/cards?limit=${limit}&offset=${offset}`);
//             return response.data;
//         } catch (error) {
//             console.error('Error fetching paginated cards:', error);
//             return rejectWithValue(error.response.data);
//         }
//     }
// );


// update cards order

/// Функция для обновления порядка карточек
const updateCardOrderApi = async (cards) => {
    const response = await instanceAuth.patch('cards/update-order', { orders: cards });
    return response.data;
};

// Действие для обновления порядка карточек
export const updateCardOrders = createAsyncThunk(
    'cards/updateCardOrders',
    async (updatedCards, { rejectWithValue }) => {
        try {
            // debugger
            const response = await updateCardOrderApi(updatedCards);
            return response;
        } catch (error) {
            console.error('Error updating card orders:', error); // Добавлено для отладки
            return rejectWithValue(error.response?.data || 'Error updating card orders');
        }
    }
);

// Экшен для получения одной карточки по id
export const getCardById = createAsyncThunk(
    'cards/getCardById',
    async (cardId, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.get(`/cards/${cardId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

// Действие для получения идентификаторов карточек пользователя
export const getCardIds = createAsyncThunk(
    'cards/getCardIds',
    async (_, { rejectWithValue }) => {
        try {
            // debugger
            const response = await instanceAuth.get('/cards/card-ids'); // Не передаем userId
            return response.data; // Ожидаем, что это массив идентификаторов
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Действие для удаления карточки
export const deleteCard = createAsyncThunk(
    'cards/deleteСard',
    async (cardId, { rejectWithValue }) => {
        try {
            console.log('Attempting to delete card with ID:', cardId);
            const response = await instanceAuth.delete(`/cards/${cardId}`);
            console.log('Card successfully deleted:', response.data);
            return cardId; // Возвращаем ID удаленной карточки
        } catch (error) {
            console.error('Error deleting card:', error.response ? error.response.data : error.message);
            return rejectWithValue(error.response ? error.response.data : 'Unknown error');
        }
    }
);



// removeLabelsFromCards
// export const removeLabelsFromCards = createAsyncThunk(
//     'cards/removeLabelsFromCards',
//     async (labels, { rejectWithValue }) => {
//         try {
//             const response = await instanceAuth.post('/cards/remove-labels', { labels });
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.response.data);
//         }
//     }
// );
export const removeLabelsFromCards = createAsyncThunk(
    'cards/removeLabelsFromCards',
    async (labels, { rejectWithValue }) => {
        try {
            const response = await instanceAuth.post('/cards/remove-labels', { labels });
            return response.data; // Верните обновленные карточки
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


