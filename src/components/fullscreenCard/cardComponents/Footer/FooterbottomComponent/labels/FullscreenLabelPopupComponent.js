import React, {useEffect, useState} from 'react';
import Dialog from "@mui/material/Dialog";
import {Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {LabelAddRemoveLabelAction} from "../../../../../card/cardsSlice";
import {addNewLabelAction} from "../../../../../../store/slice/cardReducer/cardReducer";

const FullscreenLabelPopupComponent = ({openPopUpLabel, handleClose, saveCard}) => {
    const dispatch = useDispatch()


    const labelsCart = useSelector((state) => state.fullscreenToggle.card.labels)

    const labels = useSelector((state) => state.cards.labels || [])

    const [valueInput, setValueInput] = useState('');


    function findLabel(e) {
        setValueInput(e.target.value)
    }

    const [filteredLabels, setFilteredLabels] = useState(labels);

    const [buttonAddLabels, setButtonAddLabels] = useState(false);


    useEffect(() => {

        setFilteredLabels(
            labels.filter(label =>
                label.toLowerCase().includes(valueInput.toLowerCase())
            )
        );
    }, [valueInput, labels]);

    useEffect(() => {
        if (valueInput !== '') {
            setButtonAddLabels(true);
        } else if (valueInput === filteredLabels[0] || valueInput === '') {
            setButtonAddLabels(false);
        }
    }, [valueInput, filteredLabels]);

    const handlerGetLabel = (item) => {

        dispatch(LabelAddRemoveLabelAction(item))
        // console.log('handlerGetLabel')
    };


    function addNewLabel() {
        dispatch(LabelAddRemoveLabelAction(valueInput))
        dispatch(addNewLabelAction(valueInput))
        setValueInput('')
    }

    // console.log('labelsCart', labelsCart)

    return (
        <React.Fragment>

            <Dialog

                // fullScreen={fullScreen}
                open={openPopUpLabel}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{
                    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {backgroundColor: 'var(--background-color)'}
                }}
            ><Box sx={{padding: '10px', borderRadius: 'var(--border-radius12)'}}>
                <Typography variant="body1" sx={{fontSize: '12px', textAlign: 'center', mb: '10px'}}>Добавить
                    ярлык</Typography>
                <TextField
                    sx={{marginBottom: '10px'}}
                    autoComplete="off"
                    variant="standard"
                    value={valueInput}
                    onChange={(e) => findLabel(e)}
                    placeholder='Введите название ярлыка'
                />
                <DialogContent sx={{padding: 0}}>


                    <FormGroup>
                        {filteredLabels && filteredLabels.map((item, index) => (

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
                                onClick={() => handlerGetLabel(item)}
                                onChange={() => handlerGetLabel(item)}
                                label={item}
                                control={<Checkbox checked={labelsCart.includes(item)} sx={{cursor: 'auto'}}/>}
                            />
                        ))
                        }
                        {

                        }


                    </FormGroup>


                </DialogContent>
                <DialogActions>
                    {
                        buttonAddLabels && <Button onClick={addNewLabel}>add labels</Button>
                    }

                    <Button onClick={() => {
                        handleClose();
                        setValueInput('');
                    }}>
                        exit
                    </Button>
                </DialogActions>
            </Box>
            </Dialog>
        </React.Fragment>
    );
};

export default FullscreenLabelPopupComponent;