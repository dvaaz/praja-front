import { useNavigation } from "@react-navigation/native";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

import { ImagemFundo } from "../component/ImagemFundo";
import { NavigationButton } from "../component/NavigationButton";

const { height, width } = Dimensions.get("window");

const opcoes = [
  {
    id: "create",
    name: "Criar Novo Ingrediente",
    corDeFundo: "#FEFEFE",
    corDeTexto: "#000000dc",
    link: "IngredienteCriar"
  },
  {
    id: "search",
    name: "Buscar Ingrediente",
    corDeFundo: "#FEFEFE",
    corDeTexto: "#000000dc",
    link: "IngredienteBuscar"
  }
];

export default function Ingrediente() {
  const navigation = useNavigation();

  const handleCategoryPress = (opcao) => {
    if (opcao?.link) {
      navigation.navigate(opcao.link);
      return;
    }
    console.log(`Sem rota definida para ${opcao.id}`);
  };

  return (
    <View style={styles.container}>
      <ImagemFundo />

      <FlatList
        data={opcoes}
        keyExtractor={(opcao) => opcao.id}
        renderItem={({ item: opcao }) => (
          <NavigationButton
            name={opcao.name}
            onPress={() => handleCategoryPress(opcao)}
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
    backgroundColor: "#FFF5F5",
    gap: 40
  },

  content: {
    flex: 1,
    alignItems: "center",
    marginTop: height * 0.1,
    zIndex: 1
  },
  listContainer: {
    alignItems: "center",
    marginTop: height * 0.2,
    paddingBottom: 20,
    width: width * 0.75
  }
});
