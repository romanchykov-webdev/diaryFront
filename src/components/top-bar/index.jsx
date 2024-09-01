import React, {useEffect, useLayoutEffect} from 'react';
import {AppBar, Avatar, Box, Grid, Toolbar as MuiToolbar, Typography} from "@mui/material";
import {MenuOutlined} from "@mui/icons-material";
import FlexBetween from "../flex-between/FlexBetween";
import SearchBarComponent from "../search-bar/SearchBarComponent";
import {getPublicUser} from "../../store/thunks/auth";
import {useDispatch, useSelector} from "react-redux";
import {Root, MenuIcon, Toolbar} from './style';
import {changeLanguage} from "../../locales/languageSlice";
import {toggleThemeAction} from "../themeToggle/sliceToggleTheme";
import SwitcherFolder from "../switcher-folder/SwitcherFolder";
import ThemeToggleComponent from "../themeToggle/ThemeToggleComponent";
import IsLoadComponent from "../skeleton/IsLoadComponent";


const TopBarComponent = (props) => {
    const {isOpen, setIsOpen, isNonMobile} = props;


    // const dispatch = useDispatch();

    // const {t} = useTranslation();

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)

    const isLoading = useSelector(state => state.auth.isLoading);

    // const {setTheme} = useToggleTheme();
    const backgroundTheme = useSelector((state) => state.auth.user.themeModeDevice)

    // get user data
    useLayoutEffect(() => {
        dispatch(getPublicUser());
    }, [dispatch]);

    useEffect(() => {
        dispatch(changeLanguage(user.language))
        dispatch(toggleThemeAction(user.themeModeDevice))
        // setTheme(backgroundTheme)
        // dispatch(getPublicUser());

    }, [dispatch, user, backgroundTheme]);
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
            // backgroundColor: 'var(--background-color)'
        }}>
            <MuiToolbar component={Toolbar}>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item sm={4} md={3}>
                        <FlexBetween>
                            <Box component={MenuIcon} onClick={() => setIsOpen(!isOpen)}>
                                <MenuOutlined sx={{cursor: 'pointer'}}/>
                            </Box>

                            <Typography variant='h3' sx={{position: 'relative', padding: '5px'}}>
                                {/*{t('Welcome')}{` ${user.userName || ''}`}*/}
                                {/*{t('Welcome')}{` ${user.userName}`}*/}
                                <IsLoadComponent isLoading={isLoading}/>
                                <Avatar
                                    sx={{
                                        border: "1px solid var(--border-color)",
                                        backgroundColor: 'transparent',
                                        // backgroundColor: 'var(--background-color)',
                                        boxShadow: `var(--box-shadow)`
                                    }}>{`${user.userName}`}</Avatar>
                            </Typography>
                        </FlexBetween>
                    </Grid>

                    <Grid display='flex' justifyContent='flex-end' item sm={8} md={9}>
                        <SwitcherFolder/>
                        <Box sx={{display: 'none', visibility: 'hidden', width: 0, height: 0, position: 'absolute'}}>

                            <ThemeToggleComponent/>
                        </Box>
                        {isNonMobile && (
                            <Box marginLeft='28px'>
                                <SearchBarComponent/>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </MuiToolbar>
        </AppBar>
    );
};

export default TopBarComponent;
