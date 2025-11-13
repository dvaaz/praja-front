import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { COLORS } from '../utils/constants';

export default function Layout() {
  // const Tabs = [
  //   name: 'home',
  //     <BiSolidDish size ={28} color={color} />,
  // ]
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'question';

          if (route.name === 'home') iconName = 'cutlery';
          else if (route.name === 'ingrediente') iconName = 'carrot';
          else if (route.name === 'ficha') iconName = 'clipboard-list';
          else if (route.name === 'group') iconName = 'users';
          else if (route.name === 'index') iconName = 'home';

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
            tabBarStyle: {
            backgroundColor: COLORS.branco,
            borderTopColor: COLORS.softtGray,
            },
        tabBarInactiveTintColor: 'COLORS.gray',
        headerStyle: { backgroundColor: 'white' },
        headerTitleStyle: { fontWeight: 'bold' },
        
      })}
    />
  );
}
