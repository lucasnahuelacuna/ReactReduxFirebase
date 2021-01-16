const initialState = {
    posts: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'},
    ]
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_POST':
            console.log('created post', action.post);
            return state;
        case 'ADD_POST_ERROR':
            console.log('created post', action.error);
            return state;
        default:
            return state
    }
}

export default postReducer