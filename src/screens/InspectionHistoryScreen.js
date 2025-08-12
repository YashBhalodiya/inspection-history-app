import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import InspectionCard from "../components/InspectionCard";
import BottomNav from "../components/BottomNav";
import { inspections } from "../data/mockData";
import { getInspectionsByMonth } from "../utils/dateUtils";

export default function InspectionHistoryScreen({ navigation }) {
  const data = getInspectionsByMonth(inspections, 1, 2025);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.titleBox}>
        <Text style={styles.title}>Inspection History</Text>
      </View>
      <View style={styles.infoCard}>
        <View style={styles.chip}><Text style={styles.chipText}>Fire Pump</Text></View>
        <View style={styles.infoTextBox}>
          <Text style={styles.infoText}>ID : <Text style={styles.infoTextBold}>TECFI00009</Text></Text>
          <Text style={styles.infoText}>Tag : <Text style={styles.infoTextBold}>FIR00009</Text></Text>
        </View>
      </View>
      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Inspections</Text>
        <Text style={styles.month}>in January 2025</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => <InspectionCard {...item} />}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
      <BottomNav
        onHomePress={() => {
          /* navigation logic */
        }}
        onScanPress={() => {
          /* scan logic */
        }}
        onProfilePress={() => {
          /* navigation logic */
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 13,
  },
  title: {
    fontSize: 20,
    fontWeight: 'semibold',
    lineHeight: '50',
    fontFamily: 'Inter',
    color: '#222',
    textAlign: 'center',
  },
  infoCard: {
    width: 380,
    height: 82,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6CA2F1',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 18,
    justifyContent: 'flex-start',
  },
  chip: {
    width: 134,
    height: 43,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 17,
    marginRight: 18,
  },
  chipText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#222',
    textAlign: 'center',
    width: 97,
    height: 23,
    lineHeight: 23,
  },
  infoTextBox: {
    height: 43,
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 2,
  },
  infoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'regular',
    marginBottom: 2,
    width: 156,
    height: 23,
    lineHeight: 23,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#2E2E30',
  },
  month: {
    fontFamily: 'Inter',
    fontWeight: 'medium',
    color: '#2E2E30',
    fontSize: 16,
  },
});