import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

export const MainSection = styled('div')({
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
});

export const DynamicBox = styled(Box)(({isNonMobile}) => ({
    display: isNonMobile ? 'flex' : 'block',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',

}));
