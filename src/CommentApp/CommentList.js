import React from 'react';


const CommentList = (props) => {
    return (
        <div>
            {
                props.comments.map((item) =>(
                    <div key={item.comments + item.user}><li>
                        {item.user} Rating : {item.rating}<br/>&emsp;&nbsp;{item.comments}
                    </li>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default CommentList;