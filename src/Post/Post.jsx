import React from 'react';
import Data from '../recordedAnswers.json'
import './Post.css';
const Post = (props) => {
    const { id, name, placeholder, handleChange } = props;
    return (
        <>
            <span className='required none'>* Required</span>
            <input className='form-control' key={id} id={name} placeholder={placeholder}
            name={name} type='textbox' maxLength={20} onChange={handleChange} required/>
        </>
    )
}
export default Post;