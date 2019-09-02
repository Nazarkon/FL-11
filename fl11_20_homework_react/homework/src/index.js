import React from 'react';
import ReactDOM from 'react-dom';
import ArticleTitle from './components/article.module';
import ListContainer from './components/aside.module';
import CardContainer from './components/card-container';

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

ReactDOM.render(<Container />,document.getElementById('root'));