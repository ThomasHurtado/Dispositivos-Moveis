import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
const Satisfacao = ({ color, texto, style, name }) => {
  return (
    <View style={[styles.container, style]}>
      <Icon name={name} size={70} color={color} />
      <Text style={styles.text}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default Satisfacao;
