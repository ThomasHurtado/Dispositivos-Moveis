import { StyleSheet, Text, ScrollView } from 'react-native'
import InputBar from '../components/InputBar'
import Button from '../components/Button'
import { useState, useRef } from 'react'

export default function Recover() {
	const [email, setEmail] = useState('')
	const emailRef = useRef()

	function dataValidator() {
		const emailValid = emailRef.current.validate()
		if (!emailValid) return
	}

	function recover() {}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<InputBar ref={emailRef} title="E-mail" value={email} type="email" required={true} onChangeText={setEmail} />

			<Button title="ENTRAR" color="green" size="lg" validator={dataValidator} onPress={recover} />
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
	error: {
		color: '#FD7979',
		width: 300,
		marginBottom: 30
	}
})
