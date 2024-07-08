import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import AppLoadingButton from "../loading-button/loadingButton";
import { getPublicUser, updateUserInfo } from "../../store/thunks/auth";
import { useDispatch, useSelector } from "react-redux";
import { StyledGrid, StyledTextField, ButtonBlock } from "./style";

const SettingsPersonalInfoComponent = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const { user } = useSelector(state => state.auth.user);

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName);
            setUserName(user.userName);
            setEmail(user.email);
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            firstName: firstName,
            userName: userName,
            email: email,
        };
        dispatch(updateUserInfo(data));
        dispatch(getPublicUser());
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
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    type='text'
                    label='Имя'
                    variant='outlined'
                />
                <StyledTextField
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    type='text'
                    label='UserName'
                    variant='outlined'
                />
                <StyledTextField
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type='text'
                    label='Email'
                    variant='outlined'
                />
                <ButtonBlock>
                    <AppLoadingButton type='submit'>
                        Сохранить
                    </AppLoadingButton>
                </ButtonBlock>
            </Box>
        </StyledGrid>
    );
};

export default SettingsPersonalInfoComponent;
