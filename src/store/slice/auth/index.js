import {createSlice} from "@reduxjs/toolkit";
import {getPublicUser, LoginUser, RegisterUser, updateUserInfo} from "../../thunks/auth";

const initialState = {
    // user: {
    //     token: '',
    //     user: {}
    // },
    user:{},
    token: null,  // Добавляем токен в состояние
    isLogged: false,
    isLoading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading(state, action) {
            // debugger
            state.isLoading = action.payload;
        },
        setToken(state, action) {  // Добавляем редьюсер для установки токена
            state.token = action.payload;
        },
        removeColorUser(state, action) {
            // debugger
            state.user.colors= state.user.colors.filter(item=>item !== action.payload);
        },
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
            state.token = null;  // Очищаем токен при ошибке
        })
        // registration ok
        builder.addCase(RegisterUser.fulfilled, (state, action) => {
            // debugger
            state.user = action.payload.user;
            state.token = action.payload.token;  // Устанавливаем токен
            state.isLogged = true;
            // state.isLoading = false
        })
        // отклоненный rejected ошибка при register
        builder.addCase(RegisterUser.rejected, (state, action) => {
            state.isLogged = false
            state.token = null;  // Очищаем токен при ошибке
            state.isLoading = false
        })

        // Get Public User Info
        builder.addCase(getPublicUser.pending, (state) => {

            state.isLogged = false;
            state.isLoading = true;
        });
        builder.addCase(getPublicUser.fulfilled, (state, action) => {
            state.user = action.payload;
            // state.isLoading = false;
        })
        builder.addCase(getPublicUser.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });

        // updateUserInfo pending
        builder.addCase(updateUserInfo.pending, (state) => {
            state.isLoading = true;
        });
        // updateUserInfo fulfilled
        builder.addCase(updateUserInfo.fulfilled, (state, action) => {
            state.user = action.payload;
            // state.isLoading = false;
            setTimeout(() => {
                // console.log('setTimeout')
                setLoading(false)
            }, 2000)
        });
        // updateUserInfo rejected
        builder.addCase(updateUserInfo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }

})
export const {
    setLoading,
    setToken,
    removeColorUser
} = authSlice.actions;
export default authSlice.reducer
