import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';

import logininstagram from './src/assets/instagram.png';

const App = () => {

	return <View style={styles.container}>
		<TouchableOpacity activeOpacity={0.7}>
			<Image style={styles.image} source={logininstagram} />
		</TouchableOpacity>
		<TextInput
			placeholder='Nome de usuário, email ou número de celular'
			placeholderTextColor='#555'
			style={styles.input}
		/>
    <TextInput
			placeholder='Senha'
			placeholderTextColor='#555'
			style={styles.input}
		/>
   <TouchableOpacity style={styles.loginButtom}>
      <Text style={styles.loginText}>Entrar</Text>
   </TouchableOpacity>

   <View style={styles.forgotContainer}>
     <TouchableOpacity>
       <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
     </TouchableOpacity>
   </View>

	</View>
}

export default App;
