import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return ( 

    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Main',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen 
        name ="home" // This is the name of the page and must match the url from root
        options={{
          title: 'Prato do Dia',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cutlery" color={color} />,
        }}
    />
      <Tabs.Screen 
        name ="ingrediente" // This is the name of the page and must match the url from root
        options={{
          title: 'Ingredientes',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="leaf" color={color} />,
        }}
    />
     <Tabs.Screen 
        name ="ficha" // This is the name of the page and must match the url from root
        options={{
          title: 'Fichas Tecnicas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="file-text" color={color} />,
        }}
    />
      <Tabs.Screen 
        name ="group" // This is the name of the page and must match the url from root
        options={{
          title: 'Grupos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="group" color={color} />,
        }}
    />
    </Tabs>
  );
}