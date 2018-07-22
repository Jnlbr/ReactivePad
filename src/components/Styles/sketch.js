import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        elevation: 15,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginTop: 25,
    }
});

