import React from 'react';
import ListItem from './aside-list.component';

const ListContainer = () =>{
    return (
        <div className='aside col-3'>
        <h3>Basket</h3>
          <ListItem /> 
        </div>         
    );
}
export default ListContainer;