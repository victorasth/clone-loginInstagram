import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/routes';
import { styles } from './styles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPassword'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const ForgotPassword: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.titulo}>Encontre sua conta</Text>
      </TouchableOpacity>

      
        <Text style={styles.texto1}>Insira seu nome de usuário ou email.</Text>
      

      <TouchableOpacity>
        <Text style={styles.texto2}>Can't reset your password?</Text>
      </TouchableOpacity>

      <TextInput
			placeholder='Nome de usuário ou email.'
			placeholderTextColor='#c1c2c4'
			style={styles.input}
		/>

      <TouchableOpacity style={styles.foundButtom}>
        <Text style={styles.foundText}>Encontrar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('ForgotPasswordCell')} style={styles.foundCelText}>Pesquisar pelo número do celular</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ForgotPassword;
