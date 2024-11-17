import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';
import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Certifique-se de importar corretamente
import LegendaRelatorio from '../components/LegendaRelatorio'; // Importação correta do componente

export default function Agradecimento() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        
        <Image
          source={require('../assets/grafico.png')}
          style={styles.image}
        />

        
        <View style={styles.legendContainer}>
          <LegendaRelatorio color="#FF5733" texto="Vermelho" />
          <LegendaRelatorio color="#33FF57" texto="Verde" />
          <LegendaRelatorio color="#3357FF" texto="Azul" />
          <LegendaRelatorio color="#FF33A1" texto="Rosa" />
          <LegendaRelatorio color="#FFFF33" texto="Amarelo" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3C2D7E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 20,
    flexWrap: 'wrap', 
  },
  image: {
    width: 400, 
    height: 400, 
    marginRight: 20, 
  },
  legendContainer: {
    flexDirection: 'column', 
    alignItems: 'flex-start',
    justifyContent: 'center', 
  },
});
