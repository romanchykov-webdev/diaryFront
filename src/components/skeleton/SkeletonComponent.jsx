import React from 'react';

import './style.css'
import {WrapperLoader} from "./style";



const SkeletonComponent = () => {
    return (
        <WrapperLoader>

                    <span className="loader"></span>


        </WrapperLoader>
);
};

export default SkeletonComponent;