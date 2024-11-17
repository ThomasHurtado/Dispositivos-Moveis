import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LegendaRelatorio = ({ color, texto }) => {
  return (
    <View style={styles.container}>
   
      <View style={[styles.rect, { backgroundColor: color }]} />

      <Text style={styles.text}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10, 
  },
  rect: {
    width: 40, 
    height: 20, 
    marginRight: 10, 
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default LegendaRelatorio;
