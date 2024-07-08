import React from 'react';
import EyeIcon from '../../assets/image/auth/eye.svg';
import s from "../themeToggle/theme.module.css";
import {ReactSVG} from "react-svg";

const EyeComponent = () => {
    function handlerPassword() {

    }

    return (
        <div>
            <ReactSVG src={EyeIcon} className={s.icon} onClick={handlerPassword} />
        </div>
    );
};

export default EyeComponent;