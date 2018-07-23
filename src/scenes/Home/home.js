import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ToastAndroid
} from 'react-native';
import { Button } from 'react-native-elements'
import { List, ModalOption, Overlay} from '../../components'
import { connect } from 'react-redux';
import {
	addNote,
	deleteNote,
} from '../../actions/notes';

class Home extends Component {
	
	state = {
		modalVisible: false,
	}
	setModalVisible = (visible) => this.setState({modalVisible: visible})
	navigateTo = (route) => () => this.props.navigation.push(route);
	handleEdit = (note) => {
		switch (note.type) {
			case 'sketch':
				this.props.navigation.navigate('Draw', { note: note });
				break;
			case 'text':
				this.props.navigation.navigate('Editor', { note: note });
			default:
				break;
		}
	}
	handleOption = (option) => {
		ToastAndroid.showWithGravity(
			'Created Note',
			ToastAndroid.SHORT,
			ToastAndroid.CENTER
		  );
		this.props.addNote(option);
	}

	render() {
		return (
			<View style={{flex:1}}>
				<ModalOption 
					visible={this.state.modalVisible} 
					handleOption={this.handleOption}
					closeModal={() => this.setModalVisible(false)}
				/>
				<List 
					notes={this.props.notes} 
					navigation={this.props.navigation} 
					deleteNote={this.props.deleteNote}
					handleEdit={this.handleEdit}
				/>
				<Overlay
					handleOption={this.handleOption}/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		addNote: (type) => {
			dispatch(addNote(type))
		},
		deleteNote: (id) => {
			dispatch(deleteNote(id))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);