import React, { Component } from 'react';
import {
		View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity, 
    ToastAndroid,
} from 'react-native';
import {
  Icon,
  Button,
  Card
} from 'react-native-elements';
import { connect } from 'react-redux'
import { editNote, deleteNote } from '../../actions/notes';

class Editor extends Component{
  state = {
    id: '',
    title:'',
    text:'',
    titleEditable: false,
  }
  componentDidMount() {
    const note = this.props.navigation.getParam('note', {});
    this.setState({
      ...note
    })
  }
  handleTitleUpdate = () => {
    ToastAndroid.showWithGravity(
      'Updated Note Title',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    this.props.editNote(this.state.id, {
      title: this.state.title
    })
  }

  handleTextUpdate = () => {
    ToastAndroid.showWithGravity(
      'Updated Note',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    this.props.editNote(this.state.id, {
      text: this.state.text
    })
  }
  
  handleInput = ()=>{
    this.setState(PreviousState => {
      return {titleEditable: !PreviousState.titleEditable}
    });
  }
  
  render(){
    return (
      <Card>
        <View style={{borderBottomWidth: 1,borderBottomColor: '#c6c6c6', paddingBottom: 5}}>
          <Text style={styles.titleText}>Title</Text>
          <View style={{flexDirection: 'row'}}>

            <TextInput
              maxLength={20}
              onChangeText={(value) => this.setState({title:value})}
              value={this.state.title}
              editable={this.state.titleEditable}
              style={{flex:1}}
            />
            <View style={{flex:0.5,flexDirection: 'row', justifyContent:'flex-end', backgroundColor: '#0000'}}>

              <TouchableOpacity
                onPress={this.handleInput}
                style={[styles.button, styles.buttonEdit]}>
                <Icon 
                  color='white'
                  name='brush'/>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.handleTitleUpdate}
                style={styles.button}>
                <Icon name='done'
                color='white'
                />
              </TouchableOpacity>
          </View>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 16}}>Note Content:</Text>
          <TextInput
              multiline={true}
              maxLength={2000}
              onChangeText={(value) => this.setState({text:value})}
              value={this.state.text}
              style={{paddingBottom: 10, fontSize: 14}}
            />
          <Button
            backgroundColor='#38a068'
            title='Update'
            icon={{name: 'done', color:'white'}}
            onPress={this.handleTextUpdate}
          />
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
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
    editNote: (id,values) => {
      dispatch(editNote(id,values))
    },
    deleteNote: (id) => {
      dispatch(deleteNote(id))
    }
  }
}

export default connect(null,mapDispatchToProps)(Editor)