import React, { Component } from 'react';
import {
	View,
} from 'react-native';
import { Button } from 'react-native-elements'
import { List, ModalOption } from '../../components'
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
		this.setModalVisible(false);
		this.props.addNote(option);
	}

	render() {
		return (
			<View>
				<ModalOption 
					visible={this.state.modalVisible} 
					handleOption={this.handleOption}
					closeModal={() => this.setModalVisible(false)}
				/>
				<Button
					icon={{ name: 'note-add' }}
					onPress={() => this.setModalVisible(true)}
				/>
				<List 
					notes={this.props.notes} 
					navigation={this.props.navigation} 
					deleteNote={this.props.deleteNote}
					handleEdit={this.handleEdit}
				/>
				<Button
					title="TO DRAWING PAGE"
					onPress={this.navigateTo('Draw')}
				/>
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