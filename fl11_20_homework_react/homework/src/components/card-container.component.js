import React from 'react';
import PersonList from './emoji-card.component.js'
import './card-container.component.scss'

const CardContainer = () =>{

    return (
        <div className = 'card-container col-9'>
          <PersonList />
           </div>
    );
}

export default CardContainer;