import {makeStyles, Theme} from "@mui/material";
import {tokens} from "../../theme";


export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            display: 'flex',
            backgroundColor: `${colors.primary[600]}`,
            borderRadius: '8px',
            // marginLeft: '28px',
            maxHeight: '45px',
        },
        searchInput: {
            padding: '18px 12px'
        },
        searchIcon: {
            '&:hover': {
                'backgroundColor': 'transparent !important'
            }
        },
    }
})