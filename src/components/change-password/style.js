import { styled } from "@mui/material/styles";
import { Box, Grid, TextField } from "@mui/material";
// import { tokens } from "../../theme";

export const StyledGrid = styled(Grid)({
    // const colors = tokens(theme.palette.mode);
    // return {
        '& .MuiOutlinedInput-root': {
            '& .Mui-focused fieldset': {
                borderColor: 'var(--border-color)',
            }
        },
        '& .label.Mui-focused': {
            color:'var(--text-color)',
        },

        padding: '32px 0',
    // };
});
export const WrapperChangePassword=styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})
export const StyledTextField = styled(TextField)({
    width: '50%',
    marginBottom: '15px !important',
});

export const ButtonSubmitBlock = styled(Box)({
    margin: '32px 0',
});
