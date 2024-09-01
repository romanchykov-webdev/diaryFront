import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Avatar from '@mui/material/Avatar';
import {Button, Grid} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
// import {backgroundColorCardAction} from "../../../bodyComponent/todoComponent/todocomponentSlice";
// import FullscreenAddColorComponent from "./FullscreenAddColorComponent";
import {motion,AnimatePresence} from 'framer-motion';
// import FullscreenDeleteColorComponent from "./FullscreenDeleteColorComponent";
import {changeColorCardAction} from "../../../../../../card/cardsSlice";
import FullscreenAddColorComponent from "./FullscreenAddColorComponent";
import FullscreenDeleteColorComponent from "./FullscreenDeleteColorComponent";

const FullscreenColorsComponent = () => {
        const colors = useSelector((state) => state.auth.user.colors);

        const dispatch = useDispatch()

        const backgroundColorCard = useSelector((state) => state.fullscreenToggle.card.backgroundColorCard);

        useEffect(() => {

        },[colors])

        const switcherColor = (color) => {
            // dispatch(backgroundColorCardAction(color))
            dispatch(changeColorCardAction(color))
            console.log('color',color)
        }
        const [dialogOpen, setDialogOpen] = useState(false);
        const [deleteColorOpen, setDeleteColorOpen] = useState(false);
        const [backgroundColors,setBackgroundColors]=useState(true);
        // console.log('dialogOpen',dialogOpen)
    // const handleDialogOpen = () => {
    //     setDialogOpen(true);
    //     console.log('setDialogOpen(true)',dialogOpen)
    // };
    //
    // const handleDialogClose = () => {
    //     setDialogOpen(false);
    // };
        useEffect(() => {
                if(dialogOpen===true || deleteColorOpen===true ){
                        setBackgroundColors(false)
                }else{
                        setBackgroundColors(true)
                }
        }, [dialogOpen,deleteColorOpen,backgroundColors]);
        console.log('backgroundColors',backgroundColors)
        return (
            <Grid container sx={{ padding: 0, paddingTop: 2,position:'relative',justifyContent:'center',width:'100%',}}>

                <AnimatePresence>
                        <motion.div
                            initial={{ height: 0, opacity: 0,width:'100%' }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >{
                                backgroundColors && <Grid
                                // container sx={{pb:2 , outline:'1px solid red'}}
                                sx={{
                                        // outline:'1px solid red',
                                        width:'100%',
                                        display:'flex',
                                        flexWrap:'wrap',
                                        alignItems:'center',
                                        justifyContent:'space-between',
                                }}
                            >
                                    <Grid
                                        // item xs={4} sm={3} md={2}
                                        sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '5px',

                                                // marginBottom: 2
                                        }}
                                    >
                                            <Button
                                                onClick={() => switcherColor('')}
                                                variant='outlined'
                                                sx={{
                                                        border: '1px solid var(--border-color)',
                                                        borderRadius: '50%',
                                                        padding: 0,
                                                        minWidth: 0,
                                                        transition: 'background-color 0s',
                                                        boxShadow: backgroundColorCard === '' ? 'var(--box-shadow)' : 'none',
                                                        '&:hover': {border: '1px solid var(--border-color)'}
                                                }}>
                                                    < Avatar sx={{backgroundColor: `var(--background-color)`}}>
                                                            {
                                                                    backgroundColorCard === '' ? <CheckIcon/> : <span></span>
                                                            }
                                                    </Avatar>
                                            </Button>
                                    </Grid>
                                    {colors.map((color, index) => (
                                        <Grid
                                            // item xs={4} sm={3} md={2}
                                            key={index}
                                            sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    padding: 0,
                                                    // marginBottom: 2
                                            }}>
                                                <Button
                                                    onClick={() => switcherColor(color)}
                                                    variant='outlined'
                                                    sx={{
                                                            border: '1px solid transparent',
                                                            borderRadius: '50%',
                                                            padding: 1,
                                                            minWidth: 0,
                                                            transition: 'background-color 0s',
                                                            boxShadow: backgroundColorCard === color ? 'var(--box-shadow)' : 'none',
                                                            '&:hover': {border: '1px solid transparent'}
                                                    }}>
                                                        < Avatar sx={{backgroundColor: color}}>
                                                                {
                                                                        backgroundColorCard === color ? <CheckIcon/> : <span></span>
                                                                }
                                                        </Avatar>
                                                </Button>
                                        </Grid>
                                    ))}
                            </Grid>
                        }


                        </motion.div>

                </AnimatePresence>

                    {
                            backgroundColors && <Grid
                            container sx={{paddingTop:2}}
                        >
                                <Grid item xs={12} sm={6} md={6}
                                      sx={{
                                              display: 'flex',
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              padding: 0,
                                              marginBottom: 2
                                      }}>
                                        <Button
                                            onClick={()=>setDialogOpen(!dialogOpen)}
                                            variant='outlined'

                                        >
                                                Add new color
                                        </Button>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}
                                      sx={{
                                              display: 'flex',
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              padding: 0,
                                              marginBottom: 2
                                      }}>
                                        <Button
                                            onClick={()=>setDeleteColorOpen(!deleteColorOpen)}
                                            variant='outlined'

                                        >
                                                Delete old color
                                        </Button>
                                </Grid>
                        </Grid>
                    }



                <AnimatePresence sx={{width:'100%',}}>
                    {dialogOpen && <motion.div
                            initial={{ height: 0, opacity: 0 ,width:'100%'}}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FullscreenAddColorComponent setDialogOpen={setDialogOpen} dialogOpen={dialogOpen}/>
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {deleteColorOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FullscreenDeleteColorComponent setDeleteColorOpen={setDeleteColorOpen} deleteColorOpen={deleteColorOpen}/>


                        </motion.div>
                    )}
                </AnimatePresence>


            </Grid>
        )
            ;
    }
;

export default FullscreenColorsComponent;