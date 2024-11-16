import { StyleSheet, Text, View } from 'react-native';
import InputBar from '../components/InputBar';
import SubmitButton from '../components/SubmitButton';
import { useState } from 'react';

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (password !== cpassword) {
      setError('O campo repetir senha difere da senha');
    }
  };

  return (
    <View style={styles.container}>
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
      <InputBar 
        title="Repetir senha"
        value={cpassword}
        onChangeText={setCpassword} 
        secureTextEntry 
      />
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <SubmitButton title="CADASTRAR" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C2D7E',
    alignItems: 'center',
    fontFamily: 'AverialLibre',
  },
  error: {
    color: "#FD7979",
    width: 300,
    marginBottom: 30,
    textAlign: 'center',
  },
});
