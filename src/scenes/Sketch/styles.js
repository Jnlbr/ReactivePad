import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: SCREEN_WIDTH,
        // height: SCREEN_HEIGHT*0.70,
        backgroundColor: 'blue',
    }
});

export default styles