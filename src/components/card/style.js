import {Box, styled} from "@mui/material";


export const WrapperCard = styled(Box)({
    border: `1px solid var(--border-color)`,
    padding: '10px',
    borderRadius: '12px',
    boxShadow: `var(--box-shadow)`,
    maxHeight: '400px',
})
export const CardHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})