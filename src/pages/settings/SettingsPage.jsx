import React, {useEffect} from 'react';
import {Box, Button} from "@mui/material";
import {useTranslation} from "react-i18next";
import LanguageComponent from "../../components/leng/LanguageComponent";
import AccordionToggleTheme from "../../components/themeToggle/AccordionToggleTheme";
import {useDispatch, useSelector} from "react-redux";
import {getPublicUser, updateUserInfo} from "../../store/thunks/auth";

const SettingsPage = () => {
    const {t} = useTranslation();

    const userData = useSelector(state => state.auth?.user);
    const theme = useSelector(state => state.theme.themeMode);
    const language = useSelector(state => state.language.language);
    const backgroundTheme = userData.themeModeDevice;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPublicUser());
    }, [dispatch]);



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
        <Box sx={{p: 5}}>
            <h2>{t('Change application language')}</h2>
            <LanguageComponent/>
            <h1>{t('Select a theme for the application')}</h1>
            <AccordionToggleTheme backgroundTheme={backgroundTheme}/>
            <h1>setting page</h1>
            <h1>setting page</h1>
            <h1>setting page</h1>
            <Button onClick={handleSubmit}>Save</Button>
        </Box>
    );
};

export default SettingsPage;
