import React, {useEffect, useState} from 'react';
// ----------
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import {addRemoveLabelAction} from "../../bodyComponent/todoComponent/todocomponentSlice";
import {useDispatch, useSelector} from "react-redux";
import {Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@mui/material";
import {addNewLabelAction} from "../../../../store/slice/cardReducer/cardReducer";

const LabelPopupComponent = ({handleClose, openPopUpLabel, isOpenLabelPopup, setIsOpenLabelPopup}) => {

    const dispatch = useDispatch()

    // const labelsCart = useSelector((state) => state.cards.labels || [])
    const labelsCart = useSelector((state) => state.createNewTodo.labels)

    // const labels = ['first', 'second', 'sam label', 'ter', '444', '555', '6666', '77777', '888', '999']
    // console.log('labelsCart',labelsCart)


    // const labels = useMemo(() => ['first', 'second', 'sam label', 'ter', '444', '555', '6666', '77777', '888', '999'], []);
    const labels = useSelector((state) => state.cards.labels || [])

    const [valueInput, setValueInput] = useState('');

    // const [labelsCart, setLabelsCart] = useState([]);

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
        // if (labelsCart.includes(item)) {
        //     setLabelsCart(labelsCart.filter(label => label !== item));
        // } else {
        //     setLabelsCart([...labelsCart, item]);
        // }
        dispatch(addRemoveLabelAction(item))
    };


    function addNewLabel() {
        console.log('addNewLabel', valueInput)
        setValueInput('')
        dispatch(addRemoveLabelAction(valueInput))
        dispatch(addNewLabelAction(valueInput))
    }

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

export default LabelPopupComponent;

