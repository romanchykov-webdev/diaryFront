import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import {Box} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginSchema, RegisterSchema} from "../../utils/yup";
import {LoginUser, RegisterUser} from "../../store/thunks/auth";
import {useDispatch, useSelector} from "react-redux";
import {AppErrors} from '../../common/errors';
import {StyledRoot, StyledForm} from "./style";

const AuthRootComponents = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm({
        resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema),
    });

    const loading = useSelector((state) => state.auth.loading);

    const language = useSelector((state) => state.language.language);
    const themeModeDevice = useSelector((state) => state.theme.themeMode);

    const handleSubmitForm = async (data) => {
        if (location.pathname === '/login') {
            try {
                await dispatch(LoginUser(data));
                navigate('/'); // Navigate to homepage if login is successful
            } catch (e) {
                return new Error(AppErrors.ErrorPassword);
            }
        } else if (location.pathname === '/register') {
            console.log('data', data)
            if (data.password === data.confirmPassword) {
                try {
                    const userData = {
                        userName: data.userName,
                        email: data.email,
                        password: data.password,
                        language: language,
                        popupForNewUser: true,
                        themeModeDevice: themeModeDevice,
                        avatar: ''
                    };
                    await dispatch(RegisterUser(userData));
                    // console.log('userData',userData)
                    navigate('/');
                } catch (error) {
                    return error;
                }
            } else {
                return new Error(AppErrors.PasswordDoNoMatch);
            }
        }
    };

    return (
        <StyledRoot>
            <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow='-3px -2px 20px #202020'
                >
                    {location.pathname === '/login'
                        ? <LoginPage register={register} errors={errors} loading={loading} navigate={navigate}/>
                        : location.pathname === '/register'
                            ? <RegisterPage register={register} errors={errors} loading={loading} navigate={navigate}/>
                            : null}
                </Box>
            </StyledForm>
        </StyledRoot>
    );
};

export default AuthRootComponents;
