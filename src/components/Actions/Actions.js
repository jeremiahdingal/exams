import React from 'react';
import '../../assets/css/Actions.scss';
import folder from '../../assets/img/folder-plus.png';
import bell from '../../assets/img/bell-slash.png';
import more from '../../assets/img/ellipsis-v.png'

export default function Actions(props) {
    return(
        <div className="actionsCont">
            <div className="action"><img src={folder}/></div>
            <div className="action"><img src={bell}/></div>
            <div className="action"><img src={more}/></div>

        </div>
    );
}
