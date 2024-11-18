import { StyleSheet, View, Text } from 'react-native'
import CardActions from '../components/CardActions'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Actions({ route }) {
	const { title } = route.params

	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: title || 'Modificar Pesquisa'
		})
	}, [navigation, title])

	function edit() {
		navigation.navigate('Modificar', route.params)
	}
	function coleta() {
		navigation.navigate('Coleta', route.params)
	}
	function report() {
		navigation.navigate('Report', route.params)
	}

	return (
		<View style={styles.container}>
			<View style={styles.cards}>
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
