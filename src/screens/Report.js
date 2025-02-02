import { StyleSheet, Text, ScrollView, Image, View } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LegendaRelatorio from "../components/LegendaRelatorio";
import { getVoting } from "../controller/votingController";

export default function Report({ route }) {
	const { id } = route.params;

	const [excelente, setExcelente] = useState("");
	const [bom, setBom] = useState("");
	const [neutro, setNeutro] = useState("");
	const [ruim, setRuim] = useState("");
	const [pessimo, setPessimo] = useState("");

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getVoting(id);

				setExcelente(data.excelente);
				setBom(data.bom);
				setNeutro(data.neutro);
				setRuim(data.ruim);
				setPessimo(data.pessimo);

				console.log(data);
			} catch (error) {
				console.error("Erro ao buscar pesquisas:", error);
			}
		}

		fetchData();
	}, []);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.row}>
				<Image
					source={require("../assets/image.png")}
					style={styles.image}
				/>

				<View style={styles.legendContainer}>
					<LegendaRelatorio
						color="#25BC22"
						texto={"Excelente - " + excelente}
					/>
					<LegendaRelatorio color="#37BD6D" texto={"Bom - " + bom} />
					<LegendaRelatorio
						color="#FFC632"
						texto={"Neutro - " + neutro}
					/>
					<LegendaRelatorio
						color="#FF360A"
						texto={"Ruim - " + ruim}
					/>
					<LegendaRelatorio
						color="#D71616"
						texto={"Péssimo - " + pessimo}
					/>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3C2D7E",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
		flexWrap: "wrap",
	},
	image: {
		width: 400,
		height: 400,
		marginRight: 20,
	},
	legendContainer: {
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "center",
	},
});
