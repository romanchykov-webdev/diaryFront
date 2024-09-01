import React, {useEffect} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";

// import {updateUserPassword} from "../../store/thunks/auth";
import {useSelector} from "react-redux";
import {StyledGrid, StyledTextField, WrapperChangePassword} from "./style";
import {useTranslation} from "react-i18next";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ChangeUserNameComponent = ({isNonMobile, newUserName, setNewUserName}) => {

    // console.log('newUserName', newUserName)
    // const [newUserName, setNewUserName] = useState('');
    const oldUserName = useSelector((state) => state.auth.user.userName);

    useEffect(() => {
        if (newUserName === undefined) {
            setNewUserName(oldUserName)
        }
    }, [newUserName, oldUserName, setNewUserName]);

    // translate
    const {t} = useTranslation();
    // translate


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
                <Box sx={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography sx={{marginRight: 1}}>{t("User Name")}</Typography> :
                    <Typography variant='h6'
                                sx={{marginLeft: 1, textDecoration: 'underline'}}>{oldUserName}</Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <StyledGrid
                    component='form'
                    noValidate
                    autoComplete="off"
                >
                    <WrapperChangePassword>
                        <Typography>

                        </Typography>
                        <StyledTextField
                            sx={{
                                ...(!isNonMobile && {
                                    width: '100%',
                                }),
                            }}
                            value={newUserName || ''}
                            onChange={(e) => setNewUserName(e.target.value)}
                            type='text'
                            label={t('New user name')}
                            variant='outlined'
                        />

                    </WrapperChangePassword>

                </StyledGrid>
            </AccordionDetails>
        </Accordion>

    );
};

export default ChangeUserNameComponent;
