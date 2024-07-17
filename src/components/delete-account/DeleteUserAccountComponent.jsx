import React, { useState } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    FormControlLabel,
    FormGroup,
    Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../store/thunks/auth";
import { useDispatch } from "react-redux";
import { StyledGrid, TabHeading, AlertMessage, CheckBoxBlock, StyledCheckbox, BlockButton } from "./style";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {useTranslation} from "react-i18next";

const DeleteUserAccountComponent = () => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // translate
    const {t} = useTranslation();
    // translate

    function handlerButtonDeleteAccount() {
        console.log('ok');
        dispatch(deleteUser());
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('firstName');
        navigate('/login');
    }

    return (


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
                <Typography sx={{color:'red !important'}}>{t('Delete account')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <StyledGrid
                    component='form'
                    noValidate
                    autoComplete="off"
                >
                    <StyledGrid container>
                        <AlertMessage item>
                            <Typography variant='body1'>
                                {t('Dear user, by deleting your account, you delete all personal information. Once deleted, all of your saved information will no longer be available.')}
                            </Typography>
                        </AlertMessage>
                        <CheckBoxBlock item>
                            <FormGroup >
                                <FormControlLabel control={
                                    <StyledCheckbox
                                        checked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />} label={t('I agree')}
                                />
                            </FormGroup>
                        </CheckBoxBlock>
                        <BlockButton item>
                            <Button disabled={!checked}
                                    variant='outlined'
                                    style={{backgroundColor: checked ? 'blue' : 'grey'}}
                                    onClick={handlerButtonDeleteAccount}
                            >{t('Delete account')}</Button>
                        </BlockButton>
                    </StyledGrid>
                </StyledGrid>
            </AccordionDetails>
        </Accordion>



    );
};

export default DeleteUserAccountComponent;
