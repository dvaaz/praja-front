import { Dimensions, Image, StyleSheet } from 'react-native';

const imagemFundoSrc = require('../../assets/images/praja_gemini_generated.png');
const { height } = Dimensions.get('window');

// imagem 
export const ImagemFundo = () => {
    
    return (
        <>
        {/* Imagem de Fundo (Prato) - USANDO REQUIRE, buscar se há outra forma de referenciar fora deste index */}
        <Image
        source={imagemFundoSrc} // Usa o require()
        style= {styles.backgroundImage}
        />
        </>
    );
};

const styles = StyleSheet.create ({
    backgroundImage: {
    position: 'absolute',
    width: '120%',
    height: '100%', 
    top:  height* -0.15, // Ajuste de posicionamento
    resizeMode: 'contain',
    opacity: 0.1,
    backgroundColor: '#f5bdf2ff'
  },
})
  