import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Typography, Box} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import {getPublicUser, updateUserInfo} from "../../../../../../../store/thunks/auth";
import {AnimatePresence, motion} from "framer-motion";


const FullscreenAddColorComponent = ({setDialogOpen, dialogOpen}) => {

    const userData = useSelector(state => state.auth.user);

    const backgroundColorCard = useSelector((state) => state.fullscreenToggle.card.backgroundColorCard);

    // const colorsUser = useSelector((state) => state.createNewTodo.colors);

    const dispatch = useDispatch();

    const [color, setColor] = useState('#ffffff');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleAddColor = () => {
        // dispatch(addUserColorAction(color));
        // dispatch(addNewColorAction(color))
        // console.log('color', color)
        const addColor = [...userData.colors, color]
        // console.log('addColor', addColor)
        const updateUser = {
            // "userName": userData.userName,
            // "email": userData.email,
            // "language": userData.language,
            // "themeModeDevice": userData.themeModeDevice,
            // "popupForNewUser": userData.popupForNewUser,
            // "avatar": userData.avatar,
            // "switcherFolder": userData.switcherFolder,
            "colors": addColor,
        }
        // console.log(updateUser)
        dispatch(updateUserInfo(updateUser))
        dispatch(getPublicUser());
        setDialogOpen(!dialogOpen)
    };

    return (
        <Box
            sx={{
                // position: 'absolute',
                // top: 0,
                // left: 0,
                width: '100%',
                height: '100%',
                // border:'1px solid red',
                // backgroundColor: backgroundColorCard === '' ? 'var(--background-color)' : backgroundColorCard,
                // display: 'flex',
                // alignItems: 'center',
                // border:'1px solid red'
            }}
        >
            <Box sx={{width: '100%'}}>
                <Typography variant='h6' sx={{textAlign: 'center', mb: 2, }}>Выберите цвет</Typography>


                        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                            <Box sx={{
                                overflow: 'hidden',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: color,
                                cursor: 'pointer'
                            }}>
                                <input
                                    type="color"
                                    value={color}
                                    style={{width: '100%', height: '100%', opacity: 0}}
                                    onChange={handleColorChange}
                                />
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex',flexDirection:'column',  gap: 2, mt: 2}}>
                            <Button onClick={() => setDialogOpen(!dialogOpen)} color="primary"
                                    variant="outlined">Отмена</Button>
                            <Button onClick={handleAddColor} color="primary" variant="contained"
                                    sx={{backgroundColor: color, textShadow: '1px 1px 1px black'}}>
                                {/*<Avatar sx={{ width:'40px',height:'40px', backgroundColor: color, marginRight: 1 }}>*/}
                                <CheckIcon/>
                                {/*</Avatar>*/}
                                Добавить
                            </Button>
                        </Box>

            </Box>
        </Box>
    );
};

export default FullscreenAddColorComponent;
