import React, { Component } from 'react';
import {
	 View,
	 Dimensions,
	 PanResponder,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import Reaction from './reaction';
import styles from './Styles/sketch';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const colors = ['black', 'red', 'green', 'yellow', 'purple'];

class Sketch extends Component {
   constructor(props) {
      super(props);

      this.state = {
         previousStrokes: [],
         currentPoints: [],
         reaction: new Reaction(),
      }

      this.panResponder = PanResponder.create({
         onStartShouldSetPanResponder: (event, gs) => true,
         onMoveShouldSetPanResponder: (evt, gs) => true,
         onPanResponderGrant: (event, gs) => this.onPanResponderMove(event),
         onPanResponderMove: (event, gs) => this.onPanResponderMove(event),
         onPanResponderRelease: (event, gs) => this.onPanResponderRelease(event),
      });
   }
   onPanResponderMove = (event) => {
      const currentPoints = this.state.currentPoints;
      const [x, y] = [event.nativeEvent.locationX, event.nativeEvent.locationY];
      currentPoints.push({ x, y });
      this.setState({ currentPoints: currentPoints });
   }
   onPanResponderRelease = (event) => {
      const { previousStrokes, currentPoints } = this.state;
      const strokes = [{
         strokes: currentPoints,
         color: this.props.color,
      }, ...previousStrokes];
      this.setState({
         previousStrokes: strokes,
         currentPoints: [],
      });
      this.props.onStrokeRelease(strokes);
   }
   renderStrokes = () => this.state.previousStrokes.map((stroke, i) =>
      <Path
         key={i}
         d={this.state.reaction.pointsToSvg(stroke.strokes)}
         fill="none"
         stroke={stroke.color}
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={4}
      />
   )
   render() {
      return (
         <View
            style={styles.container}
            {...this.panResponder.panHandlers}
         >
            <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT * 0.50}>
               <G>
                  {this.renderStrokes()}
                  <Path
                     d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
                     fill="none"
                     stroke={this.props.color}
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={4}
                  />
               </G>
            </Svg>
         </View>
      );
   }
}

export default Sketch