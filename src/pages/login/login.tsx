import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/routes';
import PasswordToggle from '../../PasswordToggle';
import { Logininstagram, Logometa } from '../../assets/index';
import { styles } from './styles';



type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Login: React.FC<Props> = ({ navigation }) => {


  const [showPassword, setShowPassword] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  //const colorScheme = useColorScheme();
  
  
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
			<Image style={styles.image} source={Logininstagram} />
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
    onFocus={handleInputFocus}
    onBlur={handleInputBlur}
  />
  
  <PasswordToggle
    onToggle={togglePasswordVisibility}
    showPassword={showPassword}
    isFocused={isInputFocused}
  />
</View>

   <TouchableOpacity onPress={() => navigation.navigate('FirstPage')} style={styles.loginButtom}>
      <Text style={styles.loginText}>Entrar</Text>
   </TouchableOpacity> 

   <View style={styles.forgotContainer}>
     <TouchableOpacity>
       <Text onPress={() => navigation.navigate('ForgotPassword')}style={styles.forgotText}>Esqueceu a senha?</Text>
     </TouchableOpacity>
   </View>

   <TouchableOpacity style={styles.newAccountButtom}>
      <Text style={styles.newAccountText}>Criar nova conta</Text>
   </TouchableOpacity>

   <TouchableOpacity activeOpacity={0.7}>
			<Image style={styles.image2} source={Logometa} />
		</TouchableOpacity>

	</View>
}

export default Login;
