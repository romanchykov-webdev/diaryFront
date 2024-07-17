import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary,  Typography} from "@mui/material";
import AppLoadingButton from "../loading-button/loadingButton";
import {updateUserPassword} from "../../store/thunks/auth";
import AlertComponent from "../alert/AlertComponent";
import {useDispatch} from "react-redux";
import {StyledGrid, StyledTextField, ButtonSubmitBlock, WrapperChangePassword} from "./style";
import {useTranslation} from "react-i18next";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ChangePasswordComponent = ({isNonMobile, loading}) => {
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const dispatch = useDispatch();

    const [snackbarMessage, setSnackbarMessage] = useState(null);
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");
    const [open, setOpen] = useState(false);
    // translate
    const {t} = useTranslation();
    // translate
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                oldPassword: oldPassword,
                newPassword: newPassword
            };
            await dispatch(updateUserPassword(data)).unwrap();
            setSnackbarMessage(`${t('You have changed your old password to')}: ${newPassword}`);
            setSnackbarSeverity("success");
            setOpen(true);
            setTimeout(() => setOpen(false), 2000);
        } catch (error) {
            setSnackbarMessage(`${t('An error occurred while changing the password. Try again.')}`);
            setSnackbarSeverity("error");
            setOpen(true);
            setTimeout(() => setOpen(false), 2000);
        }
    };

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
                <Typography>{t("Change password")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <StyledGrid
                    component='form'
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <WrapperChangePassword>
                        <StyledTextField
                            sx={{
                                ...(!isNonMobile && {
                                    width: '100%',
                                }),
                            }}
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            type='text'
                            label={t('Old Password')}
                            variant='outlined'
                        />
                        <StyledTextField
                            sx={{
                                ...(!isNonMobile && {
                                    width: '100%',
                                }),
                            }}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            type='text'
                            label={t('New Password')}
                            variant='outlined'
                        />
                        <ButtonSubmitBlock>

                            <AppLoadingButton
                                onClick={handleSubmit}
                                loading={loading}
                                type="submit"
                                sx={{
                                    marginTop: 2,
                                    alignSelf: 'center',
                                    width: '60%',
                                    marginBottom: 2
                                }} variant="contained">
                                {t('Change password')}
                            </AppLoadingButton>

                        </ButtonSubmitBlock>
                    </WrapperChangePassword>
                    {snackbarMessage && (
                        <AlertComponent message={snackbarMessage} severity={snackbarSeverity} isOpen={open}/>
                    )}
                </StyledGrid>
            </AccordionDetails>
        </Accordion>

    );
};

export default ChangePasswordComponent;
