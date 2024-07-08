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
        '& label.Mui-focused': {
            color: theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 0',
    };
});

export const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '25%',
    marginBottom: '20px !important',
}));

export const ButtonBlock = styled(Box)({
    marginTop: 32,
});
