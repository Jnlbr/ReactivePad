import React, { Component } from 'react';
import {
		View,
		Button
} from 'react-native';
import SketchHeader from '../../components/sketchHeader';
import ColorPicker from '../../components/colorPicker';
import Sketch from '../../components/sketch';
import styles from './styles';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { editNote, deleteNote } from '../../actions/notes';

class Draw extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerRight: (
			<Icon.Button 
				name="ios-checkmark" 
				backgroundColor="white" 			
				size={30} 
				color="black"
			/>
		),
	})

	constructor(props) {
		super(props);

		this.state = {
			strokes: [],
			selected: 0,
			note: {}
		}
	}

	componentDidMount() {
		const note = this.props.navigation.getParam('note', { strokes: [] });
		this.setState({
			note: note,
			strokes: note.strokes ? note.strokes : []
		});
	}

	changeColor = (selected) => () => this.setState({ selected: selected });
	onStrokeRelease = (strokes) => this.setState({ strokes: strokes });
	handleUpdate = () => {
		this.props.editNote(this.state.note.id, { strokes: this.state.strokes });
	}
	
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
					strokes={this.state.strokes}
					onStrokeRelease={this.onStrokeRelease} 
					color={colors[this.state.selected]}
				/>
				<Button onPress={this.handleUpdate} title="update"/>
			</View>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		editNote: (id, values) => {
			dispatch(editNote(id, values))
		},
		deleteNote: (id) => {
			dispatch(deleteNote(id))
		}
	}
}

export default connect(null,mapDispatchToProps)(Draw)