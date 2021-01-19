import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postActions'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const CreatePost = ({ auth, createPost }) =>  {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory();

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            content
        }
        createPost(newPost);
        history.push('/')
    }

    if(!auth.uid) return <Redirect to="/signin" />

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white card form">
                <h5 className="grey-text text-darken-3">Create Post</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChangeTitle} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Post Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={handleChangeContent} />
                </div>
                <div className="input-field">
                    <button className="btn cyan">Create Post</button>
                </div>
            </form> 
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)