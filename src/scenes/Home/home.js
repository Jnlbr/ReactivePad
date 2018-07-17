import React, { Component } from 'react';
import {
		View,
		Button,
} from 'react-native';
import styles from './styles';
import MainList from '../../components/list'

class Home extends Component {

	navigateTo = (route) => () => this.props.navigation.push(route);

	render() {

		return (
			<View>
				<MainList />
				<Button
					title="TO DRAWING PAGE"
					onPress={this.navigateTo('Sketch')}
				/>
			</View>
		)
	}
}

export default Home