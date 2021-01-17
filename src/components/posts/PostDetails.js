import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

const params = {
    id: ''
}

const PostDetails = (props) => {
    const { id } = useParams()
    params.id = id
    const { post } = props

    return (
        <>
            {
                post ? 
                <div className="container section project-details">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.content}</p>
                        </div>
                        <div className="card-action gret lighten-4 grey-text">
                            <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
                            <div>{moment(post.createdAt.toDate()).calendar()}</div>
                        </div>
                    </div>
                </div>
                : 
                <div className="container center">
                    <p>Loading post...</p>
                </div>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    const posts = state.firestore.data.posts
    const post = posts ? posts[params.id] : null
    return {
        post: post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(PostDetails);