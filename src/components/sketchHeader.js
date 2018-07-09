import React, { Component } from 'react';
import {
   View,
   Text,
} from 'react-native';
import styles from './Styles/sketchHeader';

class SketchHeader extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>HOLA</Text>
			</View>
		);
   }
}

export default SketchHeader