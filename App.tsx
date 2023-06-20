import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Platform } from 'react-native';
import { styles } from './styles';
import PasswordToggle from './PasswordToggle';
import FloatingLabelInput from 'react-native-floating-label-input';

import logininstagram from './src/assets/instagram.png';
import logometa from './src/assets/meta-logo.png';





const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  

	return <View style={styles.container}>

		<TouchableOpacity activeOpacity={0.7}>
			<Image style={styles.image} source={logininstagram} />
		</TouchableOpacity>

		<TextInput
			placeholder='Nome de usuário, email ou número de celular'
			placeholderTextColor='#c1c2c4'
			style={styles.input}
		/>

    <View style={styles.passwordInputContainer}>
  <TextInput
    placeholder='Senha'
    placeholderTextColor='#c1c2c4'
    secureTextEntry={!showPassword}
    style={styles.inputSenha}
    onFocus={handleInputFocus}
    onBlur={handleInputBlur}
  />
  
  <PasswordToggle
    onToggle={togglePasswordVisibility}
    showPassword={showPassword}
    isFocused={isInputFocused}
  />
</View>

   <TouchableOpacity style={styles.loginButtom}>
      <Text style={styles.loginText}>Entrar</Text>
   </TouchableOpacity>

   <View style={styles.forgotContainer}>
     <TouchableOpacity>
       <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
     </TouchableOpacity>
   </View>

   <TouchableOpacity style={styles.newAccountButtom}>
      <Text style={styles.newAccountText}>Criar nova conta</Text>
   </TouchableOpacity>

   <TouchableOpacity activeOpacity={0.7}>
			<Image style={styles.image2} source={logometa} />
		</TouchableOpacity>

	</View>
}

export default App;
