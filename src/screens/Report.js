import { StyleSheet, Text, ScrollView, Image, View } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LegendaRelatorio from "../components/LegendaRelatorio";
import { getVoting } from "../controller/votingController";
import PieChart from "react-native-pie-chart";
export default function Report({ route }) {
	const { id } = route.params;

	const [excelente, setExcelente] = useState(1);
	const [bom, setBom] = useState(1);
	const [neutro, setNeutro] = useState(1);
	const [ruim, setRuim] = useState(1);
	const [pessimo, setPessimo] = useState(1);
	const sliceColor = ["#25BC22", "#37BD6D", "#FFC632", "#FF360A", "#D71616"];
	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getVoting(id);

				setExcelente(Number(data.excelente) || 0);
				setBom(Number(data.bom) || 0);
				setNeutro(Number(data.neutro) || 0);
				setRuim(Number(data.ruim) || 0);
				setPessimo(Number(data.pessimo) || 0);
			} catch (error) {
				console.error("Erro ao buscar pesquisas:", error);
			}
		}

		fetchData();
	}, []);
	const series = [
		{ value: excelente, color: "#25BC22" },
		{ value: bom, color: "#37BD6D" },
		{ value: neutro, color: "#FFC632" },
		{ value: ruim, color: "#FF360A" },
		{ value: pessimo, color: "#D71616" },
	];
	const soma = excelente + bom + neutro + ruim + pessimo;
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.row}>
				<View>
					{soma > 0 ? (
						<PieChart
							widthAndHeight={200}
							series={series}
							sliceColor={sliceColor}
						/>
					) : (
						""
					)}
				</View>

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
	},
	row: {
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 20,
		marginTop: 40,
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
