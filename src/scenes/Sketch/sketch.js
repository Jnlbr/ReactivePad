import React, { Component } from 'react';
import {
		View,
		Button,
		Animated,
		PanResponder,
		Text,
} from 'react-native';
import Svg, {
	Path,
} from 'react-native-svg';
import styles from './styles';

class Sketch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			previousStrokes: [],
			currentStroke: 'M0 0 L25 25 L50 50',
		}

		this.position = new Animated.ValueXY(0,0);
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (event, gs) => true,
			onMoveShouldSetPanResponder: (evt, gs) => true,
			onPanResponderGrant: (event, gs) => {
				this.setState({
					currentStroke: `M${event.nativeEvent.locationX} ${event.nativeEvent.locationY}`
				});
			},
			onPanResponderMove: (event, gs) => {
				this.setState({
					currentStroke: `${this.state.currentStroke} L${event.nativeEvent.locationX} ${event.nativeEvent.locationY}`
				});
			},
			onPanResponderRelease: (event, gs) => {
				let { previousStrokes, currentStroke } = this.state;
				this.setState({
					previousStrokes: [...previousStrokes, currentStroke],
				});
			},
		});
	}

	render() {
		console.log(this.state.previousStrokes.length)
		return (
			<Animated.View
				style={this.position.getLayout()}
				{...this.panResponder.panHandlers}
			>
				<Svg
					height={500}
					width={500}
				> 
					{
						this.state.previousStrokes.map((stroke,i) => 
							<Path
								key={i}
								d={stroke}
								fill="none"
								stroke="red"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={4}
							/>
						)
					}
					<Path
						d={this.state.currentStroke}
						fill="none"
						stroke="red"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={4}
					/>
				</Svg>
				<View>
					<Text>HOLA</Text>
				</View>
			</Animated.View>
		)
	}
}


export default Sketch