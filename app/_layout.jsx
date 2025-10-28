import { Drawer } from 'expo-router/drawer';
import { StyleSheet } from 'react-native';

// https://docs.expo.dev/router/advanced/drawer/
export default function RootLayout() {
  return( 
  <Drawer>
      <Drawer.Screen 
        name ="main" // This is the name of the page and must match the url from root
        options={{
        drawerLabel: 'Prato do Dia',
        title: 'Prato do Dia',
        }}
    />
      <Drawer.Screen 
        name ="ingrediente" // This is the name of the page and must match the url from root
        options={{
        drawerLabel: 'Ingredientes',
        title: 'Ingredientes',
        }}
    />
     <Drawer.Screen 
        name ="ficha" // This is the name of the page and must match the url from root
        options={{
        drawerLabel: 'Fichas Tecnicas',
        title: 'Fichas Tecnicas',
        }}
    />
      <Drawer.Screen 
        name ="group" // This is the name of the page and must match the url from root
        options={{
        drawerLabel: 'Grupos',
        title: 'Grupos',
        }}
    />
    </Drawer>
  );
}

const styles = StyleSheet.create ({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: '#333',
    marginBottom: 40,
    letterSpacing: 2,
  },
})