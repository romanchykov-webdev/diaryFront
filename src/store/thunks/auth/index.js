import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance, instanceAuth} from "../../../utils/axios";
import {setLoading} from "../../slice/auth";

//thunk for logIn
export const LoginUser = createAsyncThunk(
    'auth/login',
    async (data, {dispatch, rejectWithValue}) => {
        dispatch(setLoading(true));
        try {
            const user = await instance.post('auth/login', data)
            console.log(user)
            if (
                user.data.status === 400 ||
                user.data.status === 401 ||
                user.data.status === 500
            ) return

            //session storage
            sessionStorage.setItem("token", user.data.token)
            sessionStorage.setItem("userName", user.data.user.userName)
            //session storage end
            //localStorage
            // localStorage.setItem("token", user.data.token)
            // localStorage.setItem("firstName", user.data.user.firstName)
            //localStorage end
            // console.log('sessionStorage.setItem(token ) LoginUser', sessionStorage.getItem("token"))
            return user.data

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        } finally {
            setTimeout(() => {
                // console.log('setTimeout')
                dispatch(setLoading(false));
            }, 2000)
        }
    }
)
//thunk for registration
export const RegisterUser = createAsyncThunk(
    'auth/register',
    async (data, {dispatch, rejectWithValue}) => {
        dispatch(setLoading(true));
        try {
            const user = await instance.post('auth/register', data)
            debugger
            //session storage
            sessionStorage.setItem("token", user.data.token)
            sessionStorage.setItem("firstName", user.data.user.firstName)

            //session storage end
            //localStorage
            // localStorage.setItem("token", user.data.token)
            // localStorage.setItem("firstName", user.data.user.firstName)
            //localStorage end

            return user.data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
        finally {
            setTimeout(() => {
                // console.log('setTimeout')
                dispatch(setLoading(false));
            }, 2000)
        }
    }
)


//thunk for get-public-user-info
export const getPublicUser = createAsyncThunk(
    'auth/get-public-user-info',
    async (_, {dispatch, rejectWithValue}) => {
        dispatch(setLoading(true));
        try {
            // debugger
            const user = await instanceAuth.get('auth/get-public-user-info')
            // console.log('sessionStorage.setItem(token)', sessionStorage.getItem("token"))
            return user.data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
        finally {
            setTimeout(() => {
                // console.log('setTimeout')
                dispatch(setLoading(false));
            }, 2000)
        }
    },
)

//thunk for updateUserInfo
export const updateUserInfo = createAsyncThunk(
    'users/update',
    // 'auth/update',

    async (data, {dispatch, rejectWithValue}) => {
        // dispatch(setLoading(true));
        try {
            const user = await instanceAuth.patch('/auth/update', data)
            console.log('user', user.data)
            return user.data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
        // finally {
        //     setTimeout(() => {
        //         // console.log('setTimeout')
        //         dispatch(setLoading(false));
        //     }, 2000)
        // }
    },
)

//thunk for update password
export const updateUserPassword = createAsyncThunk(
    'users/change-password',
    async (data, {rejectWithValue}) => {
        try {
            return instanceAuth.patch('users/change-password', data)

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)
//thunk for deleteUser
export const deleteUser = createAsyncThunk(
    'users/delete-user',
    async (_, {rejectWithValue}) => {
        try {
            return instanceAuth.delete('users')
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)