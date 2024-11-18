import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native'
export default function Thanks() {
	setTimeout(() => {
		navegation.navigate('Coleta')
	}, 3000)

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
		flexGrow: 1
	},
	title: {
		fontSize: 32,
		color: '#FFFFFF',
		textAlign: 'center',
		marginBottom: 20
	}
})
