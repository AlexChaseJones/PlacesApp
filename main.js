import Expo from 'expo';
import firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import CONFIG from './src/configurations';

import {
  SET_LISTER_PROFILE,
  SET_SEEKER_PROFILE,
} from './src/actions/types';
import store from './src/store';
import Root from './src/navigations/configs/Root';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.state = {
      loading: true,
      profileType: '',
      user: null
    };
  }

  componentDidMount() {
    const config = CONFIG.firebase_init_config;
    firebase.initializeApp(config);
    this.signInAsSeeker();
    // this.signInAsLister();
  }

  setProfile = (action, profile, type) => {
    this.store.dispatch({
      type: action,
      payload: profile,
    });

    this.setState({
      loading: false,
      profileType: type,
      user: profile
    });

    console.log('This is your user profile: ', profile);
  }

signInAsLister = () => {
    firebase.auth().signInWithEmailAndPassword('1@lister.com', 'abc123')
    .then(user => {
      firebase.database().ref(`/Listers/${user.uid}`).on('value', snapshot => {
        this.setProfile(SET_LISTER_PROFILE, snapshot.val(), 'lister');
      });
    });
  }

  signInAsSeeker = () => {
    firebase.auth().signInWithEmailAndPassword('1@seeker.com', 'abc123')
    .then(user => {
      firebase.database().ref(`/Seekers/${user.uid}`).on('value', snapshot => {
        this.setProfile(SET_SEEKER_PROFILE, snapshot.val(), 'seeker');
      });
    });
  }

  render() {
    if (this.state.loading === true) {
      return <View style={styles.container}><Text>Loading</Text></View>;
    }
    return (
      <Provider store={this.store}>
        <Root
          screenProps={this.state.user}
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
