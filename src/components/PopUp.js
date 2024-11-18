import { View, Text, StyleSheet, Modal } from 'react-native'
import Button from './Button'

export default function PopUp({ modalVisible, closeModal, deleteResearch }) {
	return (
		<View style={styles.centralized}>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					closeModal()
				}}
			>
				<View style={styles.modalBackground}>
					<View style={styles.modal}>
						<Text style={styles.modalText}>Tem certeza de apagar essa pesquisa?</Text>
						<View style={styles.container}>
							<View style={styles.buttonSim}>
								<Button
									title="SIM"
									color="red"
									size="lg"
									onPress={() => {
										deleteResearch()
										closeModal()
									}}
								/>
							</View>
							<View style={styles.buttonCancelar}>
								<Button title="CANCELAR" color="green" size="lg" onPress={closeModal} />
							</View>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	centralized: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalBackground: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	modal: {
		width: 480,
		height: 200,
		backgroundColor: '#2B1F5C',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 25,
		elevation: 5
	},
	container: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		gap: 15
	},
	buttonSim: {
		paddingRight: 20,
		width: 201
	},
	buttonCancelar: {
		width: 201
	},
	modalText: {
		color: 'white',
		fontSize: 26,
		marginBottom: 14,
		textAlign: 'center'
	}
})
