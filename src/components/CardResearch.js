import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

export default function CardResearch({ image, title, date, onPress }) {
	return (
		<View style={styles.conteiner}>
			<TouchableOpacity style={styles.card} onPress={onPress}>
				<Image style={styles.image} source={{ uri: image }} />
				<View style={styles.texts}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.date}>{date}</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	conteiner: {
		height: 170,
		width: 190,
		marginRight: 25
	},
	card: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',

		backgroundColor: '#FFFFFF',
		borderRadius: 10,

		padding: 10
	},
	texts: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	image: {
		height: '60%',
		width: '60%',
		margin: 5
	},
	title: {
		color: '#3F92C5',
		fontFamily: 'AveriaLibre',
		fontSize: 24
	},
	date: {
		color: '#8B8B8B',
		fontFamily: 'AveriaLibre',
		fontSize: 14
	}
})
