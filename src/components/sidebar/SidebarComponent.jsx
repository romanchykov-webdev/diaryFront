import React, { useEffect, useState } from 'react';
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
    Avatar,
} from "@mui/material";
import { LogoutOutlined, ChevronLeftOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../flex-between/FlexBetween";
import Logo from "../../assets/image/logo/diaryLogo.svg";
import SearchBarComponent from "../search-bar/SearchBarComponent";
import ThemeSwitcherComponent from "../theme-switcher/ThemeSwitcherComponent";
import {
    NavBlock,
    Brand,
    BrandTitle,
    NavList,
    NavItem,
    ActiveNavItem
} from "./style";
import {useSelector} from "react-redux";

const SidebarComponent = (props) => {
    const [active, setActive] = useState();
    const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname);
    }, [pathname]);

    const backgroundTheme = useSelector((state) => state.auth.user.themeModeDevice)
    const renderNavMenu = () => {
        return (
            <ListItem >
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

    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: backgroundTheme === 'tomato' ? '#ff6347 !important' : theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            borderColor:backgroundTheme === 'tomato' && 'black !important'
                        }
                    }}
                >
                    <NavBlock>
                        <Box>
                            <FlexBetween>
                                <Brand>
                                    <Avatar alt="Diary Logo" src={Logo} />
                                    <Typography variant='h1' component={BrandTitle}>
                                        Diary
                                    </Typography>
                                </Brand>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        {!isNonMobile && (
                            <List>
                                <ListItem>
                                    <SearchBarComponent />
                                </ListItem>
                            </List>
                        )}
                        <NavList>
                            {renderNavMenu()}
                        </NavList>
                    </NavBlock>
                    <Box width='100%'>
                        <List>
                            {!isNonMobile && (
                                <ListItem>
                                    <Box padding='5px'>
                                        <ThemeSwitcherComponent />
                                    </Box>
                                </ListItem>
                            )}
                            <ListItem>
                                <ListItemButton component={NavItem} onClick={handleLogOut}>
                                    <ListItemIcon>
                                        <LogoutOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>
                                            LogOut
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;
