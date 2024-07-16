import React from 'react';
import EyeIcon from '../../assets/image/auth/eye.svg';
import s from "../themeToggle/theme.module.css";
import {ReactSVG} from "react-svg";
import {BaraPassword, EyeWrapper} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {isVisiblePasswordAction} from "./sliceTogglePasswordIsVisible";

const EyeComponent = () => {

    const isVisible = useSelector(state => state.isVisiblePassword.isVisible);
    const dispatch = useDispatch();


    function handlerPassword() {
        dispatch(isVisiblePasswordAction(!isVisible));
    }

    return (
        <EyeWrapper onClick={handlerPassword}>
            <ReactSVG src={EyeIcon} className={s.icon} onClick={handlerPassword}/>
            {isVisible && <BaraPassword></BaraPassword>}

        </EyeWrapper>
    );
};

export default EyeComponent;