import { StyleSheet, View, Text } from 'react-native'
import CardActions from '../components/CardActions'

export default function Actions({ route }) {
	const { title } = route.params

	function edit() {
		navegation.navigate('Modificar')
	}
	function coleta() {
		navegation.navigate('Coleta')
	}
	function report() {
		navegation.navigate('Report')
	}

	return (
		<View style={styles.container}>
			<View style={styles.cards}>
				<Text>{title || ''}</Text>
				<CardActions icone="description" title="Modificar" onPress={edit} />
				<CardActions icone="devices" title="Coletar dados" onPress={coleta} />
				<CardActions icone="donut-large" title="Relatório" onPress={report} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3C2D7E',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 128,
		flex: 1
	},
	cards: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		height: 170
	}
})
