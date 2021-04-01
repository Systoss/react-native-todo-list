import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './component/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Todo today section */}
      <View style={styles.tasksSection}>
        <Text style={styles.todoTitle}>Todo today</Text>
      <Task text="Coucou 😎"></Task>
      <Task text="Hello 😋"></Task>
      <Task text="Salut 🤠"></Task>
      </View>

      <KeyboardAvoidingView>
        <TextInput style={styles.textInput} placeholder="Add a task"/>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.button}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C82FF",
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  todoTitle:{
    fontWeight: "bold",
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 20
  },
  textInput:{
    backgroundColor: "#FFFFFF",
    borderRadius:60,
    width: 256,
    height: 45,
    textAlign: "center",
    marginLeft: 15

  },
  button:{
    backgroundColor: "#FFFFFF",
    width: 32,
    height: 32,
    borderRadius: 52,
    textAlign: "center",
  }
});

