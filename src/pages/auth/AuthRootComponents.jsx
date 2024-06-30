import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Box} from "@mui/material";
import LoginPage from "./login/LoginPage";
import RegistrationPage from "./reg/RegistrationPage";

const AuthRootComponents = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Box sx={{p:2,width:'360px'}}>
            <form  >
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'-3px -2px 20px #202020'}
                >
                    {location.pathname === '/login'
                        ? <LoginPage
                            // setEmail={setEmail}
                            // setPassword={setPassword}
                            navigate={navigate}
                        />
                        : location.pathname === '/register' ?
                            <RegistrationPage
                                navigate={navigate}
                            />
                            : null}
                </Box>
            </form>
        </Box>
    );
};

export default AuthRootComponents;