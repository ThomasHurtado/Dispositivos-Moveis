import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native'
import InputBar from '../components/InputBar'
import Button from '../components/Button'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
	navegation = useNavigation()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function dataValidator() {
		if (email == 'admin@admin.com' && password == 'admin') return true
		return 'Email ou senha incorretos'
	}

	function login() {
		navegation.navigate('')
	}
	function register() {
		navegation.navigate('Register')
	}
	function forgotPassword() {
		navegation.navigate('')
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}> Satisfying.you EMOJI</Text>

			<InputBar title="E-mail" value={email} onChangeText={setEmail} type="email" />
			<InputBar title="Senha" value={password} onChangeText={setPassword} type="password" />

			<Button style={{ marginBottom: 15 }} title="ENTRAR" color="green" size="lg" validator={dataValidator} onPress={login} />

			<Button title="Criar minha conta" color="blue" size="sm" onPress={register} />
			<Button title="Esqueci minha senha" size="sm" onPress={forgotPassword} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3C2D7E',
		alignItems: 'center',
		paddingVertical: 16
	},
	title: {
		fontSize: 32,
		color: '#FFFFFF',
		marginBottom: 20
	}
})
