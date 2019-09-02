import React from 'react';

import { EmojiPreview } from './emoji-preview';
import classes from './emoji.component.scss';

const  Emoji = () =>{
    return (
        <>
        <EmojiPreview 
        emoji = 'KissEmg'
        title= 'Kiss'
        code='123'
        />
        </>
    )
}

export default Emoji;