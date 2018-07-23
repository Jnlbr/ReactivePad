import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const SCREEN_HEIGHT = Dimensions.get('window').height * 0.80

export default class overlay extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.swipe}>
          <Icon name='gesture-swipe-left'
            type='material-community'
            iconStyle={styles.actionButtonSwipe}/>
            <Text style={{fontSize: 8}}>Delete</Text>
        </View>
        <View style={styles.swipeRight}>
          <Icon name='gesture-swipe-right'
            type='material-community'
            iconStyle={styles.actionButtonSwipe}/>
            <Text style={{fontSize: 8}}>Edit</Text>
        </View>
				<TouchableOpacity style={styles.button}
          onPress={() => this.props.handleOption('text')}>
          <Icon 
            name='note-add'
            iconStyle={styles.actionButtonIcon}/>
				</TouchableOpacity>

        <TouchableOpacity style={[styles.button,styles.buttonEdit]}
          onPress={() => this.props.handleOption('sketch')}>
          <Icon 
            name='edit'
            iconStyle={styles.actionButtonIcon}/>
				</TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonUndo]}
          //onPress={}
          >
          <Icon 
            name='ios-undo'
            type='ionicon'
            iconStyle={styles.actionButtonIcon}/>
				</TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 22,
    height: 22,
    color: 'white',
  },button:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 50, 
    width: 50, 
    marginTop: 10, 
    backgroundColor: '#38a068',
    borderRadius: 30,
    position: 'absolute',
    bottom: 35,
    right: 10,
  },buttonEdit:{
    backgroundColor: '#a03838',
    bottom: 90,
  },buttonUndo:{
    backgroundColor: 'gray',
    right: 0,
    left: 10
  },swipe:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 25, 
    width: 25,
    position: 'absolute',
    bottom: SCREEN_HEIGHT,
    left: 10,
  },swipeRight:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 25, 
    width: 25,
    position: 'absolute',
    bottom: SCREEN_HEIGHT,
    right: 10,
  },actionButtonSwipe: {
    fontSize: 22,
    height: 22,
    color: 'black',
  }
});