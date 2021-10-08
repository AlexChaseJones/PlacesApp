import firebase from 'firebase';
import thunk from 'redux-thunk';

import {
  FETCH_ROOM,
  FETCH_ROOM_SUCCESS,
  FETCH_ROOM_ERROR,
  REGISTER_ROOM,
  REGISTER_ROOM_ERROR,
  REGISTER_ROOM_SUCCESS,
  FETCH_MESSAGES,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_ERROR,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
} from './types';

export const findRoomByUser = (me, friend, targets) => async dispatch => {
  dispatch({ type: FETCH_ROOM });

  let roomKey = null;
  /* find all rooms belong to me */
  firebase.database().ref(`${targets[0]}/${me.uid}/rooms`).on('value', rooms => {
    /* if i have no room yet stop all stuff */
    if (rooms.val() === null) {
      dispatch({
        type: FETCH_ROOM_ERROR,
        payload: 'No rooms for user'
      });
      return;
    }
    const roomKeys = Object.keys(rooms.val());
    roomKeys.forEach(key => {
      /* if this room belong friend too => found room */
      firebase.database().ref(`${targets[1]}/${friend.uid}/rooms/${key}`).once('value', snapshot => {
        if (!snapshot.val()) {
          return;
        }

      dispatch({
        type: FETCH_ROOM_SUCCESS,
        payload: key
      });
      /* fetch message by room */
       fetchMessagesByRoom(dispatch, key);

      // dispatch({
      //   type: FETCH_ROOM_ERROR,
      //   payload: 'Room does not exist'
      // });
    }, error => {
        dispatch({
          type: FETCH_ROOM_ERROR,
          payload: error
        });
      });
    });
  });
};


const fetchMessagesByRoom = (dispatch, roomKey) => {
  dispatch({ type: FETCH_MESSAGES });

  firebase.database().ref(`Messages/${roomKey}`).on('value', snapshot => {
    const messages = [];
    snapshot.forEach(message => {
      const msg = message.val();
      messages.push({
        _id: message.key,
        text: msg.text,
        user: msg.user,
        createdAt: msg.createdAt
      });
    });
    /* sort messages */
     messages.sort((a, b) => (
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ));
     dispatch({
      type: FETCH_MESSAGES_SUCCESS,
      payload: messages
    });
   }, error => {
    dispatch({
      type: FETCH_MESSAGES_ERROR,
      payload: error
    });
  });
};

export const sendMessage = (message, roomKey) => async dispatch => {
  dispatch({ type: SEND_MESSAGE });

  const newMessage = {
    ...message[0],
    createdAt: firebase.database.ServerValue.TIMESTAMP
  };

  /* push message */
   firebase.database().ref(`Messages/${roomKey}`).push(newMessage)
  .then(() => {
    dispatch({ type: SEND_MESSAGE_SUCCESS });
  })
  .catch(error => {
    dispatch({
      type: SEND_MESSAGE_FAIL,
      payload: error
    });
  });
};

export const registerRoom = (me, friend) => dispatch => {
  dispatch({ type: REGISTER_ROOM });

  const roomKey = firebase.database().ref('Rooms').push().key;
  const now = firebase.database.ServerValue.TIMESTAMP;
  const update = {};

  /* update room */
  update[`Rooms/${roomKey}/${me.uid}`] = true;
  update[`Rooms/${roomKey}/${friend.uid}`] = true;
  /* update users */
  update[`Listers/${me.uid}/rooms/${roomKey}`] = {
    avatar: friend.profile.thumbnailPhoto,
    firstName: friend.profile.firstName,
    lastName: friend.profile.lastName,
    uid: friend.uid,
    lastViewed: now,
    roomKey
  };
  update[`Seekers/${friend.uid}/rooms/${roomKey}`] = {
    avatar: me.profile.thumbnailPhoto,
    firstName: me.profile.firstName,
    lastName: me.profile.lastName,
    uid: me.uid,
    lastViewed: null,
    roomKey
  };

  firebase.database().ref().update(update)
  .then(() => {
    dispatch({
      type: REGISTER_ROOM_SUCCESS,
      payload: roomKey
    });
  })
  .catch(error => {
    dispatch({
      type: REGISTER_ROOM_ERROR,
      payload: error
    });
  });
  return roomKey;
};
