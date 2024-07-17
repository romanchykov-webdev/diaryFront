import {Box, styled} from "@mui/material";


export const WrapperFolder = styled(Box)({
    border: '1px solid var(--border-color)',
    padding: "10px",
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: `var(--box-shadow)`,
    width: '60px',
    height: '60px',
})