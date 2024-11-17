import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function Button({ title, color, size, validator, onPress }) {
	const styles = StyleSheet.create({
		conteiner: {
			width: '100%'
		},
		button: {
			backgroundColor: color == 'green' ? '#37BD6D' : color == 'blue' ? '#419ED7' : '#B5C7D1',
			width: '100%',
			height: size == 'sm' ? 25 : 35,
			alignItems: 'center',
			justifyContent: 'center',
			marginVertical: 5
		},
		title: {
			fontSize: size == 'sm' ? 16 : 20,
			color: '#FFFFFF',
			textAlign: 'center'
		},
		error: {
			color: '#FD7979',
			width: 300
		}
	})

	const [errorMessage, setErrorMessage] = useState('')

	function validateAndEmitEvent() {
		const validatorResult = validator ? validator() : true
		if (validatorResult === true) {
			setErrorMessage('')
			onPress()
		} else setErrorMessage(validatorResult)
	}

	return (
		<View style={styles.conteiner}>
			{errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
			<TouchableOpacity style={styles.button} onPress={validateAndEmitEvent}>
				<Text style={styles.title}>{title}</Text>
			</TouchableOpacity>
		</View>
	)
}
