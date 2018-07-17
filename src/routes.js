import { createStackNavigator } from 'react-navigation';
import { Home, Draw, EditorScreen } from './scenes';


const Routes = createStackNavigator(
  {
    Home: Home,
    Draw: Draw,
    Editor: EditorScreen
  }, {
    initialRouteName: 'Home',
  }
);

export default Routes;