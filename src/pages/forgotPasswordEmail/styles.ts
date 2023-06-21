import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        //alignItems: 'center',
        flex: 1,
        backgroundColor: '#edf4fe',
        paddingTop: 30,
        paddingHorizontal: 8,
        //justifyContent: 'center',
    },

    titulo: {
        color: 'black',
        fontSize: 26,
        marginTop: 80,
        marginBottom: 10,
        //justifyContent: 'center',
        textAlign: 'left',
        fontWeight: '600',

    },

    texto1: {
        marginBottom: 3,
    },

    texto2: {
        marginBottom: 20,
        color: '#0064e0',
    },

    input: {
        backgroundColor: '#ffffff',
        width: '95%',
        height: 60,
        color: '#black',
        fontSize: 15,
        padding: Platform.OS === 'ios' ? 13 : 10,
        marginBottom: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#c1c2c4'
    },

    foundButtom: {
        backgroundColor: '#0064e0',
        width: '95%',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },

    foundText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },

    foundCelText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "400"
    },


});