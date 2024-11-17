import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import * as ScreenOrientation from 'expo-screen-orientation'

import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Recover from './src/screens/Recover'
import Home from './src/screens/Home'
import CreateResearch from './src/screens/CreateResearch'

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)

const RootStack = createNativeStackNavigator({
	screenOptions: {
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#2B1D62'
		}
	},
	screens: {
		Login: {
			screen: Login,
			options: {
				headerShown: false
			}
		},
		Register: {
			screen: Register,
			options: {
				headerTitle: 'Nova Conta'
			}
		},
		Recover: {
			screen: Recover,
			options: {
				headerTitle: 'Recuperação de Senha'
			}
		},
		Home: {
			screen: Home,
			options: {
				headerShown: false
			}
		},
		CreateResearch: {
			screen: CreateResearch,
			options: {
				headerTitle: 'Nova Pesquisa'
			}
		}
	}
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
	return <Navigation />
}
