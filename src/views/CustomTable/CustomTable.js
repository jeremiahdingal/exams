import React from 'react';
import ProductInfo from '../../components/ProductInfo/ProductInfo.js';
import SortingArrows from '../../components/SortingArrows/SortingArrows';
import Actions from '../../components/Actions/Actions';
import Checkbox from '@material-ui/core/Checkbox';
import more from '../../assets/img/ellipsis-h.png'


import '../../assets/css/CustomTable.scss';

export default function CustomTable(props) {
    return(
        <div className="App">
            <table className = "gfg"> 

                  <tr> 
                        <th>
                          <Checkbox
                            color="default"
                          />
                        </th>
                      {props.columns.map((e)=>{
                            switch (e.header){
                                case 'picture':
                                    return(<th></th>)
                                case 'Product Information':
                                    return(<th className="prod-info-cell">{e.header}</th>);
                                case 'more':
                                    return(<th ><img src={more}/></th>);
                                default:
                                    return(<th className="sortable-header">
                                        <SortingArrows
                                            header={e.header}
                                        />
                                    </th>);
                            }
                      })}
                      
                  </tr> 
                 {
                    props.data.map((row)=>{
                        return(
                        <tr> 
                            <td>
                            <Checkbox
                                    color="default"
                                />
                            </td>
                            {row.map((e)=>{
                                switch (e.header){
                                    case 'picture':
                                        return(<td><img style={{marginRight:'15px'}} src={e.value}/></td>)
                                    case 'Product Information':
                                        return(<td className = "product-info"><ProductInfo/></td>);
                                    case 'more':
                                        return(<td><Actions/></td>);
                                    default:
                                        return(<td className='row-text'>
                                            {e.value}
                                        </td>);
                                }
                            })}
                        </tr>); 
                     })
                 }
                  
                  
            </table> 
    </div>
    );
}