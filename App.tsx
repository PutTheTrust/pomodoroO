import { StyleSheet, Text, View } from "react-native";
import OnboardingScreen from "./src/screens/OnboardingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <OnboardingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
