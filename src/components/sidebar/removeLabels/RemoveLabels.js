import React, { useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import { getCardIds, removeLabelsFromCards} from "../../../store/thunks/cardActions/cardActions";
import {useTranslation} from "react-i18next";
// import {removeLabelsUser} from "../../../store/slice/cardReducer/cardReducer";
// import {removeLabelsFromUserCards} from "../../../store/thunks/cardActions/cardActions";

const RemoveLabels = () => {

    // translate
    const {t} = useTranslation();
    // translate

    const dispatch = useDispatch();

    const labels = useSelector((state) => state.cards.labels)

    const [removeLabels, setRemoveLabels] = useState([])
    // useEffect(()=>{
    //     setRemoveLabels(labels)
    // },[labels])

    const handlerRemoveLabels = () => {
        console.log(removeLabels)
        // dispatch(removeLabelsFromUserCards(removeLabels));
        // dispatch(getCardsByLabels(removeLabels));
        dispatch(removeLabelsFromCards(removeLabels))
            .then(() => {
                // После успешного обновления карточки на сервере, получаем обновленную карточку
                return dispatch(getCardIds())
            })
            .then((response) => {
                // Если запрос на получение обновленной карточки прошел успешно, данные можно будет использовать дальше
                // console.log('Updated card:', response.payload);
            })
            .catch((error) => {
                // Обработка ошибок
                console.error('Failed to update card:', error);
            });
        setRemoveLabels([])
        // dispatch(getCardIds())


    }

    const handlerGetLabel = (item) => {
        if (removeLabels.includes(item)) {
            setRemoveLabels(removeLabels.filter(i => i !== item));
        } else {
            setRemoveLabels([...removeLabels, item]);
        }

    }
    // console.log('removeLabels', removeLabels)
    return (

        <Accordion
            sx={{
                backgroundColor: 'transparent',
                width: '100%',
                boxShadow: 'none'
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {t('Remove Labels')}
            </AccordionSummary>
            <AccordionDetails>
                <FormGroup>
                    {labels.map((item, index) => (

                        <FormControlLabel
                            key={index}
                            sx={{
                                // color:'red',
                                // outline:'1px solid red',
                                width: '100%',
                                margin: 0,
                                '&:hover': {
                                    backgroundColor: 'var(--hover-color)'
                                }
                            }}

                            label={item}
                            control={<Checkbox
                                onClick={() => handlerGetLabel(item)}
                                onChange={() => handlerGetLabel(item)}
                                checked={removeLabels.includes(item)} sx={{cursor: 'auto'}}/>}
                        />
                    ))
                    }

                </FormGroup>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px'
                    }}
                >
                    <Button
                        onClick={handlerRemoveLabels}
                        variant="contained"
                        disabled={removeLabels.length === 0}
                    >
                        {t('Remove Labels')}
                    </Button>
                </Box>
            </AccordionDetails>
        </Accordion>

    );
};

export default RemoveLabels;