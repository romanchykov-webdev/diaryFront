import React, {useEffect, useState} from 'react';
import {WrapperBottom, WrapperCreateCard, WrapperExit, WrapperFooter} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {
    handlerExitAction
} from "../addCardSlice";
import {exitAction} from "../bodyComponent/todoComponent/todocomponentSlice";
import BackgroundSwitcher from "./backgroundSwitcher/BackgroundSwitcher";
import {motion, AnimatePresence} from 'framer-motion';
// import {v4 as uuidv4} from "uuid";
import {createCard} from "../../../store/thunks/cardActions/cardActions";
import {useTranslation} from "react-i18next";
// import DateTimeDisplay from "../timeDataComponent/TimeDataComponent";


const FooterComponent = () => {

    // translate
    const {t} = useTranslation();
    // translate

    const createTextarea=useSelector((state) => state.addCard.textarea);
    const createTodo=useSelector((state) => state.addCard.todo);

    const [typeNewCard,setTypeNewCard]=useState('');

    useEffect(()=>{
        if(createTextarea){
            setTypeNewCard('textarea');
        }else if(createTodo){
            setTypeNewCard('todo');
        }
    },[createTextarea,createTodo])

    const dispatch = useDispatch();
    const card = useSelector((state) => state.createNewTodo)
    // const userId = useSelector((state) => state.auth.user.id)
    const user = useSelector((state) => state.auth.user)
    const tootCards=useSelector((state) => state.cards.cards)
    console.log(tootCards.length)
    const userId = user.id
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
            order:tootCards.length +1,
            typeCard:typeNewCard
        }
        // console.log('item',item)
        dispatch(createCard(item))
        dispatch(handlerExitAction())
        dispatch(exitAction())
        // console.log(item)
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
                    {t('Create new card')}
                </WrapperCreateCard>
                <WrapperExit onClick={handlerExit}>
                    {t('Exit')}
                </WrapperExit>
            </WrapperBottom>
            {/*<DateTimeDisplay/>*/}
        </WrapperFooter>
    );
};

export default FooterComponent;