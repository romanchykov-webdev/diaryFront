import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {WrapperFooter} from "./style";
import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import PaletteIcon from "@mui/icons-material/Palette";
import {colorsAction} from "../../../addCard/bodyComponent/todoComponent/todocomponentSlice";
import {AnimatePresence, motion} from "framer-motion";
import FullscreenBackgroundSwitcher from "./FooterbottomComponent/backgroundSwitcher/FullscreenBackgroundSwitcher";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import FullscreenLabelPopupComponent from "./FooterbottomComponent/labels/FullscreenLabelPopupComponent";
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteCard} from "../../../../store/thunks/cardActions/cardActions";
import {fullscreenToggleAction} from "../../../card/cardsSlice";
import {useTranslation} from "react-i18next";

const Footer = ({saveCard,cardId, handlerCloseFullscreen,}) => {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch();

    // translate
    const {t} = useTranslation();
    // translate

    const labels = useSelector((state) => state.fullscreenToggle.card.labels)
    // update updateFullscreenCard
    // Внутренний таймер для debounce
    // const [debounceTimeout, setDebounceTimeout] = useState(null);
    // const updateFullscreenCard=useCallback((updateItem) => {
    //     // Если таймер уже существует, сбрасываем его
    //     if (debounceTimeout) {
    //         clearTimeout(debounceTimeout);
    //     }
    //
    //
    //     // Обновляем карточку на сервере
    //     const timeout = setTimeout(() => {
    //
    //         dispatch(updateCard({ cardId: updateItem.id, cardData: updateItem }))
    //             .then(() => {
    //                 // После успешного обновления карточки на сервере, получаем обновленную карточку
    //                 return dispatch(getCardById(updateItem.id));
    //             })
    //             .then((response) => {
    //                 // Если запрос на получение обновленной карточки прошел успешно, данные можно будет использовать дальше
    //                 console.log('Updated card:', response.payload);
    //             })
    //             .catch((error) => {
    //                 // Обработка ошибок
    //                 console.error('Failed to update card:', error);
    //             });
    //     },1000);
    //
    //
    //     setDebounceTimeout(timeout);
    //     // Для отладки
    //     // console.log('i', i);
    //     // console.log('updateItem', updateItem);
    // }, [debounceTimeout, cardData, dispatch]);
    // update updateFullscreenCard

    function addColorsToUser() {
        dispatch(colorsAction(user.colors))
        setColorsSwitcher(!colorsSwitcher)
    }

    const [colorsSwitcher, setColorsSwitcher] = useState(false)


    // label popup
    const [openPopUpLabel, setOpenPopUpLabel] = React.useState(false);

    const handleClickOpen = () => {
        setOpenPopUpLabel(true);


    };

    const handleClose = () => {
        setOpenPopUpLabel(false);
        // dispatch(updateCard())
    };
    // label popup

    // delete card
    const handlerDeleteCard=()=>{
        // console.log('cardId',cardId)
        dispatch(deleteCard(cardId))
        dispatch(fullscreenToggleAction())
    }
    // delete card

    return (
        <WrapperFooter
            sx={{
                width: '100%',
                // marginTop: '10px',
            }}
        >
            <Box sx={{
                overflow: 'hidden',
                // overflowX: 'scroll',
                width: '100%',
                padding: labels.length>0 ? '5px 0' : 0,
                display: 'flex',
                alignItems: 'center',

                overflowX: 'scroll',
                scrollbarWidth: 'none',

                '& ::-webkit-scrollbar': {
                    display: 'none'
                }
            }}>
                {
                    labels.map((item, index) => (
                    <span key={index} style={{
                        border: '1px solid var(--border-color)',
                        padding: '2px 5px',
                        borderRadius: '5px',
                        marginRight: '5px',
                    }}>    {item}</span>
                ))
                }
            </Box>
            <Box
                sx={{
                    height: 'auto',
                    overflow: 'hidden',
                    width:'100%',
                }}
            >
                <AnimatePresence>
                    {colorsSwitcher && (
                        <motion.div
                            initial={{height: 0, opacity: 0, width: '100%', backdropFilter: 'blur(5px)'}}
                            animate={{height: 'auto', opacity: 1}}
                            exit={{height: 0, opacity: 0}}
                            transition={{duration: 0.5}}
                        >
                            <FullscreenBackgroundSwitcher/>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        // outline:'1px solid red',
                        '& svg': {
                            width: '50px',
                            height: '50px',
                            cursor: 'pointer',
                        }
                    }}
                >
                    <PaletteIcon onClick={addColorsToUser}/>
                    <BeenhereIcon onClick={handleClickOpen}/>
                    <DeleteIcon onClick={handlerDeleteCard}/>
                    <Button
                        sx={{
                            height: '50px',
                            // width: '50%',
                        }}
                        variant="outlined"
                        onClick={saveCard}>{t('Save')}</Button>

                    {/*    label*/}
                    <AnimatePresence>
                        <motion.div
                            initial={{height: 0,}}
                            animate={{height: 'auto',}}
                            exit={{height: 0,}}
                            transition={{duration: 0.5}}
                        >
                            <FullscreenLabelPopupComponent
                                openPopUpLabel={openPopUpLabel}
                                handleClose={handleClose}
                                saveCard={saveCard}

                            />
                        </motion.div>
                    </AnimatePresence>

                    {/*    label*/}


                </Box>
                {/*<Box*/}
                {/*    sx={{*/}
                {/*        width: '50%',*/}
                {/*        display: 'flex',*/}
                {/*        alignItems: 'center',*/}
                {/*        justifyContent: 'center',*/}
                {/*        // outline:'1px solid red',*/}
                {/*        height: '50px',*/}
                {/*    }}>*/}

                {/*    <Button*/}
                {/*        sx={{*/}
                {/*            height: '100%',*/}
                {/*            width: '50%',*/}
                {/*        }}*/}
                {/*        variant="outlined"*/}
                {/*        onClick={saveCard}>Save</Button>*/}
                {/*</Box>*/}
            </Box>
        </WrapperFooter>
    );
};

export default Footer;