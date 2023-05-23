import React from 'react';

function clearInput() {
    
}

const CommentInput = (props) => {
    return (
        <div>
            {props.title} <input value={props.value} onChange={props.changeHandler} />
        </div>
    )
}

export default CommentInput;