import React from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
    const { id } = useParams()
    return (
        <div className="container section project-details">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Post Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Lucas Acuña</div>
                    <div>2nd January, 2am</div>
                </div>
            </div>
        </div>
    )
}
 
export default PostDetails;