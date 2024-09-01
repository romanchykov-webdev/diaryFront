import React from 'react';
import { Button, Grid} from "@mui/material";
import music_light from '../backgroundImg/music_light.svg'
const BackgroundImgComponentMusicLight = ({switcherBackground,backgroundColorCard}) => {
    return (
        <Grid item xs={4} sm={3} md={2}
              sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 0,
                  marginBottom: 2
              }}>
            <Button
                onClick={() => switcherBackground(music_light)}
                variant='outlined'
                sx={{
                    border: '1px solid var(--border-color)',
                    borderRadius: '50%',
                    padding: 0,
                    minWidth: 0,
                    width:'50px',
                    height:'50px',
                    backgroundImage:`url(${music_light})`,
                    backgroundPositionX: 'right',
                    backgroundPositionY: 'bottom',
                    backgroundSize: 'cover',
                    transition: 'background-color 0s',
                    boxShadow: backgroundColorCard === '' ? 'var(--box-shadow)' : 'none',
                    '&:hover': {border: '1px solid var(--border-color)'}
                }}>
            </Button>
        </Grid>
    );
};

export default BackgroundImgComponentMusicLight;