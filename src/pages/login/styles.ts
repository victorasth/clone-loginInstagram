import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#edf4fe',
        paddingTop: 60,
        paddingHorizontal: 8
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    image: {
        marginTop: Platform.OS === 'android' ? '8%' : '12%',
        marginBottom: Platform.OS === 'android' ? '13%' : '20%',
        width: 100,
        height: 120,
    },
    input: {
        backgroundColor: '#ffffff',
        width: '95%',
        height: 60,
        color: '#black',
        fontSize: 14,
        padding: Platform.OS === 'ios' ? 13 : 10,
        marginBottom: '3%',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#c1c2c4'


    },



    passwordInputContainer: {
        backgroundColor: '#ffffff',
        width: '95%',
        height: 60,
        color: '#black',
        fontSize: 14,
        padding: Platform.OS === 'ios' ? 13 : 10,
        marginBottom: '3%',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#c1c2c4',
        justifyContent: 'center'
    },

    loginButtom: {

        marginTop: '1%',
        backgroundColor: '#0064e0',
        width: '95%',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginText: {
        color: '#fff',
        fontSize: 15,


    },
    forgotContainer: {
        width: '90%',
        marginTop: 20,
        alignItems: 'center'
    },
    forgotText: {
        color: 'black'
    },
    newAccountButtom: {
        borderColor: '#0064e0',
        borderWidth: 1.5,
        width: '95%',
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '55%'

    },

    newAccountText: {
        color: '#0064e0',
        fontSize: 15
    },

    image2: {
        tintColor: "#404e57",
        marginTop: 10,
        width: 60,
        height: 30,
    },




});