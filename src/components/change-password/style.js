import { styled } from "@mui/material/styles";
import { Box, Grid, TextField } from "@mui/material";
import { tokens } from "../../theme";

export const StyledGrid = styled(Grid)(({ theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        '& .MuiOutlinedInput-root': {
            '& .Mui-focused fieldset': {
                borderColor: colors.blue,
            }
        },
        '& .label.Mui-focused': {
            color: theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 0',
    };
});

export const StyledTextField = styled(TextField)({
    width: '25%',
    marginBottom: '15px !important',
});

export const ButtonSubmitBlock = styled(Box)({
    margin: '32px 0',
});
