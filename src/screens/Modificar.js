import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	TouchableOpacity,
	Alert,
} from "react-native";
import InputBar from "../components/InputBar";
import Button from "../components/Button";
import PopUp from "../components/PopUp";
import { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome6";
import {
	deleteResearch,
	getResearch,
	updateResearch,
} from "../controller/researchController";

export default function Modificar({ route }) {
	const { id } = route.params;
	const navigation = useNavigation();

	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [image, setImage] = useState("");
	const [modalVisible, setModalVisible] = useState(false);

	const titleRef = useRef();
	const dateRef = useRef();
	const imageRef = useRef();

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getResearch(id);

				setTitle(data.title);
				setDate(data.date);
				setImage(data.image);
			} catch (error) {
				console.error("Erro ao buscar pesquisas:", error);
			}
		}

		fetchData();
	}, []);

	function dataValidator() {
		const titleValid = titleRef.current.validate();
		const dateValid = dateRef.current.validate();
		const imageValid = imageRef.current.validate();
		if (!titleValid || !dateValid || !imageValid) return;

		return true;
	}

	async function save() {
		try {
			await updateResearch(id, title, date, image);
			Alert.alert(
				"Pesquisa alterada com sucesso",
				"Volte na tela incial para dar inicio as votações",
				[
					{
						text: "OK",
						onPress: () => navigation.navigate("Home"),
						style: "cancel",
					},
				]
			);
		} catch (error) {
			setError(error);
		}
	}

	function handleDelete() {
		setModalVisible(true);
	}

	async function remove() {
		try {
			console.log("deletado");
			await deleteResearch(id);
			navigation.navigate("Home");
		} catch (error) {
			setError(error);
		}
	}

	const closeModal = () => {
		setModalVisible(false);
	};
	return (
		<View style={styles.container}>
			<ScrollView style={styles.container2}>
				<InputBar
					ref={titleRef}
					title="Nome"
					value={title}
					type="text"
					required={true}
					onChangeText={setTitle}
				/>
				<InputBar
					ref={dateRef}
					title="Data"
					value={date}
					type="date"
					required={true}
					onChangeText={setDate}
				/>
				<InputBar
					ref={imageRef}
					title="Imagem"
					value={image}
					type="image"
					required={true}
					onChangeText={setImage}
				/>
				<View style={styles.actionsContainer}>
					<Button
						title="Salvar"
						color="green"
						size="lg"
						validator={dataValidator}
						onPress={save}
					/>
					<TouchableOpacity
						onPress={handleDelete}
						style={styles.trashIcon}
					>
						<Icon name="trash" size={24} color="#FF0000" />
					</TouchableOpacity>
				</View>

				<PopUp
					modalVisible={modalVisible}
					closeModal={closeModal}
					deleteResearch={remove}
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3C2D7E",
		// alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 128,
		height: "80%",
	},
	container2: {
		backgroundColor: "#3C2D7E",
		paddingHorizontal: 32,
		flex: 1,
	},
	actionsContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
	},
	trashIcon: {
		marginLeft: 10,
	},
});
