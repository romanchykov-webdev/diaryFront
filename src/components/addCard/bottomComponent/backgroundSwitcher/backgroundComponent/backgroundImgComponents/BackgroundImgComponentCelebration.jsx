import React from 'react';
import {Avatar, Button, Grid} from "@mui/material";
import {ReactSVG} from "react-svg";
import celebration from '../../../../../../assets/image/backgroundImg/celebration.svg'

import SvgIcon from '@mui/material/SvgIcon';


const BackgroundImgComponentFood_light = ({switcherBackground,backgroundColorCard}) => {


    return (
        <Grid item xs={4} sm={3} md={2}
              sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 0,
                  marginBottom: 2,


              }}>
            <Button
                onClick={() => switcherBackground(celebration)}
                variant='outlined'
                sx={{
                    border: '1px solid var(--border-color)',
                    borderRadius: '50%',
                    padding: 0,
                    minWidth: 0,
                    width:'50px',
                    height:'50px',
                    transition: 'background-color 0s',
                    backgroundImage:`url(${celebration})`,
                    backgroundPositionX: 'right',
                    backgroundPositionY: 'bottom',
                    backgroundSize: 'cover',
                    boxShadow: backgroundColorCard === '' ? 'var(--box-shadow)' : 'none',
                    '&:hover': {border: '1px solid var(--border-color)'}
                }}>
            </Button>
        </Grid>
    );
};

export default BackgroundImgComponentFood_light;