import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import MonthPickerModal from "../components/MonthPickerModal";
import Header from "../components/Header";
import InspectionCard from "../components/InspectionCard";
import BottomNav from "../components/BottomNav";
import { inspectionData } from "../data/mockData";
import { getInspectionsByMonth } from "../utils/dateUtils";

function InspectionHistoryScreen() {
  const today = new Date();
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [monthPickerVisible, setMonthPickerVisible] = useState(false);
  const [monthPickerDate, setMonthPickerDate] = useState(new Date(selectedYear, selectedMonth - 1));

  const data = getInspectionsByMonth(inspectionData.inspections, selectedMonth, selectedYear);

  // to check if inspection is today
  const isToday = (dateStr) => {
    const d = new Date(dateStr);
    return (
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate()
    );
  };

  return (
    <View style={{ flex: 1 }}>

      <Header />

      <View style={styles.titleBox}>
        <Text style={styles.title}>Inspection History</Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.chip}><Text style={styles.chipText}>{inspectionData.equipment.name}</Text></View>
        <View style={styles.infoTextBox}>
          <Text style={styles.infoText}>ID : <Text style={styles.infoTextBold}>{inspectionData.equipment.id}</Text></Text>
          <Text style={styles.infoText}>Tag : <Text style={styles.infoTextBold}>{inspectionData.equipment.tag}</Text></Text>
        </View>
      </View>

      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Inspections</Text>
        <TouchableOpacity
          style={styles.headerMonthBox}
          onPress={() => setMonthPickerVisible(true)}
          activeOpacity={0.7}
        >
          <Text style={styles.headerMonthText}>
            in {new Date(selectedYear, selectedMonth - 1).toLocaleString('default', { month: 'long', year: 'numeric' })}
          </Text>
        </TouchableOpacity>
      </View>
      <MonthPickerModal
        visible={monthPickerVisible}
        initialDate={monthPickerDate}
        onClose={() => setMonthPickerVisible(false)}
        onSelect={(date) => {
          setMonthPickerVisible(false);
          setSelectedYear(date.getFullYear());
          setSelectedMonth(date.getMonth() + 1);
          setMonthPickerDate(date);
        }}
      />
      
      <FlatList
        data={data}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <InspectionCard
            {...item}
            highlight={isToday(item.date)}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Absolutely position the BottomNav so FlatList scrolls behind it */}
      <View style={styles.bottomNavContainer} pointerEvents="box-none">
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
    fontWeight: 'bold',
    lineHeight: '50',
    fontFamily: 'Inter',
    color: '#222',
    textAlign: 'center',
  },
  infoCard: {
    width: 365,
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
    marginLeft: 23,
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 10,
    paddingHorizontal: 22,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Inter',
    lineHeight: 36,
  },
  headerMonthBox: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  headerMonthText: {
    fontSize: 16,
    color: '#222',
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  sectionRow: {
    padding: 12,
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
  bottomNavContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 20,
    elevation: 20,
  },
});

export default InspectionHistoryScreen;