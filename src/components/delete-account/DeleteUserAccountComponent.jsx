import React, { useState } from 'react';
import {Button, FormControlLabel, FormGroup, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../store/thunks/auth";
import { useDispatch } from "react-redux";
import { StyledGrid, TabHeading, AlertMessage, CheckBoxBlock, StyledCheckbox, BlockButton } from "./style";

const DeleteUserAccountComponent = () => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handlerButtonDeleteAccount() {
        console.log('ok');
        dispatch(deleteUser());
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('firstName');
        navigate('/login');
    }

    return (
        <StyledGrid container>
            <TabHeading item>
                <Typography variant="h2">Удаление аккаунта</Typography>
            </TabHeading>
            <AlertMessage item>
                <Typography variant='body1'>
                    Уважаемый пользователь, удаляя свой аккаунт, вы удаляете все персональную информацию. После удаления вся сохраненная вами информация будет недоступна.
                </Typography>
            </AlertMessage>
            <CheckBoxBlock item>
                <FormGroup>
                    <FormControlLabel control={
                        <StyledCheckbox
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />} label="Я соглашаюсь"
                    />
                </FormGroup>
            </CheckBoxBlock>
            <BlockButton item>
                <Button disabled={!checked}
                        variant='outlined'
                        style={{backgroundColor: checked ? 'blue' : 'grey'}}
                        onClick={handlerButtonDeleteAccount}
                >Удалить аккаунт</Button>
            </BlockButton>
        </StyledGrid>
    );
};

export default DeleteUserAccountComponent;
