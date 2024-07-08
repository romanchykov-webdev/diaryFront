import React, { useContext, useEffect } from 'react';
import { IconButton, useTheme, Typography } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ColorModeContext } from "../../theme";
import { Root, ThemeIcon } from './style';

const ThemeSwitcherComponent = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    useEffect(() => {
        console.log(`Current theme mode: ${theme.palette.mode}`);
    }, [theme.palette.mode]);

    return (
        <Root onClick={colorMode.toggleColorMode}>
            <IconButton component={ThemeIcon}>
                {theme.palette.mode === 'dark' ? (
                    <DarkMode />
                ) : theme.palette.mode === 'light' ? (
                    <LightMode />
                ) : (
                    <Typography variant="body2" style={{ color: theme.palette.primary.main }}>Tomato</Typography>
                )}
            </IconButton>
        </Root>
    );
};

export default ThemeSwitcherComponent;
