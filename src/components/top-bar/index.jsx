import React, { useEffect } from 'react';
import { AppBar, Box, Grid, Toolbar as MuiToolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import FlexBetween from "../flex-between/FlexBetween";
import SearchBarComponent from "../search-bar/SearchBarComponent";
import { getPublicUser } from "../../store/thunks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Root, MenuIcon, Toolbar } from './style';
import ThemeToggleComponent from "../themeToggle/ThemeToggleComponent";

const TopBarComponent = (props) => {
    const { isOpen, setIsOpen, isNonMobile } = props;

    const dispatch = useDispatch();

    // get user data
    useEffect(() => {
        dispatch(getPublicUser());
    }, [dispatch]);

    //get firstName
    // const firstNameUser = sessionStorage.getItem("firstName")
    // const firstNameUser = useAppSelector(state => state.auth.user.user?.firstName)
    const  user  = useSelector(state => state.auth.user);
    // console.log('user',user)
    // console.log('user.userName',user.userName)
    const backgroundTheme = useSelector((state) => state.auth.user.themeModeDevice)
    // console.log('backgroundTheme',backgroundTheme)
    return (
        <AppBar component={Root} sx={{
            backgroundColor: backgroundTheme === 'tomato' ? '#ff6347 !important' : {}}}>
            <MuiToolbar component={Toolbar}>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item sm={3} lg={3}>
                        <FlexBetween>
                            <MenuOutlined className={MenuIcon} onClick={() => setIsOpen(!isOpen)} />
                            <Typography variant='h3'>
                                {`welcome ${user.userName}`}
                            </Typography>
                        </FlexBetween>
                    </Grid>

                    {isNonMobile && (
                        <Grid  display='flex' justifyContent='flex-end' item sm={9} lg={9}>
                            <Box borderRight='1px solid #3C3C3C'>
                                <ThemeToggleComponent />
                            </Box>
                            <Box marginLeft='28px'>
                                <SearchBarComponent />
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </MuiToolbar>
        </AppBar>
    );
};

export default TopBarComponent;
