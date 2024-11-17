import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native'
import InputBar from '../components/InputBar'
import Button from '../components/Button'
import { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
	navegation = useNavigation()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const emailRef = useRef()
	const passwordRef = useRef()

	function dataValidator() {
		const emailValid = emailRef.current.validate()
		const passwordValid = passwordRef.current.validate()
		if (!emailValid || !passwordValid) return

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
		navegation.navigate('Recover')
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}> Satisfying.you EMOJI</Text>

			<InputBar ref={emailRef} title="E-mail" value={email} type="email" required={true} onChangeText={setEmail} />
			<InputBar ref={passwordRef} title="Senha" value={password} type="password" required={true} onChangeText={setPassword} />

			<Button title="ENTRAR" color="green" size="lg" validator={dataValidator} onPress={login} />

			<Button title="Criar minha conta" color="blue" size="sm" onPress={register} />
			<Button title="Esqueci minha senha" size="sm" onPress={forgotPassword} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3C2D7E',
		alignItems: 'center',
		paddingVertical: 16,
		flexGrow: 1
	},
	title: {
		fontSize: 32,
		color: '#FFFFFF',
		marginBottom: 20
	}
})
