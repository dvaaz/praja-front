import {
  FlatList,
  StyleSheet,
  View
} from "react-native";

import { ImagemFundo } from "../../component/ImagemFundo";
import { NavigationButton } from "../../component/NavigationButton";

const opcoes = [
  {
    id: "create",
    name: "Criar Novo Ingrediente",
    corDeFundo: "#FEFEFE",
    corDeTexto: "#000000dc",
    // link: "IngredienteCriar"
  },
  {
    id: "search",
    name: "Buscar Ingrediente",
    corDeFundo: "#FEFEFE",
    corDeTexto: "#000000dc",
    // link: "IngredienteBuscar"
  }
];

  type Category = {
    id: string;
    name: string;
    corDeFundo: string;
    corDeTexto: string;
    link?: "ingredienteCriar";
  };
 
export default function Ingrediente() {



      const handleCategoryPress = (categoryName:any) => {
      console.log(`Categoria selecionada: ${categoryName}`);
      }
      return (
        <View style={styles.container}>
            <ImagemFundo/>

            <FlatList style={styles.content}
            data={opcoes}
            keyExtractor={(opcao) => opcao.id}
            renderItem= {({item: opcao }) => (
                <NavigationButton
                    name ={opcao.name}
                    onPress={() => handleCategoryPress(opcao.id)} // em breve um navigation
                    buttonColor={opcao.corDeFundo}
                    textColor={opcao.corDeTexto}
                    link={opcao.link}
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
    gap: 40,
    height: '100%',
    width: '100%',
  },

  content: {
    flex: 1,
    paddingTop: "20%", // Empurra o conteúdo para baixo
    width: '100%',
  },

  listContainer: {
    alignItems: "center", // centraliza os itens da FlatList
    gap: 20,              // espaçamento entre botões
    paddingBottom: 20,
  },

})