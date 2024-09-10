import React from 'react';
import TextareaComponentSmall from "./textareaComponent/TextareaComponentSmall";
import {Box} from "@mui/material";
import TodoComponentSmall from "./todoComponent/TodoComponentSmall";
import {useDispatch} from "react-redux";
import {fullscreenToggleAction} from "../cardsSlice";
import {getCardIds} from "../../../store/thunks/cardActions/cardActions";
import {useTranslation} from "react-i18next";

const BodyComponent = ({todo, todoCompleted, textarea, i}) => {



    const dispatch = useDispatch();
    const typeCard = i.typeCard
        // console.log('typeCard',typeCard)

        function
    handlerFullscreen()
    {
        // console.log('click body component')
        // console.log('card', i)
        dispatch(fullscreenToggleAction(i))
        dispatch(getCardIds());
            document.body.style.overflow = 'hidden';
        // document.body.style.overflow = 'hidden';


    }

    // const isOverflowHiddenBody = useSelector((state) => state.fullscreenToggle.fullscreen)


    return (
        <Box

            sx={{
                // flex: '1 1 auto',
                // ...sx,
                padding: '0 !important',
                position: 'relative',
                height: '100%',
                overflow: 'hidden',

            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer',
                    zIndex: '10',
                    // border:'1px solid red',
                }}
                onClick={handlerFullscreen}
            ></Box>
            <Box
                sx={{
                    height: '100%',
                    overflow: 'hidden',

                }}
            >
                {
                    typeCard === 'textarea' ? <TextareaComponentSmall textarea={textarea}/>
                        : <Box sx={{
                            // border: '1px solid red',
                            height: '100%',
                            overflow: 'hidden',

                        }}
                        >
                            <TodoComponentSmall todo={todo} todoCompleted={todoCompleted}/>
                        </Box>
                }
            </Box>

        </Box>
    );
};

export default BodyComponent;