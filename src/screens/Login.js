import { StyleSheet, Text, ScrollView, View } from "react-native";
import InputBar from "../components/InputBar";
import Button from "../components/Button";
import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { signInEmail } from "../controller/authController";

export default function Login() {
	const navigation = useNavigation();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const emailRef = useRef();
	const passwordRef = useRef();

	function dataValidator() {
		setError("");
		const emailValid = emailRef.current.validate();
		const passwordValid = passwordRef.current.validate();
		if (!emailValid || !passwordValid) return;

		return true;
	}

	async function login() {
		try {
			await signInEmail(email, password);
			setEmail("");
			setPassword("");
			navigation.navigate("Home");
		} catch (error) {
			setError(error);
		}
	}
	function register() {
		navigation.navigate("Register");
	}
	function forgotPassword() {
		navigation.navigate("Recover");
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}> Satisfying.you</Text>
				<Icon name="face-grin-wide" size={50} color="#FFFFFF" />
			</View>

			<InputBar
				ref={emailRef}
				title="E-mail"
				value={email}
				type="email"
				required={true}
				onChangeText={setEmail}
			/>
			<InputBar
				ref={passwordRef}
				title="Senha"
				value={password}
				type="password"
				required={true}
				onChangeText={setPassword}
			/>

			<Button
				title="ENTRAR"
				color="green"
				size="lg"
				validator={dataValidator}
				onPress={login}
				error={error}
			/>

			<Button
				title="Criar minha conta"
				color="blue"
				size="sm"
				onPress={register}
			/>
			<Button
				title="Esqueci minha senha"
				size="sm"
				onPress={forgotPassword}
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
	titleContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 10,
	},
	title: {
		fontSize: 32,
		color: "#FFFFFF",
		marginBottom: 20,
		fontFamily: "AveriaLibre",
	},
});
