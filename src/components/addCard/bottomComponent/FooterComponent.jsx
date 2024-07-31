import React from 'react';
import {WrapperBottom, WrapperCreateCard, WrapperExit, WrapperFooter} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {
    // createNewCardAction,
    handlerExitAction
} from "../addCardSlice";
import {exitAction} from "../bodyComponent/todoComponent/todocomponentSlice";
import BackgroundSwitcher from "./backgroundSwitcher/BackgroundSwitcher";
import {motion, AnimatePresence} from 'framer-motion';
// import {v4 as uuidv4} from "uuid";
import {createCard} from "../../../store/thunks/cardActions/cardActions";
// import DateTimeDisplay from "../timeDataComponent/TimeDataComponent";

const FooterComponent = () => {
    const dispatch = useDispatch();
    const card = useSelector((state) => state.createNewTodo)
    const userId = useSelector((state) => state.auth.user.id)
    const colorsSwitcher = card.colorsSwitcher

    function handlerExit() {
        dispatch(handlerExitAction())
        dispatch(exitAction())
    }

    const handlerAddCard = () => {
        const item = {
            userId:userId,
            todo: card.todo,
            todoCompleted: card.todoCompleted,
            textarea: card.textarea,
            isFavorite: card.isFavorite,
            colors: card.backgroundColorCard,
            colorsSwitcher: false,
            labels: card.labels,
            title: card.title,
            backgroundColorCard: card.backgroundColorCard,
        }
        // dispatch(createNewCardAction({item}))
        dispatch(createCard(item))
        console.log(item)
    }

    return (
        <WrapperFooter>

            <AnimatePresence>
                {colorsSwitcher && (
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: 'auto', opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.5}}
                    >
                        <BackgroundSwitcher/>
                    </motion.div>
                )}
            </AnimatePresence>

            <WrapperBottom>
                <WrapperCreateCard onClick={handlerAddCard}>
                    Create new card
                </WrapperCreateCard>
                <WrapperExit onClick={handlerExit}>
                    Exit
                </WrapperExit>
            </WrapperBottom>
            {/*<DateTimeDisplay/>*/}
        </WrapperFooter>
    );
};

export default FooterComponent;