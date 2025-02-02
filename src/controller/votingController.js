import { db } from "../firebase/firebaseConfig";
import {
	doc,
	collection,
	setDoc,
	updateDoc,
	increment,
	getDoc,
	deleteDoc,
} from "firebase/firestore";

export const getVoting = async (id) => {
	try {
		const votacaoRef = doc(db, "votacao", id);
		const votacaoSnap = await getDoc(votacaoRef);

		if (votacaoSnap.exists()) {
			return { id: votacaoSnap.id, ...votacaoSnap.data() };
		} else {
			throw new Error("Votação não encontrada");
		}
	} catch (error) {
		throw error;
	}
};

export const createVoting = async (id) => {
	try {
		const votacaoRef = doc(db, "votacao", id);
		await setDoc(votacaoRef, {
			pessimo: 0,
			ruim: 0,
			neutro: 0,
			bom: 0,
			excelente: 0,
		});
		console.log(`Votação com ID ${id} criada com sucesso.`);
	} catch (error) {
		console.error("Erro ao criar votação:", error);
		throw error;
	}
};

export const addVote = async (id, vote) => {
	try {
		const votacaoRef = doc(db, "votacao", id);

		// Atualiza o campo específico aumentando o valor em 1
		await updateDoc(votacaoRef, {
			[vote]: increment(1),
		});

		console.log(`Voto registrado: ${vote} para a votação ${id}`);
	} catch (error) {
		console.error("Erro ao atualizar votos:", error);
		throw error;
	}
};

export const deleteVoting = async (id) => {
	try {
		const votacaoRef = doc(db, "votacao", id);
		await deleteDoc(votacaoRef);
		console.log(`Votação com ID ${id} deletada com sucesso.`);
	} catch (error) {
		console.error("Erro ao deletar votos:", error);
		throw error;
	}
};
