import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import SubmitButton from './button.component';
import './emoji-preview.component.scss'
function EmojiCard(props){
    const [value] = React.useState(5);

    return (
        <div className="card col-3" key={props.id}>
                <div>
                    <span role='img' aria-labelledby='emoji' className ='image1'>{props.icon1}</span>
                    <span role='img' aria-labelledby='emoji' className ='image2'>{props.icon2}</span>
                    <span role='img' aria-labelledby='emoji' className ='image3'>{props.icon3}</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div className='stars'>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating value={value} readOnly />
                    </Box>
                    </div>
                   <SubmitButton onClick={props.title} text = {props.price} />
                </div>
                </div>
    )
}
export default EmojiCard;