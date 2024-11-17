import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import * as ScreenOrientation from 'expo-screen-orientation'

import { StatusBar } from 'expo-status-bar'

import Login from './src/screens/Login'
import Register from './src/screens/Register'

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
		}
	}
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
	return <Navigation />
}
