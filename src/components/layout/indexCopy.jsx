import React, { useState } from 'react';
import TopBarComponent from "../top-bar";
import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import SidebarComponent from "../sidebar/SidebarComponent";
import { MainSection, DynamicBox } from "./style";

const LayoutComponent = () => {
    const location = useLocation();
    const isNonMobile = useMediaQuery('(min-width:760px)');
    const [isOpen, setIsOpen] = useState(false);

    return (
        location.pathname === '/login' || location.pathname === '/register'
            ? <Outlet />
            : (
                <DynamicBox isNonMobile={isNonMobile}>
                    <h1>in DynamicBox</h1>
                    <SidebarComponent
                        isNonMobile={isNonMobile}
                        drawerWidth='250px'
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                    <MainSection>
                        <TopBarComponent
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            isNonMobile={isNonMobile}
                        />
                        <Outlet />
                    </MainSection>
                </DynamicBox>
            )
    );
};

export default LayoutComponent;
