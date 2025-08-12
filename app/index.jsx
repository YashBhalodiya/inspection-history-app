import { SafeAreaView } from "react-native-safe-area-context";
import InspectionHistoryScreen from "../src/screens/InspectionHistoryScreen";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F9FB" }}>
      <InspectionHistoryScreen />
    </SafeAreaView>
  );
}
