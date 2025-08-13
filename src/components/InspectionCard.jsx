import React from "react";
import { View, Text, StyleSheet } from "react-native";

const statusStyles = {
  Satisfactory: { bg: "#C8E6C9", color: "#388E3C" },
  Pending: { bg: "#FFE0B2", color: "#F57C00" },
  Failed: { bg: "#FFCDD2", color: "#D32F2F" },
};

const barColors = {
  Satisfactory: "#388E3C",
  Pending: "#F57C00",
  Failed: "#D32F2F",
};

export default function InspectionCard({
  date,
  taskName,
  taskDescription,
  status,
  highlight,
}) {
  const statusStyle = statusStyles[status] || statusStyles["Satisfactory"];
  const barColor = barColors[status] || barColors["Satisfactory"];

  const day = new Date(date).getDate();

  return (
    <View style={styles.rowWrap}>
      <View style={styles.dateCol}>
        <Text style={styles.date}>{day}</Text>
      </View>

      <View style={styles.cardWrapper}>
        <View style={[styles.innerCard, { backgroundColor: statusStyle.bg }]}>
          <View style={[styles.statusBar, { backgroundColor: barColor }]} />
          <View style={{ flex: 1 }}>
            <Text style={styles.taskName}>{taskName}</Text>
            <Text style={styles.description}>{taskDescription}</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={[styles.statusText, { color: statusStyle.color }]}>
              {status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowWrap: {
    flexDirection: "row",
    alignItems: "stretch",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
  },
  dateCol: {
    width: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRightWidth: 1,
    borderColor: "#D9D9D9",
    paddingVertical: 10,
  },
  date: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#222",
  },
  cardWrapper: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
  },
  innerCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  statusBar: {
    width: 4,
    borderRadius: 5,
    marginRight: 12,
    alignSelf: "stretch",
  },
  taskName: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#000",
    marginBottom: 2,
  },
  description: {
    color: "#2E2E30",
    fontSize: 12,
  },
  statusBadge: {
    borderLeftWidth: 1,
    borderColor: "#D9D9D9",
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  statusText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
