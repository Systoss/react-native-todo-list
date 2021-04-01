import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Task(props: { text:string }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
      backgroundColor: "#FFFFFF",
      borderColor: "#F6F6F6",
      borderRadius:10,
      height: 53,
      marginBottom: 20,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between"
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    borderRadius: 5,
    width: 24,
    height: 24,
    backgroundColor: "#8C82FF",
    marginLeft: 15
  },
  itemText: {
    maxWidth: "80%",
    marginLeft: 10,
  },
  circular: {
    borderWidth: 2,
    width: 12,
    height: 12,
    borderColor: "#2F69FF",
    borderRadius: 5,
    marginRight: 15,
  },
});