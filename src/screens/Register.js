import { StyleSheet, Text, ScrollView } from 'react-native'
import InputBar from '../components/InputBar'
import Button from '../components/Button'
import { useState } from 'react'

export default function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [cpassword, setCpassword] = useState('')

	const dataValidator = () => {
		if (password == cpassword) return true
		return 'O campo repetir senha difere da senha'
	}

	function register() {}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<InputBar title="E-mail" value={email} onChangeText={setEmail} type="email" />
			<InputBar title="Senha" value={password} onChangeText={setPassword} type="password" />
			<InputBar title="Repetir senha" value={cpassword} onChangeText={setCpassword} type="password" />
			<Button title="CADASTRAR" color="green" validator={dataValidator} onPress={register} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3C2D7E',
		alignItems: 'center',
		paddingVertical: 16
	},
	error: {
		color: '#FD7979',
		width: 300,
		marginBottom: 30,
		textAlign: 'center'
	}
})
