import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const firebase = require('firebase');
    const config = {
      apiKey: "AIzaSyBVpbW9t-YiI0nwGPw2ajPK5Ul3gfafQlo",
      authDomain: "reactclientpanel-d4c01.firebaseapp.com",
      databaseURL: "https://reactclientpanel-d4c01.firebaseio.com",
      projectId: "reactclientpanel-d4c01",
      storageBucket: "reactclientpanel-d4c01.appspot.com",
      messagingSenderId: "228226322985"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(
      reducers,
      {},
      applyMiddleware(ReduxThunk)
    );
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
