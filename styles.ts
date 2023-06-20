import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex:1,
        backgroundColor: '#121015',
        paddingTop: 60,
        paddingHorizontal: 30
	},
	title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
	image: {
        
        width: 50,
        height: 50
    },
	input: {
        backgroundColor:'#FFF',
        color: '#fff',
        fontSize: 15,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 9
    },
    loginText:{
        color: '#white',
    },
    loginButtom: {

    },
    forgotContainer:{

    },
    forgotText: {
        color: 'white'
    },
});