import React from 'react';


const CommentFilter = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

export default CommentFilter;