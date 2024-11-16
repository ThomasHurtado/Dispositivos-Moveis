import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import InputBar from '../components/InputBar';
import SubmitButton from '../components/SubmitButton';
import { useState } from 'react';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Satisfying.you EMOJI</Text>
      <InputBar 
        title="E-mail"
        value={email}
        onChangeText={setEmail} 
      />
      <InputBar 
        title="Senha"
        value={password}
        onChangeText={setPassword} 
        secureTextEntry 
      />
      <Text style={styles.error}>E-mail e/ou senha inválidos.</Text>
      <SubmitButton title ="ENTRAR"/>
      <TouchableOpacity style={styles.createButton}>
        <Text>Criar minha conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotButton}>
        <Text>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C2D7E',
    alignItems: 'center',
  },
  title:{
    fontSize: 32,
    color: '#FFFFFF'
  },
  error: {
    color: "#FD7979",
    width: 300,
    paddingBottom: 30,
  },
  createButton: {
    backgroundColor: '#419ED7',
    width: 300,
    height:25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  forgotButton: {
    backgroundColor: '#B5C7D1',
    width: 300,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
