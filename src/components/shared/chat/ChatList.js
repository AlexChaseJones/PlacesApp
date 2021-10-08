import React, { Component } from 'react';
import { FlatList, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    
  }

  viewConvo = room => {
    this.props.findRoomByUser(this.props.user, room, this.props.targets);
    this.props.navigation.navigate('conversation', room);
  }

  logProps = () => {
  }

  renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text>Chat with: {item.firstName} {item.lastName}</Text>
      <Text>Room key: {item.roomKey}</Text>
      <Text>Last viewed: {item.lastViewed}</Text>
      <Button
        title="View Conversation"
        onPress={() => this.viewConvo(item)}
      />
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(this.props.user.rooms || {})}
          renderItem={this.renderItem}
          keyExtractor={room => room.roomKey}
          extraData={this.state}
        />
        <Button
          title="log props"
          onPress={this.logProps}
        />
      </View>
      );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  card: {
    height: 90,
    alignItems: 'center',
    marginBottom: 20
  }
};

export default connect(null, actions)(ChatList);
  
