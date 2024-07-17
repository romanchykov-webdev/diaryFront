import React, {useEffect, useState} from 'react';
import {Typography, useMediaQuery} from "@mui/material";
import {useTranslation} from "react-i18next";
import LanguageComponent from "../../components/leng/LanguageComponent";
import AccordionToggleTheme from "../../components/themeToggle/AccordionToggleTheme";
import {useDispatch, useSelector} from "react-redux";
import {getPublicUser, updateUserInfo} from "../../store/thunks/auth";
import ChangePasswordComponent from "../../components/change-password/ChangePasswordComponent";
import AppLoadingButton from "../../components/loading-button/loadingButton";
import {RootGrid, WrapperEmail} from "./style";
import ChangeUserNameComponent from "../../components/change-userName/ChangeUserNameComponent";
import DeleteUserAccountComponent from "../../components/delete-account/DeleteUserAccountComponent";

const SettingsPage = () => {
    const {t} = useTranslation();

    const userData = useSelector(state => state.auth?.user);
    const theme = useSelector(state => state.theme.themeMode);
    const language = useSelector(state => state.language.language);
    const backgroundTheme = userData.themeModeDevice;

    const dispatch = useDispatch();
    const isNonMobile = useMediaQuery('(min-width:760px)')
    const loading = useSelector((state) => state.auth.isLoading);
    const [newUserName, setNewUserName] = useState(userData.userName)
    // console.log('userData.userName', userData.userName)
    // console.log('newUserName', newUserName)

    useEffect(() => {
        // console.log(newUserName)
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
        dispatch(getPublicUser());
    }

    return (
        <RootGrid>
            {/*Your email*/}
            <WrapperEmail sx={{display: 'flex'}}>
                <Typography variant='h6'> {t('Your email')}:</Typography>
                <Typography sx={{ml: 1}} variant='h6'> {userData.email} </Typography>
            </WrapperEmail>

            {/*Change user name*/}
            <Typography variant='h2'> {t('Change user name')}</Typography>
            <ChangeUserNameComponent loading={loading} isNonMobile={isNonMobile} newUserName={newUserName}
                                     setNewUserName={setNewUserName}/>

            {/*Language*/}
            <Typography variant='h2'> {t('Language')}</Typography>
            <LanguageComponent/>

            {/*Change theme*/}
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

            {/*Change password'*/}
            <Typography variant='h2'>{t('Change password')}</Typography>
            <ChangePasswordComponent isNonMobile={isNonMobile} loading={loading}/>

            {/*delete account*/}
            <Typography sx={{color: 'red !important', mt: 2}} variant='h2'>{t('Account')}</Typography>
            <DeleteUserAccountComponent/>


        </RootGrid>
    );
};

export default SettingsPage;
