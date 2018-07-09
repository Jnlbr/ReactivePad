import React, { Component } from 'react';
import {
	View,
	Button,
} from 'react-native';
import styles from './styles';

class Home extends Component {

	navigateTo = (route) => () => this.props.navigation.push(route);

	render() {
		return (
			<View>
				<Button
					title="TO DRAWING PAGE"
					onPress={this.navigateTo('Draw')}
				/>
			</View>
		);
	}
}

export default Home