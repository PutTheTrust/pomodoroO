import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

interface SeparatorProps {
  text: string;
}

const Index = ({ text }: SeparatorProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "lightgray",
  },

  text: {
    width: 50,
    textAlign: "center",
    fontWeight: "700",
  },
});

export default Index;
