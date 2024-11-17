import { Text, StyleSheet, TouchableOpacity, TextInput, View } from 'react-native'
import { useState } from 'react'

export default function InputBar({ title, value, onChangeText, type }) {
	const secureTextEntry = type == 'password'
	const keyboardType = type == 'email' ? 'email-address' : 'default'

	const [errorMessage, setErrorMessage] = useState('')

	function validateAndEmitValue(value) {
		value = String(value).trim()

		if (type == 'email') {
			value = value.toLowerCase()
			if (!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) setErrorMessage('Email inválido')
			else setErrorMessage('')
		}
		onChangeText(value)
	}

	return (
		<View style={styles.conteiner}>
			<Text style={styles.title}>{title}</Text>
			<TextInput style={styles.textinput} value={value} onChangeText={validateAndEmitValue} secureTextEntry={secureTextEntry} keyboardType={keyboardType} />
			{errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
		</View>
	)
}

const styles = StyleSheet.create({
	conteiner: {
		marginBottom: 20
	},
	title: {
		fontSize: 20,
		color: '#FFFFFF'
	},
	textinput: {
		backgroundColor: '#FFFFFF',
		width: 300,
		fontSize: 13,
		color: '#3F92C5'
	},
	error: {
		color: '#FD7979',
		width: 300
	}
})
