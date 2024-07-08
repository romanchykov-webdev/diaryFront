import { styled } from "@mui/material/styles";
import { tokens } from "../../theme";

export const NavBlock = styled('div')(({ theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        width: '100%',
        borderBottom: `1px solid ${colors.borderColor}`
    };
});

export const Brand = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '30px 15px',
    cursor: 'pointer'
});

export const BrandTitle = styled('div')(({ theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        color: `${theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}`
    };
});

export const NavList = styled('div')({
    marginBottom: '55px'
});

export const NavItem = styled('div')(({ theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        '&:hover': {
            backgroundColor: '#1900D5 !important',
            color: `${colors.white.DEFAULT}`,
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
                color: `${colors.white.DEFAULT} !important`
            }
        },
    };
});

export const ActiveNavItem = styled(NavItem)({
    backgroundColor: '#1900D5 !important',
    color: '#fff !important',
    borderRadius: '4px !important',
});
