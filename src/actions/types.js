/*
 * Chat Messages Action Types
 */
export const FETCH_MESSAGES = 'fetch_messages';
export const FETCH_MESSAGES_SUCCESS = 'fetch_messages_success';
export const FETCH_MESSAGES_ERROR = 'fetch_messages_error';
export const SEND_MESSAGE = 'send_message';
export const SEND_MESSAGE_SUCCESS = 'send_message_success';
export const SEND_MESSAGE_FAIL = 'send_message_fail';

/*
 * Chat Rooms Action Types
 */
export const FETCH_ROOM = 'fetch_room';
export const FETCH_ROOM_SUCCESS = 'fetch_room_success';
export const FETCH_ROOM_ERROR = 'fetch_room_error';
export const REGISTER_ROOM = 'register_room';
export const REGISTER_ROOM_ERROR = 'register_room_error';
export const REGISTER_ROOM_SUCCESS = 'register_room_success';

/*
 * Map Search Action Types
 */

export const GET_SUBWAY_DATA = 'get_subway_data';
export const GET_SUBWAY_DATA_SUCCESS = 'get_subway_data_success';
export const GET_SUBWAY_DATA_FAIL = 'get_subway_data_fail';
export const UPDATE_MAP_LISTINGS = 'update_map_listings';
export const UPDATE_MAP_LISTINGS_SUCCESS = 'update__map_listings_success';
export const UPDATE_MAP_LISTINGS_FAIL = 'update_map_listings_fail';
export const SET_CURRENT_MAP_LISTER = 'set_current_map_lister';
export const SET_MAP_FILTER = 'set_map_filter';

/*
 * Seeker Like Action Types
 */
export const LIKE_LISTING = 'like_listing';
export const LIKE_LISTING_SUCCESS = 'like_listing_success';
export const LIKE_LISTING_FAIL = 'like_listing_fail';
export const SET_CURRENT_LIKE_LISTER = 'set_current_like_lister';
export const GET_LIKED_LISTINGS = 'get_liked_listings';
export const GET_LIKED_LISTINGS_SUCCESS = 'get_liked_listings_success';
export const GET_LIKED_LISTINGS_ERROR = 'get_liked_listings_error';

/*
 * Seeker Profile Action Types
 */

export const SET_SEEKER_PROFILE = 'set_seeker_profile';
export const UPDATE_SEEKER_PROFILE = 'update_seeker_profile';
export const UPDATE_SEEKER_PROFILE_SUCCESS = 'update_seeker_profile_success';
export const UPDATE_SEEKER_PROFILE_FAIL = 'update_seeker_profile_fail';

/*
 * Lister Profile Action Types
 */

export const SET_LISTER_PROFILE = 'set_lister_profile';

/*
 * Review Seeker Action Types
 */

export const SET_CURRENT_SEEKER = 'set_current_seeker';
export const SET_CURRENT_SEEKER_SUCCESS = 'set_current_seeker_success';
export const SET_CURRENT_SEEKER_FAIL = 'set_current_seeker_fail';

/*
 * Lister Like Action Types
 */
export const GET_LIKER_PROFILES = 'get_liker_profiles';
export const GET_LIKER_PROFILES_SUCCESS = 'get_liker_profiles_success';
export const GET_LIKER_PROFILES_FAIL = 'get_liker_profiles_fail';
