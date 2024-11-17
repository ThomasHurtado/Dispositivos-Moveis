import { StyleSheet, Text, ScrollView, View } from 'react-native'
import Satisfacao from '../components/Satisfacao'

export default function Coleta(props) {
	function goToThanks() {
		navegation.navigate('Thanks')
	}
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>O que você achou do carnaval 2024?</Text>

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
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
		paddingVertical: 10
	},
	title: {
		fontSize: 32,
		color: '#FFFFFF',
		textAlign: 'center',
		marginBottom: 20
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		padding: 60
	}
})
