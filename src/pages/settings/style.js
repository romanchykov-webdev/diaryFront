import { styled } from "@mui/material/styles";
// import { tokens } from "../../theme";

export const RootGrid = styled('div')(({ theme }) => {
    // const colors = tokens(theme.palette.mode);
    return {
        padding: 32,
        display:'flex',
        flexDirection: 'column',
    };
});

