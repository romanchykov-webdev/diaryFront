import React, { useState } from 'react';
import { Box } from "@mui/material";
import AppLoadingButton from "../loading-button/loadingButton";
import { updateUserPassword } from "../../store/thunks/auth";
import AlertComponent from "../alert/AlertComponent";
import { useDispatch } from "react-redux";
import { StyledGrid, StyledTextField, ButtonSubmitBlock } from "./style";

const ChangePasswordComponent = () => {
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const dispatch = useDispatch();

    const [snackbarMessage, setSnackbarMessage] = useState(null);
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");
    const [open, setOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                oldPassword: oldPassword,
                newPassword: newPassword
            };
            await dispatch(updateUserPassword(data)).unwrap();
            setSnackbarMessage(`Вы изменили свой старый пароль на: ${newPassword}`);
            setSnackbarSeverity("success");
            setOpen(true);
            setTimeout(() => setOpen(false), 2000);
        } catch (error) {
            setSnackbarMessage('Произошла ошибка при изменении пароля. Попробуйте еще раз.');
            setSnackbarSeverity("error");
            setOpen(true);
            setTimeout(() => setOpen(false), 2000);
        }
    };

    return (
        <StyledGrid
            component='form'
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <Box>
                <StyledTextField
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    type='text'
                    label='Старый пароль'
                    variant='outlined'
                />
                <StyledTextField
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type='text'
                    label='Новый пароль'
                    variant='outlined'
                />
                <ButtonSubmitBlock>
                    <AppLoadingButton type='submit'>
                        Изменить пароль
                    </AppLoadingButton>
                </ButtonSubmitBlock>
            </Box>
            {snackbarMessage && (
                <AlertComponent message={snackbarMessage} severity={snackbarSeverity} isOpen={open}/>
            )}
        </StyledGrid>
    );
};

export default ChangePasswordComponent;
