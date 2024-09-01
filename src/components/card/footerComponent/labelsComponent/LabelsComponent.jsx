import React from 'react';
import {WrapperLabel, WrapperLabelsComponent} from "./style";

const LabelsComponent = ({labelsCart}) => {
    return (
        <WrapperLabelsComponent>
            {
                labelsCart.map((item,index) => (
                    <WrapperLabel key={index}>
                        {item}
                    </WrapperLabel>

                ))
            }

        </WrapperLabelsComponent>
    );
};

export default LabelsComponent;