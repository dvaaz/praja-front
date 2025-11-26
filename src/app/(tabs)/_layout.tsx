import { COLOR } from '@/utils/constants';
import { Drawer } from 'expo-router/drawer';
import { Provider as PaperProvider } from 'react-native-paper';

export default function Layout() {
  return (
    <PaperProvider>
      <Drawer
        screenOptions={{
          headerStyle: {                       // Define o estilo do cabecalho das telas
            backgroundColor: COLOR.preto,      // Define a cor de fundo do header
            borderBottomWidth: 1,
            borderBottomColor: COLOR.background,
          },
          headerTintColor: COLOR.branco,           // Ajusa a cor do texto
          drawerStyle: {
            backgroundColor: COLOR.background,       // Cor de fundo do drawer
          },
          drawerLabelStyle: {
            color: COLOR.preto,                    // Cor do texto do drawer
          }
        }
        }
      >
        <Drawer.Screen                          // Configurações da tela index
          name='index'
          options={{
            headerShown: false,                  // Oculta o cabeçalho da tela index
            drawerItemStyle: {
              display: "none",
            }                  // Oculta o index do drawer
          }}
        />
        <Drawer.Screen
          name='../../screens/auth/login'
          options={{
            headerShown: false,              // Oculta o cabeçalho na tela de login
            drawerItemStyle: {
              display: "none",
            }                  // Oculta o login do drawer
          }}
        />
        <Drawer.Screen                          // Configurações da tela de cadastro
          name='../../screens/auth/register'
          options={{
            headerShown: false,                  // Oculta o cabeçalho da tela index
            drawerItemStyle: {
              display: "none",
            }                  // Oculta o index do drawer
          }}
        />
        <Drawer.Screen
          name='../../screens/ingrediente/ingredienteCriarScreen' 
          // não deve mostrar o endereço no cabeçalho nem mostrar o endereço no drawer
          options={{
              headerShown: false,
              drawerItemStyle: {
                display: "none",
              }
            }}
        />
        <Drawer.Screen
          name='ingredienteScreen'
          options={{
            title: 'Ingredientes',               // Define o título da tela no drawer
          }}
        />
        <Drawer.Screen
          name='fichaScreen'
          options={{
            title: 'Fichas Técnicas',            // Define o título da tela no drawer
          }}
        />


      </Drawer>
    </PaperProvider>
  );
}