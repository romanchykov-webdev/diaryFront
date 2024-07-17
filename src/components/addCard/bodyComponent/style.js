import {Box, styled} from "@mui/material";


export const WrapperBody=styled(Box)({
    marginBottom:'20px',
    padding:'5px',
    border:'1px solid var(--border-color)',
    borderRadius:'var(--border-radius5)',
    '& .css-1oxcpl9-JoyTextarea-root':{
        border:'none !important',
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