import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './../../routes/routes';
import { styles } from './styles';
import { Logininstagram, Logometa, Fotoperfil } from '../../assets/index';


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (



    <View style={styles.container}>

      <TouchableOpacity activeOpacity={0.7}>
        <Image style={styles.image} source={Logininstagram} />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <Image style={styles.image2} source={Fotoperfil} />
      </TouchableOpacity>

      <Text style={styles.nome}>victorasth</Text>

      <TouchableOpacity onPress={() => navigation.navigate('FirstPage')} style={styles.loginButtom}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.newAccountButtom}>
        <Text style={styles.newAccountText}>Entrar em outra conta</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.newAccount}>Criar nova conta</Text>
      </TouchableOpacity>

      <Image style={styles.image3} source={Logometa} />




    </View>
  );
};

export default HomeScreen;