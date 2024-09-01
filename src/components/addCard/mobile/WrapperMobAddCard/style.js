import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";


export const WrapperComponent = styled(Box)({
    // backgroundColor: "var(--background-color)",
    // opacity:'0.95',
    backdropFilter: 'blur(10px)',
    position: 'fixed',
    width: '100%',
    height: '110%',
    top: 0,
    left: 0,
    zIndex: '1',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
})