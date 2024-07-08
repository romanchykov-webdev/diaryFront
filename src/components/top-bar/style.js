import { styled } from "@mui/material/styles";
import { tokens } from "../../theme";

export const Root = styled('div')(({ theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        position: 'static',
        background: `${colors.primary.DEFAULT} !important`,
        borderBottom: `1px solid ${colors.borderColor}`,
        boxShadow: 'none !important'
    };
});

export const MenuIcon = styled('div')({
    cursor: 'pointer',
    marginRight: '10px',
});

export const Toolbar = styled('div')({
    justifyContent: 'space-between',
    padding: '25px 45px',
});
