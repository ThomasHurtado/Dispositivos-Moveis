import { StyleSheet, View, ScrollView, Alert } from "react-native";
import InputBar from "../components/InputBar";
import Button from "../components/Button";
import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { createResearch } from "../controller/researchController";

export default function Login() {
	navigation = useNavigation();

	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [image, setImage] = useState("");
	const [error, setError] = useState("");

	const titleRef = useRef();
	const dateRef = useRef();
	const imageRef = useRef();

	function dataValidator() {
		const titleValid = titleRef.current.validate();
		const deteValid = dateRef.current.validate();
		const imageValid = imageRef.current.validate();
		if (!titleValid || !deteValid || !imageValid) return;

		return true;
	}

	async function create() {
		try {
			await createResearch(title, date, image);
			Alert.alert(
				"Pesquisa criada com sucesso",
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
				<Button
					title="CADASTRAR"
					color="green"
					size="lg"
					validator={dataValidator}
					onPress={create}
					error={error}
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
});
