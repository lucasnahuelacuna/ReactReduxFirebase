import React, { Component } from 'react'

class CreatePost extends Component {
    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white card form">
                    <h5 className="grey-text text-darken-3">Create Post</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Post Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn cyan">Create Post</button>
                    </div>
                </form> 
            </div>
        )
    }
}

export default CreatePost