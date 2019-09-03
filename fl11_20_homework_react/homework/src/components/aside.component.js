import React from 'react';
import ListItem from './aside-list.component';
import './aside-list.component.scss';

const ListContainer = () =>{
    return (
        <div className='aside col-3' id='aside'>
        <h3>Basket</h3>
          <ListItem /> 
        </div>         
    );
}
export default ListContainer;