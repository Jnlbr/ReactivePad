import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ToastAndroid} from 'react-native';
import { Button } from 'react-native-elements'
import Note from './note';
import {NotesContext} from '../context';
import { connect } from 'react-redux';
import {
    addNote,
    deleteNote,
    editNote
} from '../actions/notes';

class List extends React.Component {

deleteFunct = (id) =>{
  ToastAndroid.showWithGravity(
    'Deleted Note',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
    );
  this.props.deleteNote(id);
}
  render(){
    return (           
      <View style={{marginBottom: 5}}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={this.props.notes}
          renderItem={({item}) =>
            <Note
              note={item}
              onEdit={() => this.props.handleEdit(item)}
              onSwipeRight={() => this.props.handleEdit(item)}
              onDelete={() => this.deleteFunct(item.id)}
              onSwipeLeft={() => this.deleteFunct(item.id)}
            />
          }
        />
      </View>
    );
  }
}

export default List;