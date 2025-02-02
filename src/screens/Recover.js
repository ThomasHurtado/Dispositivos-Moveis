import { StyleSheet, Text, ScrollView, Alert } from "react-native";
import InputBar from "../components/InputBar";
import Button from "../components/Button";
import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { resetPassword } from "../controller/authController";

export default function Recover() {
	navigation = useNavigation();

	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const emailRef = useRef();

	function dataValidator() {
		const emailValid = emailRef.current.validate();
		return emailValid;
	}

	async function recover() {
		try {
			await resetPassword(email);
			Alert.alert(
				"Verifique seu email",
				"Enviamos um email com as informações para a recuperação de senha",
				[
					{
						text: "OK",
						onPress: () => navigation.navigate("Login"),
						style: "cancel",
					},
				]
			);
		} catch (error) {
			setError(error);
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<InputBar
				ref={emailRef}
				title="E-mail"
				value={email}
				type="email"
				required={true}
				onChangeText={setEmail}
			/>

			<Button
				title="ENTRAR"
				color="green"
				size="lg"
				validator={dataValidator}
				onPress={recover}
				error={error}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3C2D7E",
		alignItems: "center",
		paddingVertical: 16,
		paddingHorizontal: 128,
		flexGrow: 1,
	},
});
