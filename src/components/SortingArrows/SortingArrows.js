import React from 'react';
import '../../assets/css/SortingArrows.scss';
import downArrow from '../../assets/img/caret-left.png';
import upArrow from '../../assets/img/caret-right.png';

export default function SortingArrows(props) {
    return(
        <div className="headCont">
            <div>{props.header}</div>
            <div>
            <div className="arrow"><img src={upArrow}/></div>
            <div  className="arrow"><img src={downArrow}/></div>
            </div>
        </div>
    );
}
