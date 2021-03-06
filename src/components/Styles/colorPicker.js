import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'wrap'
    },
    ball: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10      
    },
});

export default styles