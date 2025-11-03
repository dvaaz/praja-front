
import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View
} from "react-native";

import { ImagemFundo } from "../component/ImagemFundo/index";
import { NavigationButton } from "../component/NavigationButton/index";


 // mock data
const grupos_ficha = [
  {
    id: "massas",
    name: "Massas",
    corDeFundo: '#af6032ff', // Vermelho
    corDeTexto: '#FFF'
  },
  {
    id: "doces",
    name: "Doces",
    corDeFundo: '#3498DB', // Azul
    corDeTexto: '#FFF'
  },
  {
    id: "saladas",
    name: "Saladas",
    corDeFundo: '#2ECC71', // Verde
    corDeTexto: '#FFF'
  },
  // teste
  {
    id: "carnes",
    name: "Carnes",
    corDeFundo: '#f33f12ff',
    corDeTexto: '#FFF'
  },
];

const { height, width } = Dimensions.get("window"); // vai obter o tamanho da janela para fazer ajustes dinamicos no css

export default function Main() {


  const handleCategoryPress = (categoryId:string) => {
      console.log(`Categoria selecionada: ${categoryId}`);
      // Futuramente: navigation.navigate()
    };

  return (
    <View style={styles.container}>
      
        <ImagemFundo/>
        
        
      {/* Conteúdo Central: a partir daqui o título e a FlatList */}
      <View style={styles.content}>
      
      {/* Lista de Categorias : FlatList é o componente para renderisar rolagem de filas longas
      recomendado o uso junto a ScrollView para não renderizar itens não visíveis na tela, nesse caso utilizando contentContainerStyle*/}
        <FlatList
          data={grupos_ficha}
          keyExtractor={(item) => item.id}
          // Passando as props para o componet NavigationButton
          renderItem={({ item }) => (
            <NavigationButton 
              name={item.name}
              onPress={()=>handleCategoryPress(item.id)} 
              buttonColor={item.corDeFundo}
              textColor={item.corDeTexto}
            />
          )}
              contentContainerStyle={styles.listContainer}
        />

      </View>


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
    paddingBottom: 20,
    width: width, // Garante que o FlatList ocupe toda a largura
  },

})