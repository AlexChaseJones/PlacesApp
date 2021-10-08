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
} from '../actions/types';

const INITIAL_STATE = {
  // states
  messages: [],
  roomKey: null,
  // Loading indicators
  fetchingMessages: false,
  fetchingRoom: false,
  registeringRoom: false,
  sendingMessage: false,
  // Error pool
  fetchMessagesError: null,
  fetchRoomError: null,
  registerRoomError: null,
  sendingMessageError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* Handles Fetching Messages */
    case FETCH_MESSAGES: 
      return {
        ...state,
        fetchingMessages: true,
        fetchMessagesError: null,
        messages: []
      };
    case FETCH_MESSAGES_SUCCESS: 
      return { 
        ...state,
        fetchingMessages: false,
        messages: action.payload
      };
    case FETCH_MESSAGES_ERROR:
      return {
        ...state,
        fetchingMessages: false,
        fetchMessagesError: action.payload
      };
    /* Handles Fetching a Room */
    case FETCH_ROOM:
      return {
        ...state,
        fetchingRoom: true,
        fetchRoomError: null,
      };
    case FETCH_ROOM_SUCCESS:
      return {
        ...state,
        fetchingRoom: false,
        roomKey: action.payload
      };
    case FETCH_ROOM_ERROR:
      return {
        ...state,
        fetchingRoom: false,
        fetchRoomError: action.payload
      };
    /* Handles Registering a Room */
    case REGISTER_ROOM:
      return {
        ...state,
        registeringRoom: true,
        registerRoomError: null
      };
    case REGISTER_ROOM_ERROR:
      return {
        ...state,
        registeringRoom: false,
        registerRoomError: action.payload
      };
    case REGISTER_ROOM_SUCCESS:
      return {
        ...state,
        registeringRoom: false,
      };
    /* Handles Registering a Room */
    case SEND_MESSAGE:
      return {
        ...state,
        sendingMessage: true,
        sendingMessageError: null
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        sendingMessage: false,
      };
    case SEND_MESSAGE_FAIL:
      return {
        ...state,
        sendingMessage: false,
        sendingMessageError: action.payload
      };
    default:
      return state;
  }
};
