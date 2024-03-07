import React from 'react';
import { ScrollView,View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    task: {
      margin: 10,
      padding: 10,
      borderColor: 'darkblue', 
      borderWidth: 1,
      borderRadius: 10, 
    },
  });
  
export default ToDoList;
