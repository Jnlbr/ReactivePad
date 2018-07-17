import React, { Component } from 'react';
import {
		View,
        Button,
        TextInput,
        Text

} from 'react-native';

export default class EditorScreen extends Component{
    render(){
        const { navigation } = this.props;
        const title = navigation.getParam('title', 'NO-ID');
        const content = navigation.getParam('content', 'some default value');

        return(
            <View>
                <Text>{JSON.stringify(title)}</Text>
                <TextInput
                    multiline={true}
                    value={JSON.stringify(content)}
                    editable={true}
                    >
                </TextInput>
            </View>
        )
    }
}