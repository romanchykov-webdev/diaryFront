import React from 'react';
import {WrapperBottom, WrapperCreateCard, WrapperExit, WrapperFooter} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {handlerExitAction} from "../addCardSlice";
import {exitAction} from "../bodyComponent/todoComponent/todocomponentSlice";
import BackgroundSwitcher from "./backgroundSwitcher/BackgroundSwitcher";
import {motion,AnimatePresence} from 'framer-motion';

const FooterComponent = () => {
    const dispatch = useDispatch();
    const colorsSwitcher = useSelector((state) => state.createNewTodo.colorsSwitcher)

    function handlerExit() {
        dispatch(handlerExitAction())
        dispatch(exitAction())
    }

    return (
        <WrapperFooter>

            <AnimatePresence>
                {colorsSwitcher && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <BackgroundSwitcher />
                    </motion.div>
                )}
            </AnimatePresence>

            <WrapperBottom>
                <WrapperCreateCard>
                    Create new card
                </WrapperCreateCard>
                <WrapperExit onClick={handlerExit}>
                    Exit
                </WrapperExit>
            </WrapperBottom>
        </WrapperFooter>
    );
};

export default FooterComponent;