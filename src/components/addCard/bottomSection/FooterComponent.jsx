import React from 'react';
import {WrapperBottom, WrapperCreateCard, WrapperExit} from "./style";
import {useDispatch} from "react-redux";
import {handlerExitAction} from "../addCardSlice";

const FooterComponent = () => {
    const dispatch = useDispatch();

    function handlerExit() {
        dispatch(handlerExitAction())
    }

    return (
        <WrapperBottom>
            <WrapperCreateCard>
                Create new card
            </WrapperCreateCard>
            <WrapperExit onClick={handlerExit}>
                Exit
            </WrapperExit>
        </WrapperBottom>
    );
};

export default FooterComponent;