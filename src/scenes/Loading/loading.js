import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { getItem } from '../../helpers/storage';
import { setNotes } from '../../actions/notes';


class Loading extends Component {
  constructor(props) {
    super(props);

    this.loadNotes();
  }

  loadNotes = async () => {
    try {
      const notes = await getItem('notes');
      if(notes) {
        this.props.setNotes(JSON.parse(notes));
      }
      this.props.navigation.navigate('Routes');
    } catch(err) {
      console.log('ERROR ON LOADING SCREEN: ');
      console.log(err)
      this.props.navigation.navigate('Routes');
      // Error handler
    }
  }

   render() {

    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
const mapDispatchToProps = dispatch => ({
  setNotes: (notes) => {
    dispatch(setNotes(notes));
  }
});

export default connect(null,mapDispatchToProps)(Loading);