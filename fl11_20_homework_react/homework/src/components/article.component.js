import React from 'react';
import './article.component.scss';
import './container.component.scss';
import SubmitButton from './button.component';

const ArticleTitle = () =>{
    return (
        <div className='article col-9'>
            <h1>New!Flowers pack!</h1>
            <h3>Includes</h3>
            <SubmitButton text ='Get (1.5$)'/>
        </div>
    );
}

export default ArticleTitle;