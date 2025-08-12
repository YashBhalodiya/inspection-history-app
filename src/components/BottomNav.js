import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomNav({ onScanPress, onHomePress, onProfilePress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onHomePress} style={styles.iconButton}>
        <Ionicons name="home-outline" size={28} color="#222" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onScanPress} style={styles.scanButton}>
        <Ionicons name="scan-outline" size={32} color="#2196F3" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onProfilePress} style={styles.iconButton}>
        <Ionicons name="person-outline" size={28} color="#222" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
    elevation: 10,
  },
  iconButton: {
    flex: 1,
    alignItems: "center",
  },
  scanButton: {
    position: "absolute",
    alignSelf: "center",
    top: -30,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#2196F3",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 4,
    borderColor: "#fff",
  },
});