import { combineReducers } from 'redux';

import chat from './ChatReducer';
import mapSearch from './MapSearchReducer';
import seekerProfile from './SeekerProfileReducer';
import listerProfile from './ListerProfileReducer';

export default combineReducers({
	chat,
	listerProfile,
	mapSearch,
	seekerProfile,
});
