import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import InputBar from "../components/InputBar";
import Button from "../components/Button";
import CardResearch from "../components/CardResearch";
import { useState, useEffect } from "react";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getResearches } from "../controller/researchController";
import { getUserEmail } from "../controller/authController";

function Home(props) {
	const [search, setSearch] = useState("");
	const [research, setResearch] = useState("");
	const [filteredReseach, setFilteredReseach] = useState("");

	useEffect(() => {
		async function fetchData() {
			try {
				console.log("aaa");
				const data = await getResearches();
				setResearch(data);
				setFilteredReseach(data);
			} catch (error) {
				console.error("Erro ao buscar pesquisas:", error);
			}
		}

		fetchData();
	}, []);

	function filter(value) {
		if (value) value = String(value).trim();

		if (value == "" || value == undefined) setFilteredReseach(research);
		else
			setFilteredReseach(
				research.filter((el) => el.title.includes(value))
			);

		setSearch(value);
	}

	function goToReseach(id, title) {
		props.navigation.navigate("Actions", { id, title });
	}
	function newResearch() {
		props.navigation.navigate("CreateResearch");
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<InputBar
				placeholder="Insira o termo de busca"
				value={search}
				iconLeft="search"
				onChangeText={filter}
			/>

			<ScrollView horizontal style={styles.cards}>
				{filteredReseach && filteredReseach.map
					? filteredReseach.map(({ id, title, image, date }) => (
							<CardResearch
								key={title}
								title={title}
								image={image}
								date={date}
								onPress={() => goToReseach(id, title)}
							/>
					  ))
					: ""}
			</ScrollView>

			<Button
				title="NOVA PESQUISA"
				color="green"
				size="lg"
				onPress={newResearch}
			/>
		</ScrollView>
	);
}

function CustomDrawerContent(props) {
	const [email, setEmail] = useState("");

	useEffect(() => {
		function fetchData() {
			try {
				const email = getUserEmail();

				setEmail(email);
			} catch (error) {
				setEmail("");
			}
		}

		fetchData();
	}, []);

	function exit() {
		props.navigation.popToTop();
	}

	return (
		<DrawerContentScrollView
			contentContainerStyle={styles.drawerConteiner}
			{...props}
		>
			<View>
				<Text style={styles.drawerEmail}>{email}</Text>
				<View style={styles.drawerDivisor} />
				<DrawerItemList {...props} />
			</View>
			<DrawerItem
				labelStyle={styles.drawerItemText}
				icon={() => <Icon name="logout" size={32} color="#FFFFFF" />}
				label="Sair"
				onPress={exit}
			/>
		</DrawerContentScrollView>
	);
}

const Drawer = createDrawerNavigator();

export default function HomeWithDrawer() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerTintColor: "white",
				headerStyle: { backgroundColor: "#2B1D62" },
			}}
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen
				name="Home"
				component={Home}
				options={{
					headerTitle: "",
					drawerIcon: () => (
						<Icon name="description" size={32} color="#FFFFFF" />
					),
					drawerLabel: "Pesquisas",
				}}
			/>
		</Drawer.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3C2D7E",
		alignItems: "center",
		paddingVertical: 16,
		paddingHorizontal: 32,
		flexGrow: 1,
	},
	cards: {
		flexDirection: "row",
		marginVertical: 18,
	},

	drawerConteiner: {
		backgroundColor: "#2B1F5C",
		paddingVertical: 16,
		paddingHorizontal: 32,
		flexDirection: "column",
		justifyContent: "space-between",
		flexGrow: 1,
	},
	drawerEmail: {
		color: "white",
		fontSize: 20,
		fontFamily: "AveriaLibre",
	},
	drawerDivisor: {
		width: "100%",
		backgroundColor: "#ECF8FF",
		height: 1,
		marginVertical: 10,
	},
	drawerItemText: {
		color: "white",
		fontFamily: "AveriaLibre",
	},
});
