// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { BiSolidDish, BiSolidFoodMenu } from "react-icons/bi";
// import { COLORS } from '../constants/theme'; // bela organizaçao de cores
// import { FilterProvider } from '../context/filterContext';

// //import screens
// import Inicio from '../index';
// import Home from '../homeScreen';
// import Ingrediente from '../ingrediente/ingredienteScreen';
// import IngredienteCriar from '../ingrediente/ingredienteCriarScreen';
// import IngredienteBuscar from '../ingrediente/ingredienteBuscarScreen';
// import Ficha from '../fichaTecnica/fichaScreen';
// import FichaCriar from '../fichaTecnica/fichaCriarScreen';
// import FichaBuscar from '../fichaTecnica/FichaBuscarScreen';


// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// // Tab Navigator
// const MainTabNavigator = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             let animation = '';

//                     if (route.name === 'Home') {
//                         iconName = focused ? 'cutlery' : 'cutlery-outline';
//                         animation = focused ? 'bounce' : '';
//                     } else if (route.name === 'Ingredientes') {
//                         iconName = focused ? 'carot' : 'carot-outline';
//                         animation = focused ? 'bounce' : '';
//                     } else if (route.name === 'Fichas') {
//                         iconName = focused ? 'bx-food-menu' : 'bx-food-menu-outline';
//                         animation = focused ? 'bounce' : '';
//                     }
//                     return <ReacIcons name={iconName} size={size} color={color} animation={animation} />;
//                 },
//                 tabBarActiveTintColor: COLORS.blue,
//                 tabBarInactiveTintColor: COLORS.gray,
//                 tabBarStyle: {
//                     backgroundColor: COLORS.white,
//                     borderTopColor: COLORS.lightGray,
//                 },
//                 headerStyle: {
//                     backgroundColor: COLORS.white,
//                 },
//                 headerTintColor: COLORS.softPearch,
//                 headerTitleStyle: {
//                     fontWeight: 'bold',
//                 },
//             })}
//         />
//             <Tab.Screen
//             name="Home" component={Home}
//             options={{
//                 title:"Pratos do Dia"
//             }}
//             />
//             <Tab.Screen
//             name="Ingredientes" component={Ingrediente}
//                         options={{
//                 title:"Ingredientes"
//             }}
//              />
//             <Tab.Screen
//             name="Fichas" component={Ficha}
//                         options={{
//                 title:"Fichas Tecnicas"
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
// // Stack Navigator principal
// const AppNavigator = () => {
//     return (
//         <FilterProvider>
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Inicio">
//                 <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
//                 <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
//                 <Stack.Screen name="IngredienteCriarScreen" component={IngredienteCriar} options={{ title: 'Criar Ingrediente' }} />
//                 <Stack.Screen name="IngredienteBuscarScreen" component={IngredienteBuscar} options={{ title: 'Buscar Ingrediente' }} />
//                 <Stack.Screen name="FichaCriarScreen" component={FichaCriar} options={{ title: 'Criar Ficha Técnica' }} />
//                 <Stack.Screen name="FichaBuscarScreen" component={FichaBuscar} options={{ title: 'Buscar Ficha Técnica' }} />
//             </Stack.Navigator>
//         </NavigationContainer>
//         </FilterProvider>
//     )

// }