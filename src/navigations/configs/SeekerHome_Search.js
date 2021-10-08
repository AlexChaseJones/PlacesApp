import { StackNavigator } from 'react-navigation';

/**
 *	Screens
 */
import {
	MapView,
	FilterSettings,
	ReviewPostings,
	ViewPosting
} from '../../screens/authorized/seeker';

const SeekerHome_Search = StackNavigator({
  mapView: { screen: MapView },
  filterSettings: { screen: FilterSettings },
  reviewPostings: { screen: ReviewPostings },
  viewPosting: { screen: ViewPosting }
}, {
	headerMode: 'float',
	navigationOptions: {
		drawerLabel: 'Home'
	}
});

export default SeekerHome_Search;
