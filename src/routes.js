import { createStackNavigator } from 'react-navigation';
import { Home, Sketch, EditorScreen } from './scenes';


const Routes = createStackNavigator(
  {
    Home: Home,
    Sketch: Sketch,
    Editor: EditorScreen,
  }, {
    initialRouteName: 'Home',
  }
);

export default Routes;