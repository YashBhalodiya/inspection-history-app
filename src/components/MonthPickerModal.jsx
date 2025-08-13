import React, { useState } from 'react';
import { Modal, View, Button, Text, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function getYearRange(startYear = 2025) {
  const years = [];
  for (let i = startYear; i >= 2000; i--) {
    years.push(i);
  }
  return years;
}

export default function MonthPickerModal({ visible, initialDate, onClose, onSelect }) {
  const now = new Date();
  const initialMonth = initialDate ? initialDate.getMonth() : now.getMonth();
  const initialYear = initialDate ? initialDate.getFullYear() : now.getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);
  const [selectedYear, setSelectedYear] = useState(initialYear);

  const years = getYearRange(2025);

  const handleSelect = () => {
    const date = new Date(selectedYear, selectedMonth, 1);
    onSelect(date);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Select Month</Text>
          <View style={styles.pickerRow}>
            <View style={styles.pickerCol}>
              <Text style={styles.label}>Month</Text>
              <ScrollView style={styles.pickerList} contentContainerStyle={styles.pickerListContent} showsVerticalScrollIndicator={false}>
                {MONTHS.map((month, idx) => (
                  <TouchableOpacity
                    key={month}
                    style={[styles.pickerItem, selectedMonth === idx && styles.selectedItem]}
                    onPress={() => setSelectedMonth(idx)}
                  >
                    <Text style={[styles.pickerText, selectedMonth === idx && styles.selectedText]}>{month}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={styles.pickerCol}>
              <Text style={styles.label}>Year</Text>
              <ScrollView style={styles.pickerList} contentContainerStyle={styles.pickerListContent} showsVerticalScrollIndicator={false}>
                {years.map((year) => (
                  <TouchableOpacity
                    key={year}
                    style={[styles.pickerItem, selectedYear === year && styles.selectedItem]}
                    onPress={() => setSelectedYear(year)}
                  >
                    <Text style={[styles.pickerText, selectedYear === year && styles.selectedText]}>{year}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <Button title="Cancel" onPress={onClose} />
            <View style={{ width: 12 }} />
            <Button title="Select" onPress={handleSelect} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 18,
    minWidth: 320,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 18,
  },
  pickerCol: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  pickerList: {
    height: 180,
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#fafafa',
  },
  pickerListContent: {
    paddingVertical: 2,
  },
  pickerItem: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginVertical: 2,
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: '#e0e0e0',
  },
  pickerText: {
    fontSize: 15,
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#1976d2',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
});
