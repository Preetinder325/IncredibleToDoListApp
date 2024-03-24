import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To Do List App</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    header: {
      width: '100%',
      padding: 20,
      alignItems: 'center',
      backgroundColor: 'darkblue',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24, 
      color: 'white',
    },
  });
  
export default Header;
