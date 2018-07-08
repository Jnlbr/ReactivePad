import { createStackNavigator } from 'react-navigation';
import { Home, Sketch } from './scenes';


const Routes = createStackNavigator(
  {
    Home: Home,
    Sketch: Sketch,
  }, {
    initialRouteName: 'Home',
  }
);

export default Routes;