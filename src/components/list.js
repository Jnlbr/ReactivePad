import React from 'react';
import { View, FlatList } from 'react-native';
import Note from './note';
import {
    addNote,
    deleteNote,
    editNote
} from '../actions/notes';

class List extends React.Component {
  render() {
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