import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
// import { tokens } from "../../theme";

export const RootGrid = styled('div')(({theme}) => {
    // const colors = tokens(theme.palette.mode);
    return {
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
    };
});
export const WrapperEmail = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid var(--border-color)',

})

