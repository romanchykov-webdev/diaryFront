import React, { useState } from 'react';
import {  Tabs, Tab,  useTheme } from "@mui/material";
import TabPanel from "../../components/tab-panel/TabPanel";
import { tabProps } from "../../utils/helpers";
import SettingsPersonalInfoComponent from "../../components/settings-personal-info/SettingsPersonalInfoComponent";
import ChangePasswordComponent from "../../components/change-password/ChangePasswordComponent";
import DeleteUserAccountComponent from "../../components/delete-account/DeleteUserAccountComponent";
import { RootGrid, TabsWrapperBox } from "./style";
import {tokens} from "../../theme";

const SettingsPage = () => {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <RootGrid>
            <TabsWrapperBox>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Setting tabs"
                    centered
                    textColor="secondary"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: colors.blue
                        },
                    }}
                >
                    <Tab label="Персональные данные" {...tabProps(0)} />
                    <Tab label="Изменить пароль" {...tabProps(1)} />
                    <Tab label="Удалить аккаунт" {...tabProps(2)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <SettingsPersonalInfoComponent />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ChangePasswordComponent />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <DeleteUserAccountComponent />
                </TabPanel>
            </TabsWrapperBox>
        </RootGrid>
    );
};

export default SettingsPage;
