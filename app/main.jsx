import React, {useState} from 'react';
import { GroupButton } from '../component/GroupButton';
import {DrawerMenu} from '../component/DrawerMenu';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity // abre e fecha o menu
} from "react-native";


  // imagem provavelmente há um lugar melhor para o acesso
  const imagemFundo = require('../assets/images/praja_gemini_generated.png');
 // mock data
const grupos_ficha = [
  {
    id: 'massas',
    name: 'Massas',
    backgroundColor: '#af6032ff', // Vermelho
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
  {
    id: 'carnes',
    name: 'Carnes',
    backgroundColor: '#f33f12ff',
  },
];

const { height } = Dimensions.get('window'); // vai obter o tamanho da janela para fazer ajustes dinamicos no css

export default function Main() {
 
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); //

  const handleCategoryPress = (categoryId) => {
      console.log(`Categoria selecionada: ${categoryId}`);
      // Futuramente: navigation.navigate()
    };

  return (
    <View style={styles.container}>
      
      {/* Imagem de Fundo (Prato) - USANDO REQUIRE, buscar se há outra forma de referenciar fora deste index */}
      <Image
        source={imagemFundo} // Usa o require()
        style={styles.backgroundImage}
      />
        
        {/* Gaveta: HEADER COM O BOTÃO DE ABRIR O MENU (☰)
        Chamada da gaveta */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setIsDrawerOpen(true)}>
            <Text style={styles.drawerIcon}>☰</Text> 
          </TouchableOpacity>
        </View>

        <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        />
        
      {/* Conteúdo Central: a partir daqui o título e a FlatList */}
      <View style={styles.content}>
          <Text style={styles.title}>PRATOS DO DIA</Text>


      
      {/* Lista de Categorias : FlatList é o componente para renderisar rolagem de filas longas
      recomendado o uso junto a ScrollView para não renderizar itens não visíveis na tela, nesse caso utilizando contentContainerStyle*/}
        <FlatList
          data={grupos_ficha}
          keyExtractor={(item) => item.id}
          // Passando as props para o componet GroupButton
          renderItem={({ item }) => (
            <GroupButton 
              name={item.name}
              onPress={() => handleCategoryPress(item.id)} 
              buttonColor={item.backgroundColor}
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
  // gemini
  backgroundImage: {
    position: 'absolute',
    width: '120%',
    height: '100%', 
    top:  height* -0.25, // Ajuste de posicionamento
    resizeMode: 'contain',
    opacity: 0.2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: height * 0.1, // Empurra o conteúdo para baixo
    zIndex: 1, // Garantir que o conteúdo principal esteja na frente
  },
  listContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    width: Dimensions.get('window').width, // Garante que o FlatList ocupe toda a largura
  },
})