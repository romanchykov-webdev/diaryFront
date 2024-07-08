import { styled } from "@mui/material/styles";
import { tokens } from "../../theme";

export const RootGrid = styled('div')(({ theme }) => {
    // const colors = tokens(theme.palette.mode);
    return {
        padding: 32,
    };
});

export const TabsWrapperBox = styled('div')(({ theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        borderBottom: `1px solid ${colors.borderColor}`,
    };
});
