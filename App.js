import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Routes from './src/routes';
// import { NotesContext } from './src/context';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './src/reducers';

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   let notes = [{ id: String(Date.now()+Math.random()), title: 'A', text: 'hola soy bata', date: new Date().toLocaleString() }, { id: String(Date.now()+Math.random()), title: 'B', Text: 'Hola soy Batman', date: new Date().toLocaleString() }]
  //   this.state = {
  //     notes: notes,
  //     addNote: this.addNote,
  //     deleteNote: this.deleteNote,
  //   }
  // }

  // addNote = (note) => {
  //   this.setState({
  //     notes: [...this.state.notes, { id: String(Date.now()+Math.random())}]
  //   });
  // }
  // deleteNote = (id) => {
  //   this.setState({
  //     notes: this.state.notes.filter(note => note.id !== id)
  //   });
  // }
  // editNote = (id,key,value) => {
  //   this.setState({
  //     notes: this.state.notes.map(note => { 
  //       if(note.id === id) { 
  //         console.log('change')
  //       }
  //     }),
  //   })
  // }

  render() {
    return (
        
        <Provider store={store}>
          <Routes />
        </Provider>
        
    );
  }
}
/* <NotesContext.Provider value={this.state}> */
/* </NotesContext.Provider> */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
});

export default App