import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
	container: {
        alignItems: 'center',
		flex:1,
        backgroundColor: '#edf4fe',
         paddingTop: 60,
         paddingHorizontal: 8
	},

    image:{
        width: 300, 
        height: 100,
        marginTop:50,
    },

    image2:{
        width: 120, 
        height: 100,
        marginTop:30,
    },

    image3:{
        width: 120, 
        height: 100,
        marginTop:30,
    },

    texto:{
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'

    },
}
);