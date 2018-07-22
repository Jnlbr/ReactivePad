import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Home, Draw, Editor } from './scenes';
import loading from './scenes/Loading/loading';

const Routes = createStackNavigator(
  {
    Home: Home,
    Draw: Draw,
    Editor: Editor
  }, {
    initialRouteName: 'Home', navigationOptions: params => ({
      gesturesEnabled: true,
      // gesturesDirection: 'inverted',
    }),
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const width = layout.initWidth;

        return {
          // opacity: position.interpolate({
          //   inputRange: [index - 1, index, index + 1],
          //   outputRange: [0, 1, 0],
          // }),
          transform: [{
            translateX: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [width, 0, -width],
            }),
          }]
        };
      },
      headerTitleInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        return {
          opacity: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 1, 0],
          }),
          transform: [{
            translateX: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [-50, 0, 50],
            }),
          }]
        };
      },
    }),
  }
);

export default createSwitchNavigator({
    Loading: loading,
    Routes: Routes,
  }, {
    initialRouteName: 'Loading'
  }
)