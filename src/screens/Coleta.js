import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import Satisfacao from '../components/Satisfacao'

export default function Coleta({ route }) {
	const { title } = route.params
	function goToThanks() {
		navegation.navigate('Thanks', route.params)
	}
	function goBack() {
		navegation.navigate('Home')
	}
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>O que você achou do {title}?</Text>

			<TouchableOpacity style={styles.hideButton} onPress={goBack}></TouchableOpacity>

			<View style={styles.row}>
				<Satisfacao style={styles.satisfacao} icon="face-frown" color="#D71616" texto="Péssimo" onPress={goToThanks} />
				<Satisfacao style={styles.satisfacao} icon="face-frown-open" color="#FF360A" texto="Ruim" onPress={goToThanks} />
				<Satisfacao style={styles.satisfacao} icon="face-meh" color="#FFC632" texto="Neutro" onPress={goToThanks} />
				<Satisfacao style={styles.satisfacao} icon="face-grin-wide" color="#37BD6D" texto="Bom" onPress={goToThanks} />
				<Satisfacao style={styles.satisfacao} icon="face-grin-stars" color="#25BC22" texto="Excelente" onPress={goToThanks} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3C2D7E',
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 32,
		color: '#FFFFFF',
		textAlign: 'center',
		marginBottom: 20,
		fontFamily: 'AveriaLibre'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	hideButton: {
		padding: 20,
		position: 'absolute',
		top: 20,
		right: 20
	}
})
