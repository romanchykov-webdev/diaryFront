import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {WrapperBackground} from "./style";
import FullscreenBackgroundComponent from "./backgroundComponent/FullscreenBackgroundComponent";
import FullscreenColorsComponent from "./colorsComponent/FullscreenColorsComponent";
import {useTranslation} from "react-i18next";

const FullscreenBackgroundSwitcher = () => {

    // translate
    const {t} = useTranslation();
    // translate

    return (
        <WrapperBackground>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {t('Select color')}
                </AccordionSummary>
                <AccordionDetails>
                   <FullscreenColorsComponent/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    {t('Note background')}
                </AccordionSummary>
                <AccordionDetails>
                    <FullscreenBackgroundComponent/>
                </AccordionDetails>
            </Accordion>
        </WrapperBackground>
    );
};

export default FullscreenBackgroundSwitcher;