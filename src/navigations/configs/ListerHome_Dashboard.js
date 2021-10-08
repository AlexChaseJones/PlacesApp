import { StackNavigator } from 'react-navigation';

/**
 *	Screens
 */
import { Dashboard } from '../../screens/authorized/lister';

const ListerHome_Dashboard = StackNavigator({
  dashboard: {
    screen: Dashboard
  }
});

export default ListerHome_Dashboard;
