import React from 'react';

const SubmitButton = (props) =>{

        function handleClick(e) {
          e.preventDefault();
          console.log('The link was clicked.');
        }

    return (
        <button className ='btn btn-primary sub-btn' onClick={handleClick}>Get({props.text})$</button>
    );
}

export default SubmitButton;