import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
} from 'react-native';
import styles from './Styles/colorPicker';

class ColorPicker extends Component {
   constructor(props) {
      super(props);

      this.state = {
         colors: [],
      }
   }
   componentDidMount() {
      this.setState({
         colors: this.props.colors,
      });
   }

   ballStyles = (color,index) => {
      const selectedStyles = (this.props.selected === index) 
         ? {backgroundColor: color, borderWidth: 3, borderColor: 'black'}
         : {backgroundColor: color}
      return [styles.ball, selectedStyles]
   }

   renderColors = () => this.state.colors.map((color,index) =>
      <TouchableOpacity
         key={index}
         style={this.ballStyles(color,index)}
         onPress={this.props.onPress(index)}
      />
   )

   render() {
      return (
         <View style={styles.container}>
            {this.renderColors()}
         </View>
      );
   }
}

export default ColorPicker;