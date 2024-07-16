import React, {useEffect, useState} from 'react';
import {Typography, useMediaQuery} from "@mui/material";
import {useTranslation} from "react-i18next";
import LanguageComponent from "../../components/leng/LanguageComponent";
import AccordionToggleTheme from "../../components/themeToggle/AccordionToggleTheme";
import {useDispatch, useSelector} from "react-redux";
import {getPublicUser, updateUserInfo} from "../../store/thunks/auth";
import ChangePasswordComponent from "../../components/change-password/ChangePasswordComponent";
import AppLoadingButton from "../../components/loading-button/loadingButton";
import {RootGrid} from "./style";
import ChangeUserNameComponent from "../../components/change-userName/ChangeUserNameComponent";

const SettingsPage = () => {
    const {t} = useTranslation();

    const userData = useSelector(state => state.auth.user);
    const theme = useSelector(state => state.theme.themeMode);
    const language = useSelector(state => state.language.language);
    const backgroundTheme = userData.themeModeDevice;

    const dispatch = useDispatch();
    const isNonMobile = useMediaQuery('(min-width:760px)')
    const loading = useSelector((state) => state.auth.isLoading);
    const [newUserName, setNewUserName] = useState(userData.userName || '')
    console.log('userData.userName', userData.userName)
    console.log('newUserName', newUserName)

    useEffect(() => {
        if (newUserName === undefined) {
            setNewUserName(userData.userName)
        }
    }, [userData, newUserName]);
    useEffect(() => {
        dispatch(getPublicUser());
    }, [dispatch, isNonMobile]);
    // console.log('isNonMobile', isNonMobile, loading)

    // dispatch(updateUserInfo)
    function handleSubmit() {
        const updateUser = {
            "userName": newUserName === '' ? userData.userName : newUserName,
            "email": userData.email,
            "language": language,
            "themeModeDevice": theme,
            "popupForNewUser": userData.popupForNewUser,
            "avatar": userData.avatar

        }
        console.log(updateUser)
        dispatch(updateUserInfo(updateUser))
    }

    return (
        <RootGrid>
            <Typography variant='h2'> {t('Change user name')}</Typography>
            <ChangeUserNameComponent loading={loading} isNonMobile={isNonMobile} newUserName={newUserName}
                                     setNewUserName={setNewUserName}/>

            <Typography variant='h2'> {t('Language')}</Typography>
            <LanguageComponent/>

            <Typography variant='h2'>{t('Change theme')}</Typography>
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
            <Typography variant='h2'>{t('Change password')}</Typography>
            <ChangePasswordComponent isNonMobile={isNonMobile} loading={loading}/>
        </RootGrid>
    );
};

export default SettingsPage;
