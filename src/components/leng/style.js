import {Box, Button, styled} from "@mui/material";
import {tokens} from "../../theme";


export const WrapperLanguageComponent = styled(Box)(({theme}) => {
    const colors = tokens(theme.palette.mode);

    return {
        background: `${colors.primary.DEFAULT}`,
        color: theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT,
    }

})

export const ButtonChangeLanguage = styled(Button)(({theme}) => {
    const colors = tokens(theme.palette.mode);
    return {
        // width:'64px',
        color: theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT,
        margin: '5px',
        fontWeight: 600,
        borderColor: theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT,
        '&:hover': {
            borderColor: colors.borderColor,
        },
    }
})

