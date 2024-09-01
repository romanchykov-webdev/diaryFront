import React, {useEffect, useState} from 'react';
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,

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
import {useDispatch, useSelector} from "react-redux";
import s from "../themeToggle/theme.module.css";
import {ReactSVG} from "react-svg";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import {useTranslation} from "react-i18next";
import SwitcherFolder from "../switcher-folder/SwitcherFolder";
import {motion, AnimatePresence} from 'framer-motion';
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarRateIcon from "@mui/icons-material/StarRate";
import StyleIcon from '@mui/icons-material/Style';
import {addLabelAction} from "./sidebarSlice";
import RemoveLabels from "./removeLabels/RemoveLabels";

const SidebarComponent = (props) => {
    const [active, setActive] = useState();
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props;
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const labels = useSelector((state) => state.cards.labels)
    // const theme = useTheme();

    // translate
    const {t} = useTranslation();
    // translate

    useEffect(() => {
        setActive(pathname);
    }, [pathname]);

    // const backgroundTheme = useSelector((state) => state.auth.user.themeModeDevice)
    const backgroundTheme = useSelector((state) => state.auth?.user.themeModeDevice);

    // labels path

    // labels path


    const activeLabel = useSelector((state) => state.sidebarSlice.activeLabel)
    const [activeLabelPath, setActiveLabelPath] = useState(activeLabel)
    const [labelPath, setLabelPath] = useState(activeLabel)


    const renderNavMenu = () => {


        return (
            <>
                {
                    labels && labels.map((lab, index) => (
                        <ListItem key={index + lab}>
                            <ListItemButton
                                // onClick={() => navigate(`/${lab}`)} // Замените '/path' на правильный путь
                                onClick={() => handlerLabel(lab)}
                                component={activeLabelPath === lab ? ActiveNavItem : NavItem}
                            >
                                <ListItemIcon>
                                    <BeenhereIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant="body1">
                                        {lab}
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </>

        );
    };

    const handleLogOut = () => {
        // console.log('logout');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('firstName');
        setIsOpen(false)
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


    function handlerLabel(lab) {
        setActiveLabelPath(lab)
        setLabelPath(lab)
        dispatch(addLabelAction(lab))
        // console.log('handlerLabel', lab)
        setIsOpen(false)

    }

    function handlerAllCards() {
        navigate('/')
        setActiveLabelPath('allCards')
        setLabelPath('allCards')
        dispatch(addLabelAction('allCards'))
        // console.log('labelPath', labelPath)
        // navigate('/path')
        setIsOpen(false)
    }

    function handlerIsFavorite() {
        navigate('/')
        setActiveLabelPath('isFavorite')
        setLabelPath('isFavorite')
        dispatch(addLabelAction('isFavorite'))
        // console.log('labelPath', labelPath)
        // navigate('/path')
        setIsOpen(false)
    }

    const handlerOk = (e) => {

        setIsOpen(false)
    }


    return (
        <AnimatePresence

        >

            <Box component='nav'
                 onClick={(e) => handlerOk(e)}
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
                    <motion.div
                        initial={{width: 0, opacity: 0}}
                        animate={{width: 'auto', opacity: 1}}
                        exit={{width: 0, opacity: 0}}
                        transition={{duration: 0.5}}
                        onClick={(e) => e.stopPropagation()} // Останавливаем распространение события
                    >
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
                                        <IconButton onClick={() => setIsOpen(!isOpen)}
                                                    sx={{backgroundColor: 'transparent !important'}}>
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
                                    <Accordion
                                        sx={{
                                            backgroundColor: 'transparent',
                                            width: '100%',
                                            boxShadow: 'none'
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon/>}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            Labels
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ListItem>
                                                <ListItemButton
                                                    component={activeLabelPath === 'allCards' ? ActiveNavItem : NavItem}
                                                    onClick={handlerAllCards}
                                                >
                                                    <ListItemIcon>
                                                        <StyleIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        All Cards
                                                    </ListItemText>
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton
                                                    onClick={handlerIsFavorite}
                                                    component={activeLabelPath === 'isFavorite' ? ActiveNavItem : NavItem}
                                                >
                                                    <ListItemIcon>
                                                        <StarRateIcon sx={{fill: 'gold'}}/>
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        Is Favorite
                                                    </ListItemText>
                                                </ListItemButton>
                                            </ListItem>
                                            {/**/}
                                            {renderNavMenu()}
                                        </AccordionDetails>
                                    </Accordion>
                                    <RemoveLabels />
                                </NavList>

                            </NavBlock>
                            <Box width='100%'>
                                <List>

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
                                    </ListItem> <ListItem>
                                    <ListItemButton
                                        // onClick={handleSettings}
                                        // component={active === '/settings' ? ActiveNavItem : NavItem}
                                    >
                                        <ListItemIcon>
                                            <SettingsIcon/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            Изменение ярлыков
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
                    </motion.div>

                )}
            </Box>

        </AnimatePresence>
    );
};

export default SidebarComponent;
