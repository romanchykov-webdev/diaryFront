import {Box, styled} from "@mui/material";


export const WrapperLabelComponent = styled(Box)({
    // outline:'1px solid red',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '250px',
    backdropFilter: 'blur(10px)',
    zIndex: '10',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 'var(--border-radius5)',
    border: '1px solid var(--border-color)',
    overflow: 'hidden',
    padding: '10px 0 0 0',

    '& p': {
        textAlign: 'center',
        marginTop: '5px',
        marginBottom: '5px',
        fontSize: '14px !important'
    },
    '& input': {
        outline: 'none',
        backgroundColor:'transparent',
        background:'transparent',
        // width:'10px',
        // height:'10px',
        border:'1px solid var(--border-color)',
        '&:focus-visible ': {
            outline: 'none'
        }
    }
})

export const WrapperLabels = styled(Box)({
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 5px 10px 5px',
})
export const WrapperItem = styled(Box)({
    margin: '3px 0',
    borderBottom: '1px solid var(--border-color)',
    transition: 'letter-spacing 0.5s',
    cursor: 'pointer',
    '&:hover': {
        '& span': {
            letterSpacing: '1.5px'
        },
    },
    '& label': {
        // outline: '1px solid red',
        width: '100%',
        display: 'flex',
        cursor: 'pointer',

    }
})