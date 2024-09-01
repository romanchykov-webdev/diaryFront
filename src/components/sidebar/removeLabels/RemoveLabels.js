import React, { useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import { removeLabelsFromCards} from "../../../store/thunks/cardActions/cardActions";
// import {removeLabelsFromUserCards} from "../../../store/thunks/cardActions/cardActions";

const RemoveLabels = () => {

    const dispatch=useDispatch();

    const labels=useSelector((state)=>state.cards.labels)

    const [removeLabels, setRemoveLabels] = useState([])

    const handlerRemoveLabels = () => {
        console.log(removeLabels)
        // dispatch(removeLabelsFromUserCards(removeLabels));
        // dispatch(getCardsByLabels(removeLabels));
        dispatch(removeLabelsFromCards(removeLabels));

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
                Remove Labels
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
                        remove labels
                    </Button>
                </Box>
            </AccordionDetails>
        </Accordion>

    );
};

export default RemoveLabels;