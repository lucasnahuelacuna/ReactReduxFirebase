export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
      //make async call to database
      const firestore = getFirestore();
      firestore.collection('posts').add({
        ...post,
        authorFirstName: 'Rodrigo',
        authorLastName: 'Cabrera',
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'ADD_POST', post: post})
      }).catch(error => {
        dispatch({ type: 'ADD_POST_ERROR', error}) 
      })
  }
}

