import { StyleSheet, Text, ScrollView, Image, View } from 'react-native'
import { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import LegendaRelatorio from '../components/LegendaRelatorio'

export default function Report() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.row}>
				<Image source={require('../assets/image.png')} style={styles.image} />

				<View style={styles.legendContainer}>
					<LegendaRelatorio color="#25BC22" texto="Excelente" />
					<LegendaRelatorio color="#37BD6D" texto="Bom" />
					<LegendaRelatorio color="#FFC632" texto="Neutro" />
					<LegendaRelatorio color="#FF360A" texto="Ruim" />
					<LegendaRelatorio color="#D71616" texto="Péssimo" />
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3C2D7E',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
		flexWrap: 'wrap'
	},
	image: {
		width: 400,
		height: 400,
		marginRight: 20
	},
	legendContainer: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center'
	}
})
