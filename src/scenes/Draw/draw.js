import React, { Component } from 'react';
import {
		View,
} from 'react-native';
import SketchHeader from '../../components/sketchHeader';
import ColorPicker from '../../components/colorPicker';
import Sketch from '../../components/sketch';
import styles from './styles';

const colors = ['black', 'red', 'green', 'yellow', 'purple'];

class Draw extends Component {
	static navigationOptions = {
		headerTitle: <SketchHeader />
	};

	constructor(props) {
		super(props);

		this.state = {
			strokes: [],
			selected: 0,
		}
	}

	changeColor = (selected) => () => this.setState({ selected: selected });
	onStrokeRelease = (strokes) => () => this.setState({ strokes: strokes });
	
	render() {

		return (
			<View
				style={styles.container}
			>
				<ColorPicker
					selected={this.state.selected}
					colors={colors}
					onPress={this.changeColor}
				/>
				<Sketch 
					onStrokeRelease={this.onStrokeRelease} 
					color={colors[this.state.selected]}
				/>
			</View>
		)
	}
}

export default Draw