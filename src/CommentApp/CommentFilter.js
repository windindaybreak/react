import React from 'react';


const CommentFilter = (props) => {
    return (
        <button onClick={props.onclick}>{props.text}</button>
    )
}

export default CommentFilter;