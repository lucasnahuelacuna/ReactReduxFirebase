import React from 'react';

const PostSummary = ({post}) => {
    return (
        <div className="card  post-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{post.title}</span>
                <p>Posted by Lucas Acuña</p>
                <p className="grey-text">14th January, 8pm</p>
            </div>
        </div>
    )
}
 
export default PostSummary;