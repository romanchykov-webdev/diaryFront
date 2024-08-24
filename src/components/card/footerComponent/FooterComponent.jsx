import React from 'react';
import LabelsComponent from "./labelsComponent/LabelsComponent";
import {WrapperFooter} from "./style";

const FooterComponent = ({i}) => {
    return (
        <WrapperFooter>
            <LabelsComponent labelsCart={i.labels}/>
        </WrapperFooter>
    );
};

export default FooterComponent;