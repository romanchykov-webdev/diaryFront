import {styled} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

const AppLoadingButton = styled(LoadingButton)({
    borderRadius: '4px !important',
    backgroundColor: "#1900D5 !important",
    boxShadow: "0px 1px 7px #332a76 !important",
    padding: "10px 20px !important",
    maxWidth: 300,
    color:'#fff !important',
})

export default AppLoadingButton;