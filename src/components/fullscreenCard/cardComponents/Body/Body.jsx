import React from 'react';
import TextAreaComponent from "./tetxareaComponent/TextAreaComponent";
import FullscreenBodyToDoList from "./todoComponent/FullscreenBodyToDoList";
import {WrapperBody} from "./style";
import {useSelector} from "react-redux";

const Body = () => {


    const cardData=useSelector((state)=>state.fullscreenToggle.card);



    const typeCard=cardData.typeCard
// const { textarea}=cardData
    // console.log(cardData)
    return (
        <WrapperBody>
            {
                typeCard==='textarea' ? <TextAreaComponent cardData={cardData}/>
                    : <FullscreenBodyToDoList  />

            }

        </WrapperBody>
    );
};

export default Body;