import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { MaterialIcons } from '@expo/vector-icons'
const Satisfacao = ({ color, texto, icon, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Icon name={icon} size={70} color={color} />
			<Text style={styles.text}>{texto}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		margin: 20
	},
	text: {
		fontSize: 16,
		color: '#FFFFFF',
		fontFamily: 'AveriaLibre'
	}
})

export default Satisfacao
