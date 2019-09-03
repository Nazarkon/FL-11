import React from 'react';
import ReactDOM from 'react-dom';
import  Handler from "./handler-btn.component.js";
const SubmitButton = (props) =>{

        function handleClick(e) {
          e.preventDefault();
          console.log('The link was clicked.');
          ReactDOM.render(<Handler />,document.getElementById('list'))
        }

    return (
        <button className ='btn btn-primary sub-btn' onClick={handleClick}>Get({props.text})$</button>
    );
}

export default SubmitButton;