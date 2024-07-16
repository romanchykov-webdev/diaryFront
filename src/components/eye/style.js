import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";


export const EyeWrapper = styled(Box)({
    position: 'absolute',
    right: 0,
    top: 'calc(50% - 20px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '50px',
    cursor: 'pointer',
    // outline: '1px solid black'
})
export const BaraPassword = styled('span')({
    position: 'absolute',
    width: '40px',
    height: '2px',
    backgroundColor: '#000',
    transform: 'rotate(-45deg)',
    right: 0,
    top: 'calc(50% - 3px)',
})