import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, TextField, Typography} from "@mui/material";
import AppLoadingButton from "../../../components/loading-button/loadingButton";
import {IncitingText} from "./style";
import ThemeToggleComponent from "../../../components/themeToggle/ThemeToggleComponent";
import LanguageComponent from "../../../components/leng/LanguageComponent";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const RegisterPage = (props) => {
    const {
        loading,
        navigate,
        register,
        errors
    } = props;
    const backgroundTheme = useSelector((state) => state.theme.themeMode)
    // translate
    const {t} = useTranslation();
    // const language = useSelector((state) => state.language.language);
    // translate
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                {t('Registration')}
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>
                Enter registration details
            </Typography>

            {/*<TextField*/}
            {/*    fullWidth={true}*/}
            {/*    margin='normal'*/}
            {/*    label="Имя"*/}
            {/*    variant="outlined"*/}
            {/*    error={!!errors.firstName}*/}
            {/*    {...register('firstName')}*/}
            {/*    placeholder='Введите ваше имя'*/}
            {/*    helperText={errors.firstName ? errors.firstName.message : ''}*/}
            {/*/>*/}
            <TextField
                fullWidth={true}
                margin='normal'
                label="Username"
                variant="outlined"
                error={!!errors.userName}
                {...register('userName')}
                placeholder={t('Enter your userName')}
                helperText={errors.userName ? errors.userName.message : ''}
            />
            <TextField
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                error={!!errors.email}
                {...register('email')}
                placeholder={t('Enter your Email')}
                helperText={errors.email ? errors.email.message : ''}
            />
            <TextField
                fullWidth={true}
                type='password'
                margin='normal'
                label="Password"
                variant="outlined"
                error={!!errors.password}
                {...register('password')}
                placeholder={t('Enter your Password')}
                helperText={errors.password ? errors.password.message : ''}
            />
            <TextField
                fullWidth={true}
                type='password'
                margin='normal'
                label="Password"
                variant="outlined"
                error={!!errors.confirmPassword}
                {...register('confirmPassword')}
                placeholder={t('Repeat your Password')}
                helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
            />
            <Accordion sx={{
                backgroundColor: backgroundTheme === 'tomato' ? '#ff6347' : {},
                width: '100%',
                mb: 2,
                mt: 2
            }}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>{t("Select a theme for the application")}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box item>
                            <h4>{t('Active application theme')} : <b>{backgroundTheme}</b> </h4>
                        </Box>

                        <ThemeToggleComponent item/>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <LanguageComponent/>

            <AppLoadingButton
                loading={loading}
                sx={{
                    marginTop: 2,
                    width: '60%',
                    marginBottom: 2
                }}
                type="submit"
                variant="contained">
                {t('Registration')}
            </AppLoadingButton>
            <Typography variant="body1" fontFamily='Poppins'
                        sx={{
                            fontFamily: 'Poppins'
                        }}>
                {t('Do you have an account?')}
                <IncitingText
                    component="span"
                    onClick={() => navigate('/login')}
                >{t('Authorization')}</IncitingText>
            </Typography>


        </>
    );
};

export default RegisterPage;
