import {Box, styled} from "@mui/material";


export const WrapperAddCardFs = styled(Box)({
    // outline: '1px solid red',
    width: '100%',
    maxWidth: '600px',
    minHeight: '70px',
    margin: '0 auto',
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    padding: '5px 10px',
    borderRadius: 'var(--border-radius5)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--box-shadow)',
    transition: 'ease-in-out 0.5s',
    overflow:'hidden',
    '&:hover': {
        boxShadow: '0px 0px 19px #eee5e580',
    },

})
export const WrapperSwitcher = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const WrapperList = styled(Box)({
    cursor: 'pointer',
    '& h4': {
        cursor: 'pointer',
    }
})
export const IconWrapper = styled(Box)({
    cursor: 'pointer',
    '& div': {
        '& div': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    '& svg': {
        cursor: 'pointer',
        width: '50px',
        height: '50px'
    }
})
export const WrapperBody = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
})