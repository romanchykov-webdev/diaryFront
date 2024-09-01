import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Typography, Box, Grid} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import {AnimatePresence, motion} from "framer-motion";
import Avatar from "@mui/material/Avatar";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DeleteIcon from '@mui/icons-material/Delete';
import {getPublicUser, updateUserInfo} from "../../../../../../../store/thunks/auth";
import {removeColorUser} from "../../../../../../../store/slice/auth";

const FullscreenDeleteColorComponent = ({setDeleteColorOpen,deleteColorOpen}) => {


    const userData = useSelector(state => state.auth.user);

    const backgroundColorCard = useSelector((state) => state.fullscreenToggle.card.backgroundColorCard);

    const colorsUser = useSelector((state) => state.auth.user.colors);

    const dispatch = useDispatch();

    useEffect(() => {

    }, [colorsUser]);


    const handleExitAndPatchColor = () => {
        // dispatch(addNewColorAction(color))
        console.log('color',userData.colors)
        // const addColor=[...userData.colors,colorsUser]
        console.log('addColor',colorsUser)
        const updateUser = {
            // "userName":userData.userName ,
            // "email": userData.email,
            // "language": userData.language,
            // "themeModeDevice": userData.themeModeDevice,
            // "popupForNewUser": userData.popupForNewUser,
            // "avatar": userData.avatar,
            // "switcherFolder":userData.switcherFolder,
            "colors":colorsUser,
        }
        console.log(updateUser)
        dispatch(updateUserInfo(updateUser))
        dispatch(getPublicUser());
        setDeleteColorOpen(!deleteColorOpen)
        console.log('userData.colors',userData.colors)
        setDelColor('')
    };

    const [delColor,setDelColor]=useState('')
    function handlerRemoveColor() {
        // dispatch(removeColorAction(delColor))
        dispatch(removeColorUser(delColor))
        console.log('dispatch(removeColorAction())', delColor)
        setDelColor('')
    }

    return (
        <Box
             sx={{
                 // position: 'absolute',
                 // top: 0,
                 // left: 0,
                 width: '100%',
                 height: '100%',
                 // backgroundColor: backgroundColorCard === '' ? 'var(--background-color)' : backgroundColorCard,
                 display:'flex',
                 alignItems:'center'
             }}
        >
            <Box sx={{width:'100%'}}>
                <Typography variant='h6' sx={{textAlign: 'center', mb: 2, mt: 2}}>Выберите цвет for delete</Typography>
                <AnimatePresence>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Grid container sx={{pb:2}}>

                            {colorsUser.map((color, index) => (
                                <Grid
                                    onClick={()=>setDelColor(color)}
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
                                        // onClick={() => switcherColor(color)}
                                        variant='outlined'
                                        sx={{
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '50%',
                                            padding: 1,
                                            minWidth: 0,
                                            transition: 'background-color 0s',
                                            boxShadow: delColor === color ? 'var(--box-shadow)' : {},
                                            '&:hover': {border: 'none'}
                                        }}>
                                        < Avatar sx={{backgroundColor: color}}>
                                            {
                                                delColor === color ? <CheckIcon/> : <span></span>
                                            }
                                        </Avatar>
                                    </Button>
                                </Grid>
                            ))}
                            <Grid container sx={{display: 'flex',justifyContent:'space-between', mt: 2}}>
                                <Button onClick={handleExitAndPatchColor} color="primary" variant="contained">
                                    <ExitToAppIcon/>
                                </Button>
                                <Button
                                    onClick={handlerRemoveColor}
                                    disabled={delColor===''}
                                    variant="contained" color="error" startIcon={<DeleteIcon />}>
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                    </motion.div>

                </AnimatePresence>

            </Box>
        </Box>
    );
};

export default FullscreenDeleteColorComponent;
