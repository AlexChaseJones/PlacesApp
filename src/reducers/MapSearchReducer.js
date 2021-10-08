import {
  UPDATE_MAP_LISTINGS,
  UPDATE_MAP_LISTINGS_SUCCESS,
  UPDATE_MAP_LISTINGS_FAIL,
  GET_SUBWAY_DATA,
  GET_SUBWAY_DATA_SUCCESS,
  GET_SUBWAY_DATA_FAIL,
  SET_CURRENT_MAP_LISTER,
  SET_CURRENT_LIKE_LISTER,
  SET_MAP_FILTER,
} from '../actions/types';

const INITIAL_STATE = {
  region: {
    latitude: 40.7058250,
    longitude: -73.9123710,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  fetching: false,
  error: undefined,
  listers: [],
  currentMapLister: {},
  currentLikeLister: {},
  displaySubwayMap: false,
  subwayMapData: {},
  subwayMapDataFetching: false,
  subwayMapDataError: undefined,
  mapFilters: {
    deposit: false,
    gender: 'either',
    maximum: undefined,
    minimum: undefined,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MAP_LISTINGS: 
      return {
        ...state,
        region: action.payload,
        fetching: true,
        error: undefined,
      };
    case UPDATE_MAP_LISTINGS_SUCCESS:
      return {
        ...state,
        listers: action.payload,
        fetching: false,
        error: undefined,
      };
    case UPDATE_MAP_LISTINGS_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case GET_SUBWAY_DATA:
      return {
        ...state,
        subwayMapDataFetching: true,
        subwayMapDataError: undefined,
      };
    case GET_SUBWAY_DATA_SUCCESS:
      return {
        ...state,
        subwayMapData: action.payload,
        subwayMapDataFetching: false,
      };
    case GET_SUBWAY_DATA_FAIL:
      return {
        ...state,
        subwayMapDataFetching: false,
        subwayMapDataError: action.payload,

      };
    case SET_CURRENT_MAP_LISTER:
      return {
        ...state,
        currentMapLister: action.payload,
      };
    case SET_CURRENT_LIKE_LISTER:
      return {
        ...state,
        currentLikeLister: action.payload,
      };
    case SET_MAP_FILTER:
      return {
        ...state,
        mapFilters: action.payload,
      };
    default:
      return state;
  }
};
