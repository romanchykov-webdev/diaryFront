import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ThemeToggleComponent from "./ThemeToggleComponent";
import {useTranslation} from "react-i18next";

const AccordionToggleTheme = ({backgroundTheme}) => {

    // translate
    const {t} = useTranslation();
    // const language = useSelector((state) => state.language.language);
    // translate
    return (
        <>
            <Accordion sx={{
                backgroundColor: 'transparent',
                width: '100%',
                mb: 2,
                mt: 2
            }}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>{t("Select a theme for the application")}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box >
                            <Typography>{t('Active application theme')} : <b>{backgroundTheme}</b> </Typography>
                        </Box>

                        <ThemeToggleComponent item backgroundTheme={backgroundTheme}/>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default AccordionToggleTheme;