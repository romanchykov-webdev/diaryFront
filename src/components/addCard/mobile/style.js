import {Box, styled} from "@mui/material";


export const WrapperAddCardButton = styled(Box)({
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    border: `1px solid var(--border-color)`,
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'ease-in-out 0.5s',
    '& svg': {
        width: '100%',
        height: '100%',
        transition: 'ease-in-out 0.5s',
        fill: 'rgba(250,250,250, 0.5)'
    },
    '&:hover  svg': {
        transform: 'rotate(5deg)'
    }
})