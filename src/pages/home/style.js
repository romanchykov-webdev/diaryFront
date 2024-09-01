import {Box, styled} from "@mui/material";


export const WrapperHomePage = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    gap: '5px',
    padding: '24px'
})
// export const WrapperCards = styled(Box)({
//     display: 'grid',
//     gridTemplateColumns: 'repeat(4 ,1fr)',
//     // border:'1px solid var(--border-color)',
//     gap: '10px',
//
// })

export const WrapperCards = styled(Box)(({ theme }) => ({
    display: 'grid',
    gap: '10px',
    // Для больших экранов
    gridTemplateColumns: 'repeat(4, 1fr)',

    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
    // Для средних экранов (планшеты)
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },

    // Для маленьких экранов
    '@media (max-width: 480px)': {
        gridTemplateColumns: 'repeat(1, 1fr)',
    },
}));