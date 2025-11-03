import {
    Dimensions,
    FlatList,
    StyleSheet,
    View
} from "react-native";

import { ImagemFundo } from "../component/ImagemFundo";
import { NavigationButton } from "../component/NavigationButton";


const { weight, height, width } = Dimensions.get("window");
// variaveis que trarão hyperlinks hyperlinks
const opcoes = [
    {
        id:"create",
        name: "Criar Nova Ficha Tecnica",
        corDeFundo: "#FeFeFe",
        corDeTexto: '#000000dc'
        // link: "criarIngrediente"
    },
    {
        id:"search",
        name: "Buscar Ficha Tecnica",
        corDeFundo: "#FEFEFE",
        corDeTexto: '#000000dc'
    },
];

export default function Ficha() {

      const handleCategoryPress = (categoryId) => {
      console.log(`Categoria selecionada: ${categoryId}`);
      }
      return (
        <View style={styles.container}>
            <ImagemFundo/>

            <FlatList
            data={opcoes}
            keyExtractor={(opcao) => opcao.id}
            renderItem= {({item: opcao }) => (
                <NavigationButton
                    name ={opcao.name}
                    onPress={() => handleCategoryPress(opcao.id)} // em breve um navigation
                    buttonColor={opcao.corDeFundo}
                    textColor={opcao.corDeTexto}
                />
            )}
            contentContainerStyle={styles.listContainer}
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

  content: {
    flex: 1,
    alignItems: "center",
    marginTop: height * 0.1, // Empurra o conteúdo para baixo
    zIndex: 1, // Garantir que o conteúdo principal esteja na frente
  },
  listContainer: {
    alignItems: "center",
    marginTop: height * 0.2,
    paddingBottom: 20,
    width: width * 0.75, // Garante que o FlatList ocupe toda a largura
  },

})