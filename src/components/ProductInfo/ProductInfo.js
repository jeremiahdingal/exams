import React from 'react';
import '../../assets/css/ProductInfo.scss';
import flag from '../../assets/img/flag.png';
import bone from '../../assets/img/skull-crossbones.png';
import lock from '../../assets/img/lock.png';
import thlist from '../../assets/img/th-list.png';
import cubes from '../../assets/img/cubes.png';
import dollar from '../../assets/img/comment-dollar.png';


export default function ProductInfo() {
    return(
        <div clasName="container">
            <div className="product-info-name">Toddler Fishing Game Gifts for 2 3 
            Year Old Girl and …</div>
            <div className="icons">
                <div>
                    <img src={flag}/>
                </div>
                
                <div className="code">
                    B078WLH42J
                </div>
                <div>
                    <img src={bone} className="icon"/>
                </div>
                <div>
                    <img src={lock}  className="icon"/>
                </div>
                <div>
                    <img src={thlist}  className="icon"/>
                </div>
                <div>
                    <img src={cubes}  className="icon"/>
                </div>
                <div>
                    <img src={dollar}  className="icon"/>
                </div>
                
            </div>
        </div>
    );
}