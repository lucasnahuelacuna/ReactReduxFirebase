import db from '../../config/firebaseConfig'

export const createPost = (post) => {
  return (dispatch, getState) => {
      //make async call to database
      db.collection('posts').add({
        ...post,
        authorFirstName: 'Lucas',
        authorLastName: 'Acuña',
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'ADD_POST', post: post})
      }).catch(error => {
        dispatch({ type: 'ADD_POST_ERROR', error})
      })
  }
}

