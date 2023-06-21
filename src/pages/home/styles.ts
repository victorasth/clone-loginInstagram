import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#edf4fe',
        paddingTop: 60,
        paddingHorizontal: 8
    },

    image: {
        marginTop: Platform.OS === 'android' ? '8%' : '12%',
        width: 70,
        height: 100,
    },

    image2: {
        marginTop: 20,
        width: 190,
        height: 180,
    },

    nome: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },

    loginButtom: {

        marginTop: 20,
        backgroundColor: '#0064e0',
        width: '95%',
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginText: {
        color: '#fff',
        fontSize: 15,


    },

    newAccountButtom: {
        borderColor: '#c1c2c4',
        borderWidth: 1.5,
        width: '95%',
        height: 45,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,

    },

    newAccountText: {
        color: 'black',
        fontSize: 15
    },

    newAccount: {
        marginTop: "55%",
        fontSize: 16,
    },

    image3: {
        tintColor: "#404e57",
        marginTop: "3%",
        width: 60,
        height: 30,
    },

});