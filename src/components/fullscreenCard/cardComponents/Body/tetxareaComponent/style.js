import {Box, styled} from "@mui/material";

export const WrapperTextArea=styled(Box)({
    // outline:'1px solid red',
    '& .css-1oxcpl9-JoyTextarea-root':{
        border:'none !important',
        padding:'0 !important',
        // '&:focus':{
        //     '&:before':{
        //         boxShadow:'none !important',
        //         border:'none !important' ,
        //         outline:'none !important'
        //     }
        // },
        '&:before':{
            boxShadow:'none !important',
            border:'none !important' ,
            outline:'none !important'
        }

    },
})