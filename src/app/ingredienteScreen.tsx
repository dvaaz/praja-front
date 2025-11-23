import { useRouter } from "expo-router";
import {
    FlatList,
    StyleSheet,
    View
} from "react-native";
import { ImagemFundo } from "../component/ImagemFundo";
import { PrimaryButton } from "../component/PrimaryButton";

type CategoryProps = {
  id: string;
  name: string;
  corDeFundo: string;
  corDeTexto: string;
};

const opcoes:CategoryProps[] = [
  {
    id: "create",
    name: "Criar Novo Ingrediente",
    corDeFundo: "#FEFEFE",
    corDeTexto: "#000000dc",
  },
  {
    id: "search",
    name: "Buscar Ingrediente",
    corDeFundo: "#FEFEFE",
    corDeTexto: "#000000dc",
  }
];



export default function Ingrediente() {
  const router = useRouter();

  const handleCategoryPress = (categoria: CategoryProps) => {
    console.log(`Navegando para ${categoria.name}`)
    // rota estática por id
    switch (categoria.id) {
      case "create":
        router.navigate("../../screens/ingrediente/ingredienteCriarScreen");
        break;
      case "search":
        router.navigate("../../screens/ingrediente/ingredienteBuscarScreen");
        break;
      default:
        console.warn("Rota não configurada para", categoria.id);
    }
  };

  return (
    <View style={styles.container}>
      <ImagemFundo />

      <FlatList
        style={styles.content}
        data={opcoes}
        keyExtractor={(opcao) => opcao.id}
        renderItem={({ item: opcao }) => (
          <PrimaryButton
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
    backgroundColor: '#f9d4d4ff',
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