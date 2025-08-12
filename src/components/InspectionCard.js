import React from "react";
import { View, Text, StyleSheet } from "react-native";

const statusStyles = {
  Satisfactory: { bg: "#E6F9ED", color: "#1DBF73" },
  Pending: { bg: "#FFF6E0", color: "#FFB200" },
  Unsatisfactory: { bg: "#FFE6E6", color: "#FF4D4F" },
};

const barColors = {
  Satisfactory: "#1DBF73",
  Pending: "#FFB200",
  Unsatisfactory: "#FF4D4F",
};

export default function InspectionCard({
  date,
  taskName,
  description,
  status,
}) {
  const statusStyle = statusStyles[status] || statusStyles["Satisfactory"];
  const barColor = barColors[status] || barColors["Satisfactory"];

  return (
    <View style={styles.row}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.card}>
        <View style={[styles.bar, { backgroundColor: barColor }]} />
        <View style={styles.info}>
          <Text style={styles.taskName}>{taskName}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View
          style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}
        >
          <Text
            style={[styles.statusText, { color: statusStyle.color }]}
          >{status}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  date: {
    width: 28,
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
    textAlign: "center",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginLeft: 8,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  bar: { width: 4, height: 40, borderRadius: 2, marginRight: 10 },
  info: { flex: 1 },
  taskName: { fontWeight: "bold", fontSize: 14, marginBottom: 2 },
  description: { color: "#888", fontSize: 12 },
  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginLeft: 8,
    minWidth: 80,
    alignItems: "center",
  },
  statusText: { fontWeight: "bold", fontSize: 13 },
});
