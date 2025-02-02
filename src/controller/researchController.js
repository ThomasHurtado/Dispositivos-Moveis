import { db } from "../firebase/firebaseConfig";
import {
	doc,
	collection,
	addDoc,
	updateDoc,
	getDocs,
	getDoc,
	deleteDoc,
} from "firebase/firestore";
import { createVoting } from "./votingController";

export const getResearches = async () => {
	try {
		const pesquisaSnapshot = await getDocs(collection(db, "pesquisa"));
		const pesquisaData = pesquisaSnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		return pesquisaData;
	} catch (error) {
		throw error;
	}
};

export const getResearch = async (id) => {
	try {
		const pesquisaRef = doc(db, "pesquisa", id);
		const pesquisaSnap = await getDoc(pesquisaRef);

		if (pesquisaSnap.exists()) {
			return { id: pesquisaSnap.id, ...pesquisaSnap.data() };
		} else {
			throw new Error("Pesquisa não encontrada");
		}
	} catch (error) {
		throw error;
	}
};

export const createResearch = async (title, date, image) => {
	try {
		const pesquisaRef = await addDoc(collection(db, "pesquisa"), {
			title,
			date,
			image,
		});

		const pesquisaId = pesquisaRef.id;
		await createVoting(pesquisaId);

		console.log(
			`Pesquisa criada com ID: ${pesquisaId}, e votação associada.`
		);
	} catch (error) {
		throw error;
	}
};

export const updateResearch = async (id, title, date, image) => {
	try {
		const pesquisaRef = doc(db, "pesquisa", id);

		await updateDoc(pesquisaRef, {
			title,
			date,
			image,
		});

		return { id, title, date, image };
	} catch (error) {
		console.error("Erro ao atualizar pesquisa:", error);
		throw error;
	}
};

export const deleteResearch = async (id) => {
	try {
		const pesquisaRef = doc(db, "pesquisa", id);
		await deleteDoc(pesquisaRef);
		await deleteVoting(id);

		console.log(`Pesquisa com ID ${id} deletada com sucesso.`);
	} catch (error) {
		console.error("Erro ao deletar pesquisa:", error);
		throw error;
	}
};
