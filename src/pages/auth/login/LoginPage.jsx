import React, {useEffect} from 'react';
import {
    Box,
    Button,
    TextField,
    Typography
} from "@mui/material";
import {useTranslation} from 'react-i18next';
import ThemeToggleComponent from "../../../components/themeToggle/ThemeToggleComponent";
import AppLoadingButton from "../../../components/loading-button/loadingButton";
import s from './style.module.css'
import {ReactSVG} from "react-svg";
import iconEye from '../../../assets/image/auth/eye.svg'
import {useDispatch, useSelector} from "react-redux";
import {toggleVisitable} from "../authSlice";
import {isVisible} from "@testing-library/user-event/dist/utils";

const LoginPage = () => {
    const dispatch=useDispatch()
    const isVisible=useSelector(state => state.toggleVisitablePassword.isVisible)
    const loading = false
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [leng, setLeng] = React.useState('');

    const handleChange = (event) => {
        setLeng(event.target.value);
    };

    function handleChangeIsVisiblePassword() {
        dispatch(toggleVisitable(!isVisible))
    }

    useEffect(() => {

    }, [isVisible]);

    return (
        <>
            <Typography variant="h2" color="textSecondary" className={s.titleText}>
                {t('Authorization')}
            </Typography>
            <Typography variant='body1' className={s.titleDesc}>
                {t('Enter your login and Password')}
            </Typography>
            <TextField className={s.myInput}
                       type={"email"}
                       label={t('Enter your Email')} variant="outlined"
                       placeholder={t('Enter your Email')}

            />
            <Box className={s.wrapPassword}>
            <TextField className={s.myInput}
                       type={isVisible ? 'text' : 'password'}
                       label={t('Enter your Password')} variant="outlined"
                       placeholder={t('Enter your Password')}
            />
                <span className={s.iconEye}
                onClick={handleChangeIsVisiblePassword}>
                    <ReactSVG src={iconEye}  />
                    {
                        isVisible ? <span></span> : null
                    }

                </span>
            </Box>
            <Box className={s.wrapThemeSubmitLeng}>
                <Box className={s.blockButton}>
                    <AppLoadingButton
                        loading={loading}
                        type="submit"
                        sx={{
                            marginTop: 2,
                            width: '100%',
                            marginBottom: 2
                        }} variant="contained"
                    >
                        {t('To come in')}
                    </AppLoadingButton>
                </Box>
                <Box className={s.blockLenTheme}>
               <Box>
                   <Button onClick={() => changeLanguage('en')}>En</Button>
                   <Button onClick={() => changeLanguage('ru')}>Rus</Button>
               </Box>
                    <ThemeToggleComponent/>
                </Box>
            </Box>

        </>
    );
};

export default LoginPage;