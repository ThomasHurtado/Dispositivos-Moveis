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
			image: 'data:image/png;base64,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'
		},
		{
			title: 'Ubunto 2022',
			date: '05/06/2022',
			image: 'data:image/png;base64,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'
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
