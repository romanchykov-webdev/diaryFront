import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from "../../locales/languageSlice";
import {useTranslation} from "react-i18next";

import {ButtonChangeLanguage, WrapperAccordionDetails, WrapperLanguageComponent} from "./style";

const LanguageComponent = () => {
    // translate
    const dispatch = useDispatch();
    // const language = useSelector((state) => state.language.language);
    const {t} = useTranslation();
    // const language = useSelector((state) => state.language.language);

    const handleLanguageChange = (lng) => {
        dispatch(changeLanguage(lng));
    };
    // translate

    // theme cast
    const backgroundTheme = useSelector((state) => state.theme.themeMode)
    // theme cast
    return (
        <WrapperLanguageComponent sx={{
            backgroundColor: backgroundTheme === 'tomato' ? '#ff6347' : 'transparent',
            width: '100%',
            mb: 2
        }}>
            <Accordion sx={{
                backgroundColor: backgroundTheme === 'tomato' ? '#ff6347' : {},
                width: '100%'
            }}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>{t("Change application language")}</Typography>
                </AccordionSummary>

                <AccordionDetails

                >
                    <Grid container gap={2} justifyContent="center" mt='5px'>
                        <ButtonChangeLanguage
                            item sm={12}  md={4}
                            variant="outlined"
                            onClick={() => handleLanguageChange('en')}>English</ButtonChangeLanguage>
                        <ButtonChangeLanguage
                            item sm={12}  md={4}
                            variant="outlined"
                            onClick={() => handleLanguageChange('ru')}>Русский</ButtonChangeLanguage>
                        <ButtonChangeLanguage
                            item sm={12}  md={4}
                            variant="outlined"
                            onClick={() => handleLanguageChange('it')}>Italiano</ButtonChangeLanguage>
                    </Grid>
                </AccordionDetails>

            </Accordion>

        </WrapperLanguageComponent>
    );
};

export default LanguageComponent;