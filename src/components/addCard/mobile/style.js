import {Box, styled} from "@mui/material";


export const WrapperAddCardButton = styled(Box)({
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    // border: `1px solid var(--border-color)`,
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'ease-in-out 0.5s',
    zIndex:'99999',
    // boxShadow:'var(--box-shadow)'
    // '& svg': {
    //     width: '100%',
    //     height: '100%',
    //     transition: 'ease-in-out 0.5s',
    //     fill: 'rgba(250,250,250, 0.5)'
    // },
    // '&:hover svg': {
    //     transform: 'rotate(5deg)'
    // }
})
export const WrapperBackground=styled(Box)({
    position:'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    // zIndex:'-1',

})
export const WrapperAdd=styled(Box)({
    position:'absolute',
    top: '0px',
    left: '0px',
    // zIndex:'1',
    backdropFilter: 'blur(25px)',
    '& svg': {
        width: '100%',
        height: '100%',
        transition: 'ease-in-out 0.5s',
        fill: 'rgba(250,250,250, 0.5)'
    },
})
export const WrapperAddCard = styled(Box)({
    position: 'absolute',
    // outline: '1px solid red',
    top: '0px',
    left: '0px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    transition: 'ease-in-out 0.5s',
    '& svg': {
        position:'absolute',
        transition: 'ease-in-out 0.5s',
        // opacity:'0',
        top:'0',
        left:'0',
        width: '50px',
        height: '50px',
        border: '1px solid var(--border-color)',
        borderRadius: '50%',
        padding: '10px',
    }
})
