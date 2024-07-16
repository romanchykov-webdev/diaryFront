import React, {useEffect} from 'react';
import {Box, Button, useMediaQuery} from "@mui/material";
import {useTranslation} from "react-i18next";
import LanguageComponent from "../../components/leng/LanguageComponent";
import AccordionToggleTheme from "../../components/themeToggle/AccordionToggleTheme";
import {useDispatch, useSelector} from "react-redux";
import {getPublicUser, updateUserInfo} from "../../store/thunks/auth";
import ChangePasswordComponent from "../../components/change-password/ChangePasswordComponent";
import AppLoadingButton from "../../components/loading-button/loadingButton";
import {RootGrid} from "./style";

const SettingsPage = () => {
    const {t} = useTranslation();

    const userData = useSelector(state => state.auth?.user);
    const theme = useSelector(state => state.theme.themeMode);
    const language = useSelector(state => state.language.language);
    const backgroundTheme = userData.themeModeDevice;

    const dispatch = useDispatch();
    const isNonMobile = useMediaQuery('(min-width:760px)')
    const loading = useSelector((state) => state.auth.isLoading);

    useEffect(() => {
        dispatch(getPublicUser());
    }, [dispatch, isNonMobile]);
    console.log('isNonMobile', isNonMobile, loading)

    // dispatch(updateUserInfo)
    function handleSubmit() {
        const updateUser = {
            "userName": userData.userName,
            "email": userData.email,
            "language": userData.language,
            "themeModeDevice": theme,
            "popupForNewUser": language,
            "avatar": userData.avatar

        }
        console.log(updateUser)
        dispatch(updateUserInfo(updateUser))
    }

    return (
        <RootGrid>
            <h2>{t('Language')}</h2>
            <LanguageComponent/>
            <h2>{t('Change theme')}</h2>
            <AccordionToggleTheme backgroundTheme={backgroundTheme}/>
            <AppLoadingButton
                onClick={handleSubmit}
                loading={loading}
                type="submit"
                sx={{
                    marginTop: 2,
                    alignSelf: 'center',
                    width: '60%',
                    marginBottom: 2
                }} variant="contained">{t('Save settings')}
            </AppLoadingButton>
            <hr style={{margin: '20px 0'}}/>
            <h2>{t('Change password')}</h2>
            <ChangePasswordComponent isNonMobile={isNonMobile}/>
        </RootGrid>
    );
};

export default SettingsPage;
