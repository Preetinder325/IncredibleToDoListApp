import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
      <Text style={styles.text}>To Do List App</Text>
      <Text style={styles.text}>Preetinder Singh</Text>
      <Text style={styles.text}>Date: {currentDate}</Text>
      <Button
        title="Home"
        color="darkblue"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
    </MainLayout>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AboutScreen;
