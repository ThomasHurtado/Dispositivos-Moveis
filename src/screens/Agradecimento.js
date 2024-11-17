import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native'
import InputBar from '../components/InputBar'
import Button from '../components/Button'
import { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon  } from 'react-native-vector-icons/MaterialIcons'
export default function Agradecimento() {
	//navegation = useNavigation()

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}> Obrigados Participar da pesquisa!</Text>
            <Text style={styles.title}> Aguardamos voce no proximo ano</Text>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3C2D7E',
		alignItems: 'center', 
		justifyContent: 'center',
		flex: 1, 
	},
	title: {
		fontSize: 32,
		color: '#FFFFFF',
		textAlign: 'center',
		marginBottom: 20,
	}
})
