import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Created by - Preetinder Singh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    footer: {
      width: '100%',
      padding: 10,
      alignItems: 'center',
      backgroundColor: 'darkblue', 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    text: {
      fontSize: 14,
      color: 'white', 
    },
  });
  
export default Footer;
