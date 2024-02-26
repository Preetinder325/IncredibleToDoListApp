/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar // I have added StatusBar for clear view.
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
    return (
       <>
      <StatusBar barStyle="dark-content" backgroundColor="white" /> 
        <SafeAreaView>
            <ToDoList />
            <ToDoForm />
        </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
});

export default App;
