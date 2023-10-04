import { View, Text, StyleSheet } from "react-native";
import BackButton from "../../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import { SetStateAction, useState } from "react";

const Index = () => {
  const [title, setTitle] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <BackButton />
        <Text style={styles.topText}>Create New Task</Text>
      </View>

      <View>
        <Text style={styles.label}>Title</Text>
        <CustomInput
          onChangeText={setTitle}
          value={title}
          placeholder={"Task Title"}
          isPassword={false}
        />
      </View>

      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
  },
  topText: {
    fontWeight: "800",
    fontSize: 24,
  },
  label: {
    fontWeight: "700",
    fontSize: 18,
  },
});

export default Index;
