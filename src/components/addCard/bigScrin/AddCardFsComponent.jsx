import React, {useEffect} from 'react';
import {WrapperSwitcher, IconWrapper, WrapperAddCardFs, WrapperList, WrapperBody} from "./style";
// import {ReactSVG} from "react-svg";
// import todoIcon from '../img/todo.svg'
// import todoIcon from '../img/todoIcon.svg'
import {useDispatch, useSelector} from "react-redux";
import {addTextAreaAction, addTodoAction} from "../addCardSlice";
import FooterComponent from "../bottomComponent/FooterComponent";
import HeaderComponent from "../headerComponent/HeaderComponent";
import BodyComponent from "../bodyComponent/BodyComponent";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import background from '../../../assets/image/backgroundImg/grocery_light_0609.svg'
const AddCardFsComponent = () => {
    const dispatch = useDispatch();

    const addCardSwitcher = useSelector((state) => state.addCard)
    // const todo = addCardSwitcher.todo
    // const textarea = addCardSwitcher.textarea
    const showSwitcher = addCardSwitcher.showSwitcher
    useEffect(() => {

    }, [addCardSwitcher]);

    function handlerArea() {
        dispatch(addTextAreaAction())
    }

    function handlerTodo() {
        dispatch(addTodoAction())
    }


    return (
        // <WrapperAddCardFs sx={{backgroundImage:`url(${background})`,backgroundSize:'cover',backgroundPositionX: 'right',
        //     backgroundPositionY: 'bottom'}}>
            <WrapperAddCardFs >
            {
                showSwitcher ? <WrapperSwitcher>
                        <WrapperList onClick={handlerArea} title='Нажмите, чтобы создать заметку'>
                            <h4>Text area... </h4>
                        </WrapperList>
                        <IconWrapper onClick={handlerTodo} title='Нажмите, чтобы создать список'>
                            {/*<ReactSVG src={todoIcon} style={{width:'40px', height:'40px'}}/>*/}
                            <FactCheckIcon/>
                        </IconWrapper>
                    </WrapperSwitcher>
                    : <WrapperBody>
                        <HeaderComponent/>
                        <BodyComponent/>
                        <FooterComponent/>
                    </WrapperBody>
            }

        </WrapperAddCardFs>
    );
};

export default AddCardFsComponent;


