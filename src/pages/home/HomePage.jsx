// rsc
import React from 'react';
import CardComponent from "../../components/card/CardComponent";
import {WrapperCards, WrapperHomePage} from "./style";
import AddCardMobiComponent from "../../components/addCard/mobile/AddCardMobiComponent";
import { useMediaQuery} from "@mui/material";
import AddCardFsComponent from "../../components/addCard/bigScrin/AddCardFsComponent";


const HomePage = () => {
    const isMobile = useMediaQuery('(max-width:760px)')
    console.log(isMobile)
    return (
        <WrapperHomePage >
            {
                isMobile ? <AddCardMobiComponent/> : <AddCardFsComponent/>
            }
            <AddCardFsComponent/>

            <WrapperCards>
                <CardComponent/>
            </WrapperCards>

        </WrapperHomePage>
    )


};

export default HomePage;
