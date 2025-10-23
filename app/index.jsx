// import {DrawerMenu} from '..../component/DrawerMenu';
import {
  Dimensions,
  Image,
  StyleSheet,
  View
} from "react-native";

  // imagem provavelmente há um lugar melhor para o acesso
  const imagemFundo = require('../assets/images/praja_gemini_generated.png');
 // mock data
const grupos_ficha = [
  {
    id: 'massas',
    name: 'Massas',
    backgroundColor: '#E74C3C', // Vermelho
  },
  {
    id: 'doces',
    name: 'Doces',
    backgroundColor: '#3498DB', // Azul
  },
  {
    id: 'saladas',
    name: 'Saladas',
    backgroundColor: '#2ECC71', // Verde
  },
  // teste
  // {
  //   id: 'carnes',
  //   name: 'Carnes',
  //   backgroundColor: '#F39C12',
  // },
];

const { height } = Dimensions.get('window');

export default function Index() {


  return (
    <View style={styles.container}>
      
      {/* Imagem de Fundo (Prato) - USANDO REQUIRE */}
      <Image
        source={imagemFundo} // Usa o require()
        style={styles.backgroundImage}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFF5F5',
    gap: 40
  },
  // gemini
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '65%', 
    top: height * 0.25, // Ajuste de posicionamento
    resizeMode: 'contain',
    opacity: 0.5,
  },
})