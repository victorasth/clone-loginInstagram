import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/routes';
import { styles } from './styles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPasswordCell'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const ForgotPasswordCell: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.titulo}>Encontre sua conta</Text>
      </TouchableOpacity>


      <Text style={styles.texto1}>Insira o número do seu celular.</Text>


      <TouchableOpacity>
        <Text style={styles.texto2}>Can't reset your password?</Text>
      </TouchableOpacity>

      <TextInput
        placeholder='Número do celular'
        placeholderTextColor='#c1c2c4'
        style={styles.input}
      />

      <TouchableOpacity style={styles.foundButtom}>
        <Text style={styles.foundText}>Encontrar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('ForgotPassword')} style={styles.foundCelText}>Pesquisar por email</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ForgotPasswordCell;
