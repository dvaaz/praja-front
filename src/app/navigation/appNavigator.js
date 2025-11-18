// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ReacIcons from 'react-native-vector-icons/Ionicons';
// import { COLOR } from '../../utils'; // bela organizaçao de cores
// import { FilterProvider } from '../context/filterContext';

// //import screens
// import FichaBuscar from '../fichaTecnica/FichaBuscarScreen';
// import FichaCriar from '../fichaTecnica/fichaCriarScreen';
// import Ficha from '../fichaTecnica/fichaScreen';
// import Home from '../homeScreen';
// import Inicio from '../index';
// import IngredienteBuscar from '../ingrediente/ingredienteBuscarScreen';
// import IngredienteCriar from '../ingrediente/ingredienteCriarScreen';
// import Ingrediente from '../ingrediente/ingredienteScreen';


// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// // Tab Navigator
// const MainTabNavigator = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//                     if (route.name === 'Home') {
//                         iconName = focused ? 'cutlery' : 'cutlery-outline';
//                     } else if (route.name === 'Ingredientes') {
//                         iconName = focused ? 'carot' : 'carot-outline';
//                     } else if (route.name === 'Fichas') {
//                         iconName = focused ? 'bx-food-menu' : 'bx-food-menu-outline';
//                     }
//                     return <ReacIcons name={iconName} size={size} color={color}  />;
//                 },
//                 tabBarActiveTintColor: COLOR.blue,
//                 tabBarInactiveTintColor: COLOR.gray,
//                 tabBarStyle: {
//                     backgroundColor: COLOR.white,
//                     borderTopColor: COLOR.lightGray,
//                 },
//                 headerStyle: {
//                     backgroundColor: COLOR.white,
//                 },
//                 headerTintColor: COLOR.softPearch,
//                 headerTitleStyle: {
//                     fontWeight: 'bold',
//                 },
//             })}>
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
//             }}
//             />
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