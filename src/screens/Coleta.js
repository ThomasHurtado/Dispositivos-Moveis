import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Satisfacao from '../components/Satisfacao';

export default function Coleta() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>O que você achou do carnaval 2024?</Text>

      
      <View style={styles.row}>
        <Satisfacao style={styles.satisfacao} name="sentiment_sad" color="#D71616" texto="Péssimo" />
        <Satisfacao style={styles.satisfacao} name="sentiment_dissatisfied" color="#FF360A" texto="Ruim" />
        <Satisfacao style={styles.satisfacao} name="sentiment_natural" color="#FFC632" texto="Neutro" />
        <Satisfacao style={styles.satisfacao} name="sentiment_satisfied" color="#37BD6D" texto="Bom" />
        <Satisfacao style={styles.satisfacao} name="sentiment_very_satisfied" color="#25BC22" texto="Excelente" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3C2D7E',
    alignItems: 'center', 
    justifyContent: 'center', 
    flexGrow: 1,
    paddingVertical: 10, 
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexWrap: 'wrap',
    padding: 60
  },
  satisfacao: {
    margin: 20, 
  },
});
