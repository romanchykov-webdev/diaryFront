import React, {useEffect} from 'react';
// import {Box} from "@mui/material";
// import {useSelector} from "react-redux";
// import {keyframes} from '@mui/system';
import './style.css'
import {useSelector} from "react-redux";

const IsLoadComponent = ({isLoading}) => {
    // const isLoading = useSelector(state => state.auth.isLoading);
    const isUpdateCard = useSelector(state => state.cards.loading);
    // console.log('isLoading',isLoading)
    useEffect(() => {

    }, [isLoading]);

    return (
        <div className='wrapperLoader' >
            <span className="loader"
                  style={{
                      opacity: (isLoading || isUpdateCard) ? 1 : 0,
                      animation: (isLoading || isUpdateCard) ? 'rotation 1s linear infinite' : 'none',
            }}
            ></span>

        </div>

    );
};

export default IsLoadComponent;