import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'
import InputBar from '../components/InputBar'
import Button from '../components/Button'
import CardResearch from '../components/CardResearch'
import { useState, useRef } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

function Home(props) {
	const [search, setSearch] = useState('')

	const research = [
		{
			title: 'Secomp 2023',
			date: '10/10/2023',
			image: ''
		},
		{
			title: 'Ubunto 2022',
			date: '05/06/2022',
			image: ''
		},
		{
			title: 'Meninas CPU',
			date: '01/04/2022',
			image: ''
		},
		{
			title: 'Unect Júnior',
			date: '18/11/2024',
			image: ''
		}
	]

	let filteredReseach = research

	function filter(value) {
		if (value) value = String(value).trim()

		if (value == '' || value == undefined) filteredReseach = research
		else filteredReseach = research.filter((el) => el.title.includes(value))

		setSearch(value)
	}

	function goToReseach() {
		props.navigation.navigate('Actions')
	}
	function newResearch() {
		props.navigation.navigate('CreateResearch')
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<InputBar placeholder="Insira o termo de busca" value={search} iconLeft="search" onChangeText={filter} />

			<ScrollView horizontal style={styles.cards}>
				{filteredReseach.map(({ title, image, date }) => (
					<CardResearch key={title} title={title} image={image} date={date} onPress={goToReseach} />
				))}
			</ScrollView>

			<Button title="NOVA PESQUISA" color="green" size="lg" onPress={newResearch} />
		</ScrollView>
	)
}

function CustomDrawerContent(props) {
	function exit() {
		props.navigation.popToTop()
	}

	return (
		<DrawerContentScrollView contentContainerStyle={styles.drawerConteiner} {...props}>
			<View>
				<Text style={styles.drawerEmail}>admin@admin.com</Text>
				<View style={styles.drawerDivisor} />
				<DrawerItemList {...props} />
			</View>
			<DrawerItem labelStyle={styles.drawerItemText} icon={() => <Icon name="logout" size={32} color="#FFFFFF" />} label="Sair" onPress={exit} />
		</DrawerContentScrollView>
	)
}

const Drawer = createDrawerNavigator()

export default function HomeWithDrawer() {
	return (
		<Drawer.Navigator screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#2B1D62' } }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
			<Drawer.Screen name="Home" component={Home} options={{ headerTitle: '', drawerIcon: () => <Icon name="description" size={32} color="#FFFFFF" />, drawerLabel: 'Pesquisas' }} />
		</Drawer.Navigator>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3C2D7E',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 32,
		flexGrow: 1
	},
	cards: {
		flexDirection: 'row',
		marginVertical: 18
	},
 
	drawerConteiner: {
		backgroundColor: '#2B1F5C',
		paddingVertical: 16,
		paddingHorizontal: 32,
		flexDirection: 'column',
		justifyContent: 'space-between',
		flexGrow: 1
	},
	drawerEmail: {
		color: 'white',
		fontSize: 20
	},
	drawerDivisor: {
		width: '100%',
		backgroundColor: '#ECF8FF',
		height: 1,
		marginVertical: 10
	},
	drawerItemText: {
		color: 'white'
	}
})
