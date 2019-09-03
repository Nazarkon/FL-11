import React from 'react';
import EmojiPreview from './emoji-preview.component.js'

 class PersonList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            emoji: []
        }
    }

    componentDidMount() {
    fetch(`http://localhost:1337/emoji-shop`)
    .then(resp => resp.json())
    .then(data => {
        this.setState({ emoji: data.emoji })
    });
    };

    render() {
    if (this.state.emoji.length === 0) {
        return <p>Loading...</p>
    }
        return this.state.emoji.map(emoji => {
            return (
                <>
                {console.log(emoji.id)}
              <EmojiPreview 
                id = {emoji.id}
                icon1 = {emoji.emoji[0].char}
                icon2 = {emoji.emoji[1].char}
                icon3 = {emoji.emoji[2].char}
                title = {emoji.title}
                price = {emoji.price}
                />
                </>
               
        )
        })
    }
}

export default PersonList;