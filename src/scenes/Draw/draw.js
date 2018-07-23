import React, { Component } from 'react';
import {
		View,
		Text,
		TouchableOpacity,
		TextInput,
		StyleSheet,
		ToastAndroid
} from 'react-native';
import {
	Icon,
	Button,
	Card
  } from 'react-native-elements';
import SketchHeader from '../../components/sketchHeader';
import ColorPicker from '../../components/colorPicker';
import Sketch from '../../components/sketch';
import styles from './styles';
import colors from '../../constants/colors';
import { connect } from 'react-redux';
import { editNote, deleteNote } from '../../actions/notes';

class Draw extends Component {
	static navigationOptions = ({ navigation }) => ({
		/*headerRight: (
			<Icon.Button 
				name="ios-checkmark" 
				backgroundColor="white" 			
				size={30} 
				color="black"
			/>
		),*/
	})

	constructor(props) {
		super(props);

		this.state = {
			strokes: [],
			selected: 0,
			note: {},
			titleEditable: false,
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
		ToastAndroid.showWithGravity(
			'Updated Drawing',
			ToastAndroid.SHORT,
			ToastAndroid.CENTER
		  );
		this.props.editNote(this.state.note.id, { strokes: this.state.strokes });
	}
	  
	  handleInput = ()=>{
		this.setState(PreviousState => {
		  return {titleEditable: !PreviousState.titleEditable}
		});
	  }

	  handleTitleUpdate = () => {
		ToastAndroid.showWithGravity(
		  'Updated Note Title',
		  ToastAndroid.SHORT,
		  ToastAndroid.CENTER
		);
		this.props.editNote(this.state.note.id, { title: this.state.note.title });

		this.setState({titleEditable:false});
	  }
	  handleUndo= () =>{
		  let newStrokes = this.state.strokes;
		  newStrokes.shift();
		  this.setState({ strokes: newStrokes})
	  }

	render() {
		return (
			<View
				style={styles.container}
			>
				<View style={{borderBottomWidth: 1,borderBottomColor: '#c6c6c6', paddingBottom: 5}}>
					<Text style={styless.titleText}>Title</Text>
					<View style={{flexDirection: 'row'}}>
						<TextInput
						maxLength={20}
						onChangeText={(value) => this.setState((PreviousState) =>{
							return {
								note:{
									...PreviousState.note,
									title: value,
								}
							}
						})}
						value={this.state.note.title}
						editable={this.state.titleEditable}
						style={{flex:1}}
						/>
						<View style={{flex:0.5,flexDirection: 'row', justifyContent:'flex-end', backgroundColor: '#0000'}}>
							<TouchableOpacity
								onPress={this.handleInput}
								style={[styless.button,styless.buttonEdit]}>
								<Icon name='brush'
									color='white'/>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={this.handleTitleUpdate}
								style={styless.button}>
								<Icon name='done'
									color='white'/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
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
				<View style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 10}}>
					<TouchableOpacity
						onPress={this.handleUndo}
						style={{flex: 0.5,flexDirection: 'row', justifyContent:'center', backgroundColor:'gray', marginRight: 1, borderRadius: 5}}>
							<Icon name='ios-undo'
								type='ionicon'/>
							<Text style={{marginTop: 3, marginLeft: 1}}>Undo</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={this.handleUpdate}
						style={{flex: 0.5,flexDirection: 'row', justifyContent:'center', backgroundColor:'#38a068', borderRadius: 5}}>
							<Icon name='done'/>
							<Text style={{marginTop: 3}}>Update</Text>
					</TouchableOpacity>

				</View>
			</View>
		)
	}
}

const styless = StyleSheet.create({
	titleText:{
	  fontSize: 18,
	},button:{
		backgroundColor: "#38a068",
		margin: 2,
		borderRadius: 2
	  },buttonEdit:{
		backgroundColor: "#a09238",
	  }
  });

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