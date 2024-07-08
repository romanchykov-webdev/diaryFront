import React from 'react';
import {TextField, Typography} from "@mui/material";
import AppLoadingButton from "../../../components/loading-button/loadingButton";
import {IncitingText} from "./style";

import LanguageComponent from "../../../components/leng/LanguageComponent";
import {useTranslation} from "react-i18next";
// import {useSelector} from "react-redux";

const LoginPage = (props) => {
    const {
        loading,
        navigate,
        register,
        errors
    } = props;
    // translate
    const {t} = useTranslation();
    // const language = useSelector((state) => state.language.language);
    // translate

    return (
        <>
            <Typography variant="h2" textAlign='center' fontSize={32}>
                {t('Authorization')}
            </Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>
                {t('Enter your login and Password')}
            </Typography>

            <TextField
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
                fullWidth={true} margin='normal' label={t('Email')} variant="outlined"
                {...register('email')}
                placeholder={t('Enter your Email')}/>
            <TextField
                error={!!errors.password}
                helperText={errors.password ? `${errors.password.message}` : ''}
                fullWidth={true} type='password' margin='normal' label={t('Password')} variant="outlined"
                {...register('password')}
                placeholder={t('Enter your Password')}/>
            <AppLoadingButton
                loading={loading}
                type="submit"
                sx={{
                    marginTop: 2,
                    width: '60%',
                    marginBottom: 2
                }} variant="contained">{t('Enter')}
            </AppLoadingButton>
            <Typography variant="body1" fontFamily='Poppins' sx={{mb: 4, mt: 2}}>
                {t('Don\'t have an account?')}
                <IncitingText
                    component="span"
                    onClick={() => navigate('/register')}
                >{t('Registration')}</IncitingText>
            </Typography>
            <LanguageComponent/>



        </>
    );
};

export default LoginPage;
