import { StyleSheet } from 'react-native';

const primaryColor = '#8257e5'

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: primaryColor
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 280,
        marginVertical: 5
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default styles;