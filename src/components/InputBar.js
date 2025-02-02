import React, { useImperativeHandle, forwardRef } from "react";
import {
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Image,
	View,
} from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

export default forwardRef(function InputBar(
	{
		title,
		placeholder,
		value,
		type,
		required,
		iconLeft,
		iconRight,
		onChangeText,
	},
	ref
) {
	const [errorMessage, setErrorMessage] = useState("");

	useImperativeHandle(ref, () => ({
		validate: () => {
			return validateAndEmitValue(value);
		},
	}));

	const [fontsLoaded] = useFonts({
		AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
	});
	if (!fontsLoaded) {
		return null;
	}

	const secureTextEntry = type == "password";
	const keyboardType =
		type == "email"
			? "email-address"
			: type == "date"
			? "numeric"
			: "default";
	if (type == "date") iconRight = "calendar-month";

	function validateAndEmitValue(value) {
		if (value) value = String(value);
		onChangeText(value);

		value = value.trim();

		if (required && (value == "" || value == undefined)) {
			setErrorMessage("Esse campo é obrigatório");
			return false;
		} else setErrorMessage("");

		if (value && type == "email") {
			if (
				!value.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
			)
				setErrorMessage("Email inválido");
			else setErrorMessage("");
		}

		if (value && type == "date") {
			value = value.replace(/\D/g, "");
			if (value.length >= 8) {
				const dateSplited = value.split("");
				value =
					dateSplited[0] +
					dateSplited[1] +
					"/" +
					dateSplited[2] +
					dateSplited[3] +
					"/" +
					dateSplited[4] +
					dateSplited[5] +
					dateSplited[6] +
					dateSplited[7];
			}
			onChangeText(value);
		}

		if (value && type == "password") {
			if (value.length < 6)
				setErrorMessage("A senha deve conter no mínimo 6 caracteres");
			else setErrorMessage("");
		}

		return errorMessage ? false : true;
	}

	async function selectFile() {
		let result;
		try {
			result = await ImagePicker.launchCameraAsync({
				mediaType: "photo",
				base64: true,
				maxHeight: 200,
				maxWidth: 200,
			});
		} catch (error) {
			console.log("Erro ao selecionar imagem da galeria: ", error);
			return;
		}
		if (result.didCancel) return;
		onChangeText(result.assets[0].uri);
	}

	return (
		<View style={styles.conteiner}>
			{title && <Text style={styles.title}>{title}</Text>}

			{type == "image" ? (
				<TouchableOpacity
					style={styles.imageConteiner}
					onPress={selectFile}
				>
					<View style={styles.cImageInput}>
						{value ? (
							<Image
								style={styles.image}
								label="Imagem"
								source={{ uri: value }}
							/>
						) : (
							<Text style={styles.txt}>Galeria de imagens</Text>
						)}
					</View>
				</TouchableOpacity>
			) : (
				<View style={styles.input}>
					{iconLeft && (
						<Icon
							style={styles.icons}
							name={iconLeft}
							size={20}
							color="gray"
						/>
					)}
					<TextInput
						style={styles.textinput}
						placeholder={placeholder || ""}
						value={value}
						onChangeText={validateAndEmitValue}
						secureTextEntry={secureTextEntry}
						keyboardType={keyboardType}
						autoCapitalize="none"
					/>
					{iconRight && (
						<Icon
							style={styles.icons}
							name={iconRight}
							size={20}
							color="gray"
						/>
					)}
				</View>
			)}

			{errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
		</View>
	);
});

const styles = StyleSheet.create({
	conteiner: {
		marginBottom: 20,
	},
	title: {
		fontSize: 20,
		color: "#FFFFFF",
		fontFamily: "AveriaLibre",
	},
	input: {
		backgroundColor: "#FFFFFF",
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	icons: {
		paddingHorizontal: 10,
		width: 40,
		textAlign: "center",
	},
	textinput: {
		fontSize: 13,
		flex: 1,
		color: "#3F92C5",
		fontFamily: "AveriaLibre",
	},
	error: {
		color: "#FD7979",
		width: "100%",
		fontFamily: "AveriaLibre",
	},
	imageConteiner: {
		flexDirection: "row",
		backgroundColor: "#FFFFFF",
		justifyContent: "center",
		width: 250,
		height: 250,
	},
	image: {
		width: 250,
		height: 250,
	},
});
