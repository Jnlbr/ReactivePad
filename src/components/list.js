import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import { Button } from 'react-native-elements'
import Note from './note';


export default class MainList extends React.Component{
    constructor(props){
        super(props);
        let dummyData = [{title:'a', Text:'hola soy bata', date: new Date().toLocaleString()},{title:'b', Text:'Hola soy Batman', date: new Date().toLocaleString()}];
        this.state = {dummyData}
    }

    handleAdd = () =>{
        this.setState(previousState =>{
            return {
                dummyData: [...previousState.dummyData ,{title:'c',Text:'hola soy robin'}]
            }
        })
    }

    handleDelete = (index) =>{
        this.setState(previousState=>{
            let newData = previousState.dummyData.slice()
            newData.splice(index, 1)
            return{
                dummyData: newData
            }
        })
    }

    handleEdit = (index, newTitle) =>{
        this.setState(previousState =>{
                let newData = previousState.dummyData;
                newData[index].title = newTitle;
            return{
                dummyData: newData
            }
        })
    }



    render(){
        return(
            <View>
                <Button
                    icon={{name: 'note-add'}}
                    onPress={this.handleAdd}
                />
                <FlatList
                    data={this.state.dummyData}
                    renderItem={({item,index}) => 
                        <Note
                            name={item.title}
                            text={item.Text}
                            date={item.date}
                            id={index}
                            onDelete={this.handleDelete}
                            onEdit = {this.handleEdit} />
                    }
                />
            </View>
        );
    }
}


  