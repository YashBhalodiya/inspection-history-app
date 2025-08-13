import React, { useState } from 'react';
import { Modal, View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function MonthPickerModal({ visible, initialDate, onClose, onSelect }) {
  const [date, setDate] = useState(initialDate || new Date());

  const handleChange = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      onClose();
      if (selectedDate) onSelect(selectedDate);
    } else {
      setDate(selectedDate || date);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 16 }}>
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleChange}
            style={{ width: 320 }}
          />
          {Platform.OS === 'ios' && (
            <Button title="Select" onPress={() => { onSelect(date); onClose(); }} />
          )}
        </View>
      </View>
    </Modal>
  );
}
