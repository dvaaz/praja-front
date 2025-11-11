import {
  FlatList,
  StyleSheet,
  View
} from "react-native";

import { useRouter } from "expo-router";
import { ImagemFundo } from "../../component/ImagemFundo";
import { NavigationButton } from "../../component/NavigationButton";


// Props
type CategoryProps = {
  id: string;
  name: string;
  corDeFundo: string;
  corDeTexto: string;
};


const opcoes = [
  {
    id: "create",
    name: "Criar Nova Ficha Tecnica",
    corDeFundo: "#FeFeFe",
    corDeTexto: '#000000dc'
  },
  {
    id: "search",
    name: "Buscar Ficha Tecnica",
    corDeFundo: "#FEFEFE",
    corDeTexto: '#000000dc'
  },
];



export default function Ficha() {

  const router = useRouter();

  const handleCategoryPress = (categoria: CategoryProps) => {
    console.log(`Categoria selecionada: ${categoria.name}`);
    // rota estática por id
    switch (categoria.id) {
      case "create":
        router.push("/fichaCriar");
        break;
      case "search":
        router.push("/fichaBuscar");
        break;
      default:
        console.warn("Rota não configurada para", categoria.id);
    }
  }

  return (
    <View style={styles.container}>
      <ImagemFundo />

      <FlatList style={styles.content}
        data={opcoes}
        keyExtractor={(opcao) => opcao.id}
        renderItem={({ item: opcao }) => (
          <NavigationButton
            name={opcao.name}
            onPress={() => handleCategoryPress(opcao)} // em breve um navigation
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