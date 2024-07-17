import {createSlice} from "@reduxjs/toolkit";
import {getPublicUser, LoginUser, RegisterUser, updateUserInfo} from "../../thunks/auth";

const initialState = {
    user: {
        token: '',
        user: {}
    },
    isLogged: false,
    isLoading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //в ожидании  pending
        builder.addCase(LoginUser.pending, (state, action) => {
            state.isLogged = false
            state.isLoading = true
        })

        //выполнено fulfilled
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            // debugger
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLogged = true
            state.isLoading = false
        })
        //отклоненный rejected ошибка при входе
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })
        // registration -----------------------------
        // registration pending
        builder.addCase(RegisterUser.pending, (state, action) => {
            state.isLogged = false
            state.isLoading = true
        })
        // registration ok
        builder.addCase(RegisterUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        // отклоненный rejected ошибка при register
        builder.addCase(RegisterUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })
        // getPublicUser get public user info
        builder.addCase(getPublicUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        // updateUserInfo pending
        builder.addCase(updateUserInfo.pending, (state) => {
            state.isLoading = true;
        });
        // updateUserInfo fulfilled
        builder.addCase(updateUserInfo.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        });
        // updateUserInfo rejected
        builder.addCase(updateUserInfo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }

})

export default authSlice.reducer
