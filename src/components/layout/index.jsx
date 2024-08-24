import React, {useState} from 'react';
import TopBarComponent from "../top-bar";
import {Outlet, useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import SidebarComponent from "../sidebar/SidebarComponent";
// import {useStyles} from "./style"

const LayoutComponent = () => {
    const location = useLocation()
    const isNonMobile = useMediaQuery('(min-width:760px)')
    //burger menu
    const [isOpen, setIsOpen] = useState(false)


    return (
        location.pathname === '/login' || location.pathname === '/register'
            ? (
                <>
                    <Outlet/>
                </>
            )
            : (
                <>
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        width='100%'
                        height='100%'
                        position='relative'
                    >

                        <SidebarComponent
                            isNonMobile={isNonMobile}
                            drawerWidth='250px'
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                        <Box
                            display='flex'
                            flexDirection='column'
                            width='100%'
                        >
                            <TopBarComponent
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                isNonMobile={isNonMobile}
                            />

                            <Outlet/>
                        </Box>
                    </Box>

                </>
            )


    );
};

export default LayoutComponent;