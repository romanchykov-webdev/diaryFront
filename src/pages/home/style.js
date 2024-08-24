import {Box, styled} from "@mui/material";


export const WrapperHomePage = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    gap: '5px',
    padding: '24px'
})
export const WrapperCards = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(4 ,1fr)',
    // border:'1px solid var(--border-color)',
    gap: '10px',
})