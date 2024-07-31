import {Box, styled} from "@mui/material";


export const WrapperLoader = styled(Box)({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(30px)',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    zIndex: '10000',
    overflow: 'hidden',
})