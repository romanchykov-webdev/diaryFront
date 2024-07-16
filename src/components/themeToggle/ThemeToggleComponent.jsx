import React, {useContext} from 'react';
// icon
import dark from '../../assets/image/theme/dark.svg';
import light from '../../assets/image/theme/light.svg';
import tomato from '../../assets/image/theme/tomato.svg';
import s from './theme.module.css';
import {ReactSVG} from 'react-svg';
import {Grid, IconButton, useTheme} from '@mui/material';
import {useToggleTheme} from '../../utils/hooks/toggleTheme';
import {useDispatch, useSelector} from 'react-redux';
import {ColorModeContext} from "../../theme";
import {updateUserInfo} from "../../store/thunks/auth";
// material-ui

// material-ui


const ThemeToggleComponent = ({backgroundTheme}) => {
    // material-ui
    // const MaTheme = useTheme();
    // const colorMode = useContext(ColorModeContext);
    // material-ui



    // const themeState = useSelector(store => store.theme.themeMode)

    //
    // if (themeState === 'dark') {
    //     colorMode.toggleColorMode('dark')
    // } else if (themeState === 'light') {
    //     colorMode.toggleColorMode('light')
    // } else if (themeState === 'tomato') {
    //     colorMode.toggleColorMode('dark')
    // }

    const {theme, setTheme} = useToggleTheme();
    let themeMode = useSelector(state => state.theme.themeMode);
    const userData=useSelector((state)=>state.auth?.user)
    console.log(userData)
    // console.log(themeMode)
    const toggleTheme = () => {
        switch (theme) {
            case 'dark':
                setTheme('light');

                // colorMode.toggleColorMode(); // Переключаем цветовую схему
                // console.log('colorMode.toggleColorMode',colorMode.toggleColorMode)
                break;
            case 'light':
                setTheme('tomato');
                // colorMode.toggleColorMode(); // Переключаем цветовую схему
                // console.log('colorMode.toggleColorMode',colorMode.toggleColorMode)
                break;
            case 'tomato':
                setTheme('dark');
                // colorMode.toggleColorMode(); // Переключаем цветовую схему
                // console.log('colorMode.toggleColorMode',colorMode.toggleColorMode)
                break;
            default:
                setTheme('dark');
        }
    };

    const renderIcon = () => {
        if (themeMode === 'dark'
            // & MaTheme.palette.mode === 'dark'
        ) {
            // return <ReactSVG src={light} className={s.icon} onClick={colorMode.toggleColorMode} />;
            return <ReactSVG src={light} className={s.icon}/>;

        } else if (themeMode === 'light'
            // & MaTheme.palette.mode === 'light'
        ) {
            return <ReactSVG src={tomato} className={s.icon}/>;

        } else if (themeMode === 'tomato'
            // & MaTheme.palette.mode === 'light'
        ) {
            // return <ReactSVG src={dark} className={s.icon} onClick={colorMode.toggleColorMode} />;
            return <ReactSVG src={dark} className={s.icon}/>;
        }
    };

    return (
        <Grid>
            <IconButton onClick={toggleTheme}>
                {renderIcon()}
            </IconButton>
        </Grid>
    );
};

export default ThemeToggleComponent;
