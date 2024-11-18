import { createStaticNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import * as ScreenOrientation from 'expo-screen-orientation'

import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Recover from './src/screens/Recover'
import Home from './src/screens/Home'
import CreateResearch from './src/screens/CreateResearch'
import Coleta from './src/screens/Coleta'
import Report from './src/screens/Report'
import Actions from './src/screens/Actions'
import Thanks from './src/screens/Thanks'

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)

const Stack = createStackNavigator()

// const RootStack = createNativeStackNavigator({
// 	screenOptions: {
// 		headerTintColor: 'white',
// 		headerStyle: {
// 			backgroundColor: '#2B1D62'
// 		}
// 	},
// 	screens: {
// 		Login: {
// 			screen: Login,
// 			options: {
// 				headerShown: false
// 			}
// 		},
// 		Register: {
// 			screen: Register,
// 			options: {
// 				headerTitle: 'Nova Conta'
// 			}
// 		},
// 		Recover: {
// 			screen: Recover,
// 			options: {
// 				headerTitle: 'Recuperação de Senha'
// 			}
// 		},
// 		Home: {
// 			screen: Home,
// 			options: {
// 				headerShown: false
// 			}
// 		},
// 		CreateResearch: {
// 			screen: CreateResearch,
// 			options: {
// 				headerTitle: 'Nova Pesquisa'
// 			}
// 		},
// 		Actions: {
// 			screen: Actions,
// 			options: {
// 				headerTitle: 'Nova Pesquisa'
// 			}
// 		},
// 		Report: {
// 			screen: Report,
// 			options: {
// 				headerTitle: 'Relatório'
// 			}
// 		},
// 		Coleta: {
// 			screen: Coleta,
// 			options: {
// 				headerShown: false
// 			}
// 		},
// 		Thanks: {
// 			screen: Thanks,
// 			options: {
// 				headerShown: false
// 			}
// 		}
// 	}
// })

export default function App() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerShown: false
				}}
			/>
		</Stack.Navigator>
	)
}
