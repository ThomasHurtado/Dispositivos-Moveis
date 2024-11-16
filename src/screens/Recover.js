import { StyleSheet, Text, View } from 'react-native';
import InputBar from '../components/InputBar';
import SubmitButton from '../components/SubmitButton';
import { useState } from 'react';

export default function Recover() {
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        console.log(email);
    }
    return(
        <View style={styles.container}>
            <InputBar 
                title="E-mail"
                value={email}
                onChangeText={setEmail} 
            />
            <Text style={styles.error}>E-mail parece ser inválido</Text>
            <SubmitButton title="RECUPERAR" onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3C2D7E',
      alignItems: 'center',
    },
    error: {
      color: "#FD7979",
      width: 300,
      marginBottom: 30,
    },
  });