import React, { Component } from 'react';
import { Text, View, Button, TextInput, Switch, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { SegmentedControls } from 'react-native-radio-buttons';

import * as actions from '../../../actions';

class MapFilters extends Component {
  componentWillMount() {
    this.setState(this.props.mapFilters);
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
    const { keyboardVisible, ...filter } = this.state;
    this.props.setMapFilter(filter);
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
        <Text>Map Filters</Text>
        {this.state.keyboardVisible ?
          <Button
            title="Done"
            onPress={() => Keyboard.dismiss()}
          /> : null
        }
        <TextInput
          onChangeText={minimum => this.handleInputChange('minimum', minimum, undefined)}
          placeholder="Minumim price"
          style={{ height: 40 }}
          keyboardType='numeric'
          value={this.state.minimum !== undefined ? this.state.minimum : ''}
        />
        <TextInput
          onChangeText={maximum => this.handleInputChange('maximum', maximum, undefined)}
          placeholder="Maximum price"
          style={{ height: 40 }}
          keyboardType='numeric'
          value={this.state.maximum !== undefined ? this.state.maximum : ''}
        />
        <Text>Roommate gender preference</Text>
        <SegmentedControls
          onSelection={(value) => this.handleInputChange('gender', value, 'either')}
          options={options}
          selectedOption={this.state.gender}
        />
        <Text>No deposit</Text>
        <Switch
          onValueChange={() => this.handleInputChange('deposit', !this.state.deposit)}
          value={this.state.deposit}
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

const options = ['either', 'male', 'female'];

const emptyFilter = {
  deposit: false,
  gender: 'either',
  maximum: undefined,
  minimum: undefined,
};

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
};

const mapStateToProps = ({ mapSearch }) => (
  mapSearch
);

export default connect(mapStateToProps, actions)(MapFilters);
