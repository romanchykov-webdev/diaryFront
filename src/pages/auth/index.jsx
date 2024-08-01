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

    const loading = useSelector((state) => state.auth.isLoading);

    const language = useSelector((state) => state.language.language);
    console.log('language',language)
    const themeModeDevice = useSelector((state) => state.theme.themeMode);

    const handleSubmitForm = async (data) => {
        console.log('Form data:', data);
        if (location.pathname === '/login') {
            try {
                await dispatch(LoginUser(data));
                // navigate('/'); // Navigate to homepage if login is successful
                await dispatch(LoginUser(data));
                setTimeout(() => {
                    navigate('/'); // Navigate to homepage if login is successful
                }, 2000); // Задержка 3 секунды
            } catch (e) {
                console.error('Login error:', e);
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
                        avatar: '',
                        switcherFolder:'tile',
                        colors:["#fff","#faafa8","#f39f76","#fff8b8","#e2f6d3","#b4ddd3","#efeff1","#aeccdc","#d3bfdb","#f6e2dd","#e9e3d4","#b5a582"]
                    };

                    await dispatch(RegisterUser(userData));
                    // console.log('userData',userData)
                    // navigate('/');
                    setTimeout(() => {
                        navigate('/'); // Navigate to homepage if login is successful
                    }, 2000); // Задержка 3 секунды
                } catch (error) {
                    console.error('Registration error:', error);
                    return error;
                }
            } else {
                console.error('Passwords do not match');
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
