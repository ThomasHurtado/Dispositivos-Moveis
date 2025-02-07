import { auth, db } from "../firebase/firebaseConfig";
import {
	sendPasswordResetEmail,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

//Cadastrar Usuário
export const signUpEmail = async (email, password) => {
	try {
		await createUserWithEmailAndPassword(auth, email, password);
	} catch (error) {
		const errorCode = error.code;
		if (errorCode == "auth/invalid-email") throw "Email inválido";
		else if (errorCode == "auth/email-already-in-use")
			throw "Este email já está cadastrado";
		else if (errorCode == "auth/weak-password")
			throw "Senha deve conter no mínimo 6 caracteres";
		else if (errorCode == "auth/operation-not-allowed")
			throw "Problema interno, entre em contato com um administrador";
		else throw "Problema ao realizar cadastro, tente novamente mais tarde";
	}
};

//Logar usuário
export const signInEmail = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		const errorCode = error.code;
		if (errorCode == "auth/invalid-email") throw "Email inválido";
		else if (
			errorCode == "auth/wrong-password" ||
			errorCode == "user-not-found" ||
			errorCode == "auth/invalid-credential"
		)
			throw "Email e/ou Senha incorretos";
		else if (errorCode == "auth/user-disabled")
			throw "Usuário desabilitado";
		else throw "Problema ao realizar o login, tente novamente mais tarde";
	}
};

//Recuperar senha
export const resetPassword = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
	} catch (error) {
		const errorCode = error.code;
		console.log(errorCode);
		if (errorCode == "auth/invalid-email") throw "Email inválido";
		else throw "Problema ao recuperar senha, tente novamente mais tarde";
	}
};

export const getUserEmail = () => {
	try {
		const user = auth.currentUser;

		if (user) {
			return user.email;
		} else {
			throw new Error("Nenhum usuário está logado.");
		}
	} catch (error) {
		console.error("Erro ao obter o e-mail do usuário:", error);
		throw error;
	}
};
