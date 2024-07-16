import React, {useEffect, useLayoutEffect} from 'react';
import {AppBar, Box, Grid, Toolbar as MuiToolbar, Typography} from "@mui/material";
import {MenuOutlined} from "@mui/icons-material";
import FlexBetween from "../flex-between/FlexBetween";
import SearchBarComponent from "../search-bar/SearchBarComponent";
import {getPublicUser} from "../../store/thunks/auth";
import {useDispatch, useSelector} from "react-redux";
import {Root, MenuIcon, Toolbar} from './style';
import ThemeToggleComponent from "../themeToggle/ThemeToggleComponent";
import {useTranslation} from "react-i18next";
import {changeLanguage} from "../../locales/languageSlice";
import {toggleThemeAction} from "../themeToggle/sliceToggleTheme";

const TopBarComponent = (props) => {
    const {isOpen, setIsOpen, isNonMobile} = props;

    // const dispatch = useDispatch();

    const {t} = useTranslation();

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)


    // get user data
    useLayoutEffect(() => {
        dispatch(getPublicUser());
    }, [dispatch,]);

    useEffect(() => {
        dispatch(changeLanguage(user.language))
        dispatch(toggleThemeAction(user.themeModeDevice))
    }, [dispatch, user]);
    if (!user) {
        return <div>Loading...</div>; // Or any loading spinner/component
    }

    //get firstName
    // const firstNameUser = sessionStorage.getItem("firstName")
    // const firstNameUser = useAppSelector(state => state.auth.user.user?.firstName)
    // const user = useSelector(state => state.auth.user);
    // console.log('user',user)
    // console.log('user.userName',user.userName)
    // const backgroundTheme = useSelector((state) => state.auth.user.themeModeDevice)
    // const backgroundTheme = useSelector((state) => state.theme.themeMode)
    // const backgroundTheme = useSelector((state) => state.auth?.user.themeModeDevice)

    // useLayoutEffect(() => {
    //     if (backgroundTheme === 'tomato') {
    //         document.documentElement.setAttribute('data-theme', backgroundTheme);
    //     }
    //     console.log("useLayoutEffect",backgroundTheme)
    // }, [backgroundTheme]);
    // console.log('backgroundTheme',backgroundTheme)
    return (
        <AppBar component={Root} sx={{
            position: 'relative',
            backgroundColor: 'var(--background-color)'
        }}>
            <MuiToolbar component={Toolbar}>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item sm={3} lg={3}>
                        <FlexBetween>
                            <Box component={MenuIcon} onClick={() => setIsOpen(!isOpen)}>
                                <MenuOutlined sx={{cursor: 'pointer'}}/>
                            </Box>

                            <Typography variant='h3'>
                                {t('Welcome')}{` ${user.userName || ''}`}
                            </Typography>
                        </FlexBetween>
                    </Grid>

                    {isNonMobile && (
                        <Grid display='flex' justifyContent='flex-end' item sm={9} lg={9}>
                            <Box borderRight='1px solid #3C3C3C'>
                                <ThemeToggleComponent/>
                            </Box>
                            <Box marginLeft='28px'>
                                <SearchBarComponent/>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </MuiToolbar>
        </AppBar>
    );
};

export default TopBarComponent;
