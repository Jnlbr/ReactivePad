import React, {Component} from 'react';
import { View,
        StyleSheet,
        Text,
        Dimensions,
        Image,
        TouchableOpacity,
        
    } from 'react-native';
import { Card,Button } from 'react-native-elements';

export default class Note extends Component{

    handleTransition = (text, title) =>{
        return this.props.navigation.push('Editor', {title: title, content: text});
    }

    render(){
        return(
            <Card>
                <View style={styles.titleview}>
                    <Text>{this.props.name}</Text>
                    <Button
                        onPress={this.handleTransition(this.props.text, this.props.title)}/>
                    <Button 
                        icon ={{name: 'title',color: 'black'}}
                        buttonStyle={styles.button}
                        onPress= {()=> this.props.onEdit(this.props.id, 'hola')}
                    />
                </View>
                <Text 
                    numberOfLines={3}
                    style={styles.text}>
                    {this.props.text}
                </Text>
                <View style={styles.footer}>
                    <Text>{this.props.date}</Text>
                    <Button 
                        icon ={{name: 'delete',color: 'black'}}
                        buttonStyle={styles.button}
                        onPress= {() => this.props.onDelete(this.props.id)}
                    />
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    titleview: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
        paddingBottom: 3,
        justifyContent: 'space-between'
    },text:{
        color: 'gray',
        marginVertical: 5
    },button:{
        width: 30,
        height:20,
        backgroundColor: '#dbdbdb',
        padding: 0,
        margin: 0,
        borderWidth: 1,
        borderColor: 'gray'
    },footer:{
        flexDirection: 'row', 
        justifyContent:'space-between', 
        borderTopWidth:1,
        borderTopColor: '#dbdbdb',
        paddingTop: 5,
    }
});
