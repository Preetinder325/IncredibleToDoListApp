import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header'; 
import Footer from './Footer'; 

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F2F5', 
  },
});


export default MainLayout;
