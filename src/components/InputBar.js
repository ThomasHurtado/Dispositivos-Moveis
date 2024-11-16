import { Text, StyleSheet, TouchableOpacity, TextInput, View} from "react-native"

const InputBar = ({ title, value, onChangeText, secureTextEntry }) =>{

    
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>
            <TextInput 
                style={style.textinput}
                value={value} 
                onChangeText={onChangeText} 
                secureTextEntry={secureTextEntry}
      />
        </View>
    )
}

const style = StyleSheet.create({
    textinput: {
        backgroundColor: '#FFFFFF',
        width: 300,
        height:35,
        fontSize:13,
        color: "#3F92C5", 
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF',
        
    },
    container: {
        paddingTop: 20
    }

})

export default InputBar