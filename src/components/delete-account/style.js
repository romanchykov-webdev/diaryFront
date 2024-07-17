import { styled } from "@mui/material/styles";
import { Grid, Checkbox } from "@mui/material";
import { tokens } from "../../theme";

export const StyledGrid = styled(Grid)(({ theme }) => {
    // const colors = tokens(theme.palette.mode);
    return {
        paddingBottom: '10px'
    };
});

export const TabHeading = styled(Grid)({
    width: "100%",
    textAlign: 'center',
    marginBottom: '32px !important',
});

export const AlertMessage = styled(Grid)({
    width: '100%',
    textAlign: 'left',
    marginBottom: '32px !important',
});

export const CheckBoxBlock = styled(Grid)({
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
});

export const StyledCheckbox = styled(Checkbox)(({ theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        color: `${colors.blue} !important`,
        '&.Mui-checked': {
            color: `${colors.blue} !important`,
        },
    };
});

export const BlockButton = styled(Grid)({
    display: "flex",
    width: '100%',
    justifyContent: "flex-end",
    alignItems: "center",
});
