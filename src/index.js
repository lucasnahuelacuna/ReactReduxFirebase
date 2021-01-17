import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore'
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebaseConfig from './config/firebaseConfig'
import firebase from 'firebase/app'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, firebaseConfig),
  )
);

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance 
}

ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
