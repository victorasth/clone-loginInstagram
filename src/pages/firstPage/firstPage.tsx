import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './../../routes/routes';
import { styles } from './styles';
import { Serratec, Fotoperfil, Logininstagram, GitHub } from '../../assets/index';


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FirstPage'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

const FirstPage: React.FC<Props> = ({ navigation }) => {

    
        const openExternalLinkedin = () => {
          const url = 'https://www.linkedin.com/in/victorasth/'; 
          Linking.openURL(url);
        };
        const openExternalLinkInst = () => {
            const url = 'https://www.instagram.com/victorasth/'; 
            Linking.openURL(url);
          };
          const openExternalLinkSerra = () => {
            const url = 'https://serratec.org/residencia/'; 
            Linking.openURL(url);
          };

          const openExternalLinkGit = () => {
            const url = 'https://github.com/victorasth/clone-loginInstagram'; 
            Linking.openURL(url);
          };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openExternalLinkSerra} activeOpacity={0.7}>
                <Image style={styles.image} source={Serratec} />
            </TouchableOpacity>

            <Text style={styles.texto}>Atividade desenvolvida por Victor Asth para a disciplina de Desenvolvimento de Aplicativo Mobile do curso Serratec</Text>

            <TouchableOpacity onPress={openExternalLinkedin} activeOpacity={0.7}>
                <Image style={styles.image2} source={Fotoperfil} />
            </TouchableOpacity>

            <Text style={styles.texto}>A proposta do Professor Fred era que o aluno escolhece um aplicativo famoso e clonasse sua página de Login e fizesse uma rota para uma nova página a sua escolha.</Text>
            
            <TouchableOpacity onPress={openExternalLinkInst}>
            <Image style={styles.image3} source={Logininstagram} />
            </TouchableOpacity>
            
            <Text style={styles.texto} >O aplicativo escolhido foi o Instagram.</Text>

            <TouchableOpacity onPress={openExternalLinkGit}>
                <Image style={styles.image3} source={GitHub} />
            </TouchableOpacity>
        </View>
    )
};
export default FirstPage;
