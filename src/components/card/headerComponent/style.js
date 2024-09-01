import {Box, styled} from "@mui/material";

export const WrapperHeader = styled(Box)({
    display: 'flex',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',

})
export const WrapperTitle = styled(Box)({})
export const WrapperIcons = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative',
    gap: '10px',
    '& svg': {
        width: '40px',
        height: '40px',
        cursor: 'pointer',
    }
})