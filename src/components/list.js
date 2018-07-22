import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
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

  render(){
    return (           
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={this.props.notes}
          renderItem={({item}) =>
            <Note
              note={item}
              onEdit={() => this.props.handleEdit(item)}
              onSwipeRight={() => this.props.handleEdit(item)}
              onDelete={() => this.props.deleteNote(item.id)}
              onSwipeLeft={() => this.props.deleteNote(item.id)}
            />
          }
        />
      </View>
    );
  }
}

export default List;