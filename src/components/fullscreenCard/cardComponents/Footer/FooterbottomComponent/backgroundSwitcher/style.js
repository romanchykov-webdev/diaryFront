import {Box, styled} from "@mui/material";

export const WrapperBackground = styled(Box)({
    // border: '1px solid red',
    width: '100%',
    marginBottom: '20px',
    '& .css-1086bdv-MuiPaper-root-MuiAccordion-root': {
        backgroundColor: 'transparent'
    }
})