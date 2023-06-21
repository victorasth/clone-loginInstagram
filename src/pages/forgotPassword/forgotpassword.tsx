import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
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
    </View>
  );
};

export default ForgotPassword;
