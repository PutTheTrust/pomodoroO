import { View, Text, StyleSheet } from "react-native";
import OnboardingContent from "../../components/OnboardingContent";

const Index = () => {
  return (
    <View style={styles.container}>
      <OnboardingContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Index;
