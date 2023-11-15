import React from 'react';
import Data from '../recordedAnswers.json';
// import '../index.css';
import './Answers.css';
const Answers = ({ id, date, name, snack }) => {
    return (
            <>
                    <div className='post-wrapper' key={ id }>
                        <div className='time-stamp'>{ date }</div>
                        <div className='each-post'>
                            <div className='name'>{ name }</div>
                            <div className='snack'>{ snack }</div>
                        </div>
                    </div>
            </>
    );
};

export default Answers;