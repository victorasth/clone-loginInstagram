import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
	container: {
        alignItems: 'center',
		flex:1,
        backgroundColor: '#edf4fe',
        paddingTop: 60,
        paddingHorizontal: 30
	},
	title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
	image: {
        marginTop: Platform.OS === 'android' ? '13%' : '20%',
        marginBottom: Platform.OS === 'android' ? '13%' : '20%',
        width: 60, 
        height: 60
    },
	input: {
        backgroundColor:'#ffffff',
        width:'95%',
        height:60,
        color: '#black',
        fontSize: 14,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginBottom: '5%',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0'

        
    },
    loginText:{
        color: '#fff',
        fontSize: 15,
        
          
    },
    loginButtom: {
        
        marginTop: '5%',
        backgroundColor: '#0064e0',
        width:'95%',
        height:50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
        
        


    },
    forgotContainer:{
        width: '90%',
        marginTop: 20,
        alignItems: 'center'
        
       
    },
    forgotText: {
        color: 'black'
    },
});