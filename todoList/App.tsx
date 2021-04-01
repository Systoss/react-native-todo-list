import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  }
});

