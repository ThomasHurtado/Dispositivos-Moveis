import { StyleSheet, Text, ScrollView } from 'react-native'
import InputBar from '../components/InputBar'
import Button from '../components/Button'
import { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Register() {
	navegation = useNavigation()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [cpassword, setCpassword] = useState('')

	const emailRef = useRef()
	const passwordRef = useRef()
	const cpasswordRef = useRef()

	const dataValidator = () => {
		const emailValid = emailRef.current.validate()
		const passwordValid = passwordRef.current.validate()
		const cpasswordValid = cpasswordRef.current.validate()
		if (!emailValid || !passwordValid || !cpasswordValid) return

		if (password == cpassword) return true
		return 'O campo repetir senha difere da senha'
	}

	function register() {
		navegation.navigate('Home')
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<InputBar ref={emailRef} title="E-mail" value={email} type="email" required={true} onChangeText={setEmail} />
			<InputBar ref={passwordRef} title="Senha" value={password} type="password" required={true} onChangeText={setPassword} />
			<InputBar ref={cpasswordRef} title="Repetir senha" value={cpassword} type="password" required={true} onChangeText={setCpassword} />
			<Button title="CADASTRAR" color="green" size="lg" validator={dataValidator} onPress={register} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3C2D7E',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 128,
		flexGrow: 1
	}
})
