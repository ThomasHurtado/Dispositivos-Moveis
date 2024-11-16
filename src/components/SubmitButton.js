import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SubmitButton = (props) =>{
    const title = props.title
    const onPress = props.onPress

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#37BD6D',
        width: 300,
        height:35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: "center",
    }
  })

  export default SubmitButton