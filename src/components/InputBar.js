import React, { useImperativeHandle, forwardRef } from 'react'
import { Text, StyleSheet, TouchableOpacity, TextInput, View } from 'react-native'
import { useState } from 'react'

export default forwardRef(function InputBar({ title, value, type, required, onChangeText }, ref) {
	useImperativeHandle(ref, () => ({
		validate: () => {
			return validateAndEmitValue(value)
		}
	}))

	const secureTextEntry = type == 'password'
	const keyboardType = type == 'email' ? 'email-address' : 'default'

	const [errorMessage, setErrorMessage] = useState('')

	function validateAndEmitValue(value) {
		if (value) value = String(value).trim()
		onChangeText(value)

		if (required && (value == '' || value == undefined)) {
			setErrorMessage('Esse campo é obrigatório')
			return false
		} else setErrorMessage('')

		if (value && type == 'email') {
			if (!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) setErrorMessage('Email inválido')
			else setErrorMessage('')
		}

		return errorMessage ? false : true
	}

	return (
		<View style={styles.conteiner}>
			<Text style={styles.title}>{title}</Text>
			<TextInput style={styles.textinput} value={value} onChangeText={validateAndEmitValue} secureTextEntry={secureTextEntry} keyboardType={keyboardType} autoCapitalize="none" />
			{errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
		</View>
	)
})

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
