import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ onBack, onBell }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack} style={styles.iconBox} activeOpacity={0.7}>
        <Ionicons name="arrow-back-outline" size={25} color="#222" />
      </TouchableOpacity>
      <Ionicons name="logo-react" size={30} color="#222" />
      <TouchableOpacity onPress={onBell} style={styles.iconBox} activeOpacity={0.7}>
        <Ionicons name="notifications-outline" size={26} color="#222" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 13,
    paddingBottom: 10,
    paddingHorizontal: 18,
  },
  iconBox: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 44,
    height: 44,
    marginTop: 2,
  },
});