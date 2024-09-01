import React, {useState, useEffect} from 'react';
// import {format} from 'date-fns';
import {useDispatch} from "react-redux";
import {getTimeDataAction} from "./sliceTimeData";

const DateTimeDisplay = () => {
    const [dateTime, setDateTime] = useState(new Date());

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        dispatch(getTimeDataAction(dateTime))
        // Очистка интервала при размонтировании компонента
        return () => clearInterval(timer);
    }, [dispatch,dateTime]);

    return (
        <></>
        // <div>
        //     <p>Текущая дата и время: {format(dateTime, 'PPpp')}</p>
        // </div>
    );
};

export default DateTimeDisplay;
