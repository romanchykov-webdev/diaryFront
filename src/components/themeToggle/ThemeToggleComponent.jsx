import React from 'react';
// icon
import dark from '../../assets/image/theme/dark.svg';
import light from '../../assets/image/theme/light.svg';
import tomato from '../../assets/image/theme/tomato.svg';
import s from './theme.module.css';
import { ReactSVG } from 'react-svg';
import { Grid, IconButton } from '@mui/material';
import { useToggleTheme } from '../../utils/hooks/toggleTheme';
import { useSelector } from 'react-redux';

const ThemeToggleComponent = () => {
    const { theme, setTheme } = useToggleTheme();
    const themeMode = useSelector(state => state.theme.themeMode);
    // console.log(themeMode)
    const toggleTheme = () => {
        switch (theme) {
            case 'dark':
                setTheme('light');
                break;
            case 'light':
                setTheme('tomato');
                break;
            case 'tomato':
                setTheme('dark');
                break;
            default:
                setTheme('dark');
        }
    };

    const renderIcon = () => {
        if (themeMode === 'dark') {
            return <ReactSVG src={light} className={s.icon} />;

        } else if (themeMode === 'light') {
            return <ReactSVG src={tomato} className={s.icon} />;

        } else {
            return <ReactSVG src={dark} className={s.icon} />;
        }
    };

    return (
        <Grid onClick={toggleTheme}>
            <IconButton>
                {renderIcon()}
            </IconButton>
        </Grid>
    );
};

export default ThemeToggleComponent;
