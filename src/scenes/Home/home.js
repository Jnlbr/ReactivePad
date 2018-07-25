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
	didUndo,
	didNotUndo,
} from '../../actions/notes';

class Home extends Component {
	
	state = {
		modalVisible: false,
		timeout: true,
		toDelete: [],
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
	deleteNote = (id) => {
		this.setState({ 
			timeout: false,
			toDelete: [id, ...this.state.toDelete]
		});
		setTimeout(() => {
			if(!this.props.undo) {
				const { toDelete } = this.state;
				this.setState({
					timeout: true,
					toDelete: [],
				});				
				toDelete.forEach(td => {
					this.props.deleteNote(td);
				})
			} else {
				this.props.didNotUndo();
			}
		}, 2500);

	}
	handleUndo = () => {		
		this.props.didUndo();
		this.setState({ 
			timeout: true,
			toDelete: [],
		});
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
					deleteNote={this.deleteNote}
					handleEdit={this.handleEdit}
				/>
				<Overlay
					handleOption={this.handleOption}
					handleUndo={this.handleUndo}
					timeout={this.state.timeout}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		undo: state.undo,
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
		didUndo: () => {
			dispatch(didUndo());
		},
		didNotUndo: () => {
			dispatch(didNotUndo());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);