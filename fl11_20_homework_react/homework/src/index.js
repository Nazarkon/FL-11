import React from 'react';
import ReactDOM from 'react-dom';
import ArticleTitle from './components/article.component.js';
import ListContainer from './components/aside.component.js';
import CardContainer from './components/card-container.component.js';

import './components/article.component.scss';

const Container = () =>{
    return (
        <div className='container d-flex'>
        <div className = 'row col-12'>
            <ArticleTitle />
            <ListContainer /> 
            <CardContainer />
        </div>
        </div>

    );
}


ReactDOM.render(<Container />,document.getElementById('root'))