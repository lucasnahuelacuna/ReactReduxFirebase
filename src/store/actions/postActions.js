export const createPost = (post) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({ type: 'ADD_POST', post: post})
    }
}