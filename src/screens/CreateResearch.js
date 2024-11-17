import { StyleSheet, Text, ScrollView } from 'react-native'
import InputBar from '../components/InputBar'
import Button from '../components/Button'
import { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
	navegation = useNavigation()

	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')
	const [image, setImage] = useState('')

	const titleRef = useRef()
	const dateRef = useRef()
	const imageRef = useRef()

	function dataValidator() {
		const titleValid = titleRef.current.validate()
		const deteValid = dateRef.current.validate()
		const imageValid = imageRef.current.validate()
		if (!titleValid || !deteValid || !imageValid) return
	}

	function login() {
		navegation.navigate('Home')
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<InputBar ref={titleRef} title="E-mail" value={title} type="email" required={true} onChangeText={setTitle} />
			<InputBar ref={dateRef} title="Senha" value={date} type="password" required={true} onChangeText={setDate} />
			<InputBar ref={imageRef} title="Repetir senha" value={image} type="image" required={true} onChangeText={setImage} />
			<Button title="CADASTRAR" color="green" size="lg" validator={dataValidator} onPress={login} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3C2D7E',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 128,
		flexGrow: 1
	}
})
