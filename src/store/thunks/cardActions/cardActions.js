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
