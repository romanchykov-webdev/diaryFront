import React, {useEffect, useState} from 'react';
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,

} from "@mui/material";
import {LogoutOutlined, ChevronLeftOutlined} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flex-between/FlexBetween";
import Logo from "../../assets/image/logo/diaryLogo.svg";
import SearchBarComponent from "../search-bar/SearchBarComponent";
import {
    NavBlock,
    Brand,
    BrandTitle,
    NavList,
    NavItem,
    ActiveNavItem
} from "./style";
import {useSelector} from "react-redux";
import s from "../themeToggle/theme.module.css";
import {ReactSVG} from "react-svg";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import {useTranslation} from "react-i18next";
import SwitcherFolder from "../switcher-folder/SwitcherFolder";

const SidebarComponent = (props) => {
    const [active, setActive] = useState();
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props;
    const {pathname} = useLocation();
    const navigate = useNavigate();
    // const theme = useTheme();

    // translate
    const {t} = useTranslation();
    // translate

    useEffect(() => {
        setActive(pathname);
    }, [pathname]);

    // const backgroundTheme = useSelector((state) => state.auth.user.themeModeDevice)
    const backgroundTheme = useSelector((state) => state.auth?.user.themeModeDevice);
    const renderNavMenu = () => {
        return (
            <ListItem>
                <ListItemButton
                    onClick={() => navigate('/path')} // Замените '/path' на правильный путь
                    component={active === '/path' ? ActiveNavItem : NavItem}
                >
                    <ListItemIcon>
                        icon
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1">
                            name
                        </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        );
    };

    const handleLogOut = () => {
        console.log('logout');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('firstName');
        navigate('/login');
    };

    function handleSettings() {
        navigate('/settings')
        // navigate('/path')
        setIsOpen(false)
    }

    function handleHome() {
        navigate('/')
        // navigate('/path')
        setIsOpen(false)
    }

    return (

        <Box component='nav'
             sx={isOpen
                 ? {
                     position: 'absolute',
                     width: '100%',
                     minHeight: '100%',
                     backgroundColor: '#ff000000',
                     backdropFilter: 'blur(5px)',
                     zIndex: 10000,
                     // filter: 'blur(8px)'
                 }
                 : {}
             }

        >
            {isOpen && (
                <>
                    <Drawer
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                        variant='persistent'
                        anchor='left'
                        sx={{
                            backgroundColor: 'var(--background-color)',
                            width: drawerWidth,

                            '& .MuiDrawer-paper': {
                                // color: theme.palette.secondary.main,
                                // backgroundColor: backgroundTheme === 'tomato'  '#ff6347 !important'
                                boxSizing: 'border-box',
                                width: drawerWidth,
                                backgroundColor: 'var(--background-color)',
                                borderColor: `var(--border-color)`
                            }
                        }}
                    >
                        <NavBlock>
                            <Box>
                                <FlexBetween>

                                    {/*{!isNonMobile && (*/}
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <Brand>
                                            <ReactSVG src={Logo} className={s.icon}
                                                      style={{
                                                          fill: backgroundTheme === 'black' ? '#fff' : undefined
                                                      }}
                                            />
                                            <Typography variant='h4' component={BrandTitle}>
                                                {t('Diary')}
                                            </Typography>
                                        </Brand>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                    {/*)}*/}
                                </FlexBetween>
                            </Box>
                            {!isNonMobile && (
                                <List>
                                    <ListItem>
                                        <SearchBarComponent/>
                                    </ListItem>
                                    <ListItem sx={{justifyContent: 'center', mt: 2}}>
                                        <SwitcherFolder/>
                                    </ListItem>
                                </List>
                            )}
                            <NavList>
                                {renderNavMenu()}
                            </NavList>
                        </NavBlock>
                        <Box width='100%'>
                            <List>
                                {/*{!isNonMobile && (*/}
                                {/*    <ListItem>*/}
                                {/*        <Box padding='5px'>*/}
                                {/*            <ThemeToggleComponent/>*/}
                                {/*        </Box>*/}
                                {/*    </ListItem>*/}
                                {/*)}*/}
                                <ListItem>
                                    <ListItemButton
                                        onClick={handleHome}
                                        component={active === '/' ? ActiveNavItem : NavItem}
                                    >
                                        <ListItemIcon>
                                            <HomeIcon/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            {t('Home')}
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                        onClick={handleSettings}
                                        component={active === '/settings' ? ActiveNavItem : NavItem}
                                    >
                                        <ListItemIcon>
                                            <SettingsIcon/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            {t('Settings')}
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>

                                    <ListItemButton component={NavItem} onClick={handleLogOut}>
                                        <ListItemIcon>
                                            <LogoutOutlined/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography>
                                                {t('Log out')}
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>

                </>
            )}
        </Box>

    );
};

export default SidebarComponent;
