import React from 'react';
import TextAreaComponent from "./tetxareaComponent/TextAreaComponent";
import FullscreenBodyToDoList from "./todoComponent/FullscreenBodyToDoList";
import {WrapperBody} from "./style";

const Body = ({cardData}) => {

    const typeCard=cardData.typeCard
// const { textarea}=cardData
    // console.log(cardData)
    return (
        <WrapperBody>
            {
                typeCard==='textarea' ? <TextAreaComponent cardData={cardData}/>
                    : <FullscreenBodyToDoList cardData={cardData} />

            }

        </WrapperBody>
    );
};

export default Body;