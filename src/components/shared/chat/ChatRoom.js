import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

class ChatRoom extends Component {
  componentDidMount() {

  }

  onSend = (messages = []) => {
    this.props.sendMessage(messages, this.props.roomKey);
  }

  getUser = () => ({
    _id: this.props.user.uid,
    name: `${this.props.user.profile.firstName} ${this.props.user.profile.lastName.charAt(0)}.`,
    avatar: this.props.user.profile.thumbnailPhoto
  });

  render() {
    return (
      <GiftedChat
        messages={this.props.messages}
        onSend={this.onSend}
        user={this.getUser()}
        isAnimated
      />
      );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};

const mapStateToProps = ({ chat }) => (
  chat
);

export default connect(mapStateToProps, actions)(ChatRoom);  
