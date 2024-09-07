import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

export const WrapperBody =styled(Box)({
    flexGrow: 1, // Заставляет Body занимать всё оставшееся пространство
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Центрирует содержимое Body по вертикали
    // border:'1px solid red',
    overflowY: 'scroll',
    padding:0,
    // height:'100%',
    height:'auto',
    maxHeight:'75svh',
    '@media (max-width: 480px)': {
        // maxHeight:'74svh',

    },

})