import { createStackNavigator } from 'react-navigation';
import { Home, Draw } from './scenes';


const Routes = createStackNavigator(
  {
    Home: Home,
    Draw: Draw,
  }, {
    initialRouteName: 'Home',
  }
);

export default Routes;