import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

export const WrapperFullscreen = styled(Box)({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '20px',
    position: 'absolute',
    // position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // backgroundColor: 'var(--background-color)',
    backdropFilter: 'blur(10px)',
    zIndex: '1200',
    overflow: 'scroll',
    scrollbarWidth: 'none',
    '& ::-webkit-scrollbar': {
        display: 'none'
    },
    // Для маленьких экранов
    '@media (max-width: 480px)': {
        position: 'fixed',
        paddingTop: '0px',
        paddingBottom: '40px',
    },
})
export const WrapperCard = styled(Box)({
    // border:'1px solid red',
    width: '90%',
    padding: '10px',
    borderRadius: '12px',
    boxShadow: 'var(--box-shadow)',
    height: 'auto',
    overflowY: 'scroll',
    '@media (max-width: 480px)': {
        // padding:'2px',
        display: 'flex',
        height: '100svh',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // height: 'auto',
        width: '98%',

    },

})
export const BodyWrapper = styled(Box)({})