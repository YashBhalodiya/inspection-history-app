import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomNav() {
  return (
    <View style={styles.wrapper}>
      
      <View style={styles.container}>
        <TouchableOpacity style={styles.sideButton}>
          <Ionicons name="home-outline" size={30} color="#111" />
          <Text style={styles.label}>Home</Text>
        </TouchableOpacity>

        <View style={styles.centerSpace} />

        <TouchableOpacity style={styles.sideButton}>
          <Ionicons name="person-circle-outline" size={32} color="#111" />
          <Text style={styles.label}>Profile</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.scanButtonWrap} pointerEvents="box-none">
        <TouchableOpacity style={styles.scanButton} activeOpacity={0.8}>
          <Ionicons name="scan-outline" size={56} color="#fff" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: 'transparent',
    height: 110,
    justifyContent: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: -4 },
    shadowRadius: 12,
    elevation: 16,
  },
  sideButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    zIndex: 1,
  },
  centerSpace: {
    width: 120,
  },
  label: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
    marginTop: 2,
  },
  scanButtonWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -1,
    alignItems: 'center',
    zIndex: 10,
    elevation: 20,
  },
  scanButton: {
    width: 110,
    height: 110,
    borderRadius: 60,
    backgroundColor: '#6CA2F1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6CA2F1',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 24,
    elevation: 24,
  },
});