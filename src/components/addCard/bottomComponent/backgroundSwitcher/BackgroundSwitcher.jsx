import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {WrapperBackground} from "./style";
import ColorsComponent from "./colorsComponent/ColorsComponent";
import BackgroundComponent from "./backgroundComponent/BackgroundComponent";

const BackgroundSwitcher = () => {
    return (
        <WrapperBackground>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Switcher colors
                </AccordionSummary>
                <AccordionDetails>
                   <ColorsComponent/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Swicher background
                </AccordionSummary>
                <AccordionDetails>
                    <BackgroundComponent/>
                </AccordionDetails>
            </Accordion>
        </WrapperBackground>
    );
};

export default BackgroundSwitcher;