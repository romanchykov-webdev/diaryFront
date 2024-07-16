import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

export const StyledRoot = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    maxHeight: '100%',
    minHeight: '100vh',
    padding: '20px',
});

export const StyledForm = styled('form')({
    flex: 1,
    padding: '40px',
});
export const WrapperPassword = styled(Box)({
    // outline: '1px solid red',
    width: '100%',
    position: 'relative'

})