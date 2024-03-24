import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Alert } from 'react-native'; 

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (!taskText.trim()) {
      Alert.alert("Please enter a task before adding."); 
    } else {
      addTask(taskText);
      setTaskText('');
    }
  };

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
        onPress={handleAddTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'darkblue', 
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default ToDoForm;
