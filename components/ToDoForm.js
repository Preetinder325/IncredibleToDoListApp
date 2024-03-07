import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setTaskText}
        value={taskText}
      />
      <Button
        title="Add Task"
        onPress={() => {
          addTask(taskText);
          setTaskText(''); 
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
      borderBottomWidth: 1,
      borderBottomColor: 'darkblue', 
      marginBottom: 10,
      paddingHorizontal: 10,
      paddingVertical: 5, 
    },
  });
  

export default ToDoForm;
