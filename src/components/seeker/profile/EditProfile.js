import React, { Component } from 'react';
import { Text, View, Button, TextInput, Switch, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { SegmentedControls } from 'react-native-radio-buttons';

import * as actions from '../../../actions';

class EditProfile extends Component {
  componentWillMount() {
    this.setState(this.props.user.profile);
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',
      this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',
      this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      keyboardVisible: true
    });
  }

  _keyboardDidHide = () => {
    this.setState({
      keyboardVisible: false
    });
  }

  handleInputChange = (source, value, def) => {
    const newState = {};
    if (typeof (value) === 'boolean') {
      newState[source] = value;
    } else {
      newState[source] = value.trim() || def;
    }
    this.setState(newState);
  }

  handleSubmit = () => {
    //Fancy es2015 stage-2 shit to remove a key from an object in one line.
    //Kinda ironic that I'm using 2 lines of code to talk about it.

    // eslint-disable-next-line no-unused-vars
    const { keyboardVisible, ...profile } = this.state;
    this.props.updateProfile(profile);
    setTimeout(() => {
      this.props.navigation.goBack();
    }, 1500);
  }

  handleClear = () => {
    this.setState(emptyFilter);
    this.props.setMapFilter(emptyFilter);

    setTimeout(() => {
      this.props.navigation.goBack();
    }, 500);
  }

  render() {
    // const {} = this.props;
    return (
      <View style={styles.container}>
        <Text>Edit Profile</Text>
        {this.state.keyboardVisible ?
          <Button
            title="Done"
            onPress={() => Keyboard.dismiss()}
          /> : null
        }
        <TextInput
          placeholder="occupation"
          onChangeText={occupation => this.handleInputChange('occupation', occupation, undefined)}
          style={{ height: 40 }}
          value={this.state.occupation}
        />
        <TextInput
          placeholder="summary"
          onChangeText={summary => this.handleInputChange('summary', summary, undefined)}
          style={{ height: 40 }}
          value={this.state.summary}
        />
        <TextInput
          placeholder="tagline"
          onChangeText={tagline => this.handleInputChange('tagline', tagline, undefined)}
          style={{ height: 40 }}
          value={this.state.tagline}
        />
        <Button
          onPress={this.handleSubmit}
          title='Apply Filters'
        />
        <Button
          onPress={this.handleClear}
          title='Clear Filters'
        />
      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
};

const mapStateToProps = ({ seekerProfile }) => (
  seekerProfile
);

export default connect(mapStateToProps, actions)(EditProfile);
