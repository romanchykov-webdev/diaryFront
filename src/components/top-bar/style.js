import { styled } from "@mui/material/styles";
// import { tokens } from "../../theme";

export const Root = styled('div')(({ theme }) => {
    // const colors = tokens(theme.palette.mode);
    return {
        // position: 'static',
        position: 'relative !important',
        backgroundColor: `var(--background-color) !important`,
        borderBottom: `1px solid var(--text-color)`,
        boxShadow: 'var(--box-shadow) !important'

    };
});

export const MenuIcon = styled('div')({
    cursor: 'pointer',
    marginRight: '20px',
    display:'flex',
    alignItems: 'center',
});

export const Toolbar = styled('div')({
    justifyContent: 'space-between',
    padding: '25px 45px',
});
