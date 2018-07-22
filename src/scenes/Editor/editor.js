import React, { Component } from 'react';
import {
		View,
    Button,
    TextInput,
    Text
} from 'react-native';
import { connect } from 'react-redux'
import { editNote, deleteNote } from '../../actions/notes';

class Editor extends Component{
  state = {
    id: '',
    title:'',
    text:''
  }
  componentDidMount() {
    const note = this.props.navigation.getParam('note', {});
    this.setState({
      ...note
    })
  }
  handleUpdate = () => {
    this.props.editNote(this.state.id, {
      title: this.state.title
    })
  }
  
  render(){
    return (
      <View>
        <Text>Title</Text>
        <TextInput
          multiline={true}
          onChangeText={(value) => this.setState({title:value})}
          value={this.state.title}
          editable={true}
        >
        </TextInput>

        <Button 
          title="edit"
          onPress={this.handleUpdate} 
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editNote: (id,values) => {
      dispatch(editNote(id,values))
    },
    deleteNote: (id) => {
      dispatch(deleteNote(id))
    }
  }
}

export default connect(null,mapDispatchToProps)(Editor)