import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Avatar from '@mui/material/Avatar';
import {Button, Grid} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import {backgroundColorCardAction} from "../../../bodyComponent/todoComponent/todocomponentSlice";
import AddColorComponent from "./AddColorComponent";
import {motion,AnimatePresence} from 'framer-motion';
import DeleteColorComponent from "./DeleteColorComponent";
import {useTranslation} from "react-i18next";

const ColorsComponent = () => {

    // translate
    const {t} = useTranslation();
    // translate

        const colors = useSelector((state) => state.auth.user.colors);

        const dispatch = useDispatch()

        const backgroundColorCard = useSelector((state) => state.createNewTodo.backgroundColorCard);

        useEffect(() => {

        },[colors])

        const switcherColor = (color) => {
            dispatch(backgroundColorCardAction(color))
        }
        const [dialogOpen, setDialogOpen] = useState(false);
        const [deleteColorOpen, setDeleteColorOpen] = useState(false);
        // console.log('dialogOpen',dialogOpen)
    // const handleDialogOpen = () => {
    //     setDialogOpen(true);
    //     console.log('setDialogOpen(true)',dialogOpen)
    // };
    //
    // const handleDialogClose = () => {
    //     setDialogOpen(false);
    // };

        return (
            <Grid container sx={{ padding: 0, paddingTop: 2,position:'relative'}}>

                <AnimatePresence>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Grid container sx={{pb:2}}>
                                <Grid item xs={4} sm={3} md={2}
                                      sx={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          padding: 0,
                                          marginBottom: 2
                                      }}>
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
                                    item xs={4} sm={3} md={2}
                                      key={index}
                                      sx={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          padding: 0,
                                          marginBottom: 2
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
                        </motion.div>

                </AnimatePresence>


      <Grid container>
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
                  {t('Add new color')}
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
                  {t('Delete color')}
              </Button>
          </Grid>
      </Grid>

                <AnimatePresence>
                    {dialogOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AddColorComponent   setDialogOpen={setDialogOpen} dialogOpen={dialogOpen}/>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {deleteColorOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <DeleteColorComponent   setDeleteColorOpen={setDeleteColorOpen} deleteColorOpen={deleteColorOpen}/>
                        </motion.div>
                    )}
                </AnimatePresence>


            </Grid>
        )
            ;
    }
;

export default ColorsComponent;