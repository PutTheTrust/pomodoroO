import { View, Text, StyleSheet, ScrollView } from "react-native";
import BackButton from "../../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import { SetStateAction, useState } from "react";

import time from "../../../assets/images/icon-time.png";
import calender from "../../../assets/images/icon-calender.png";
import Slider from "@react-native-community/slider";
import colors from "../../themes/colors";
import CustomButton from "../../components/CustomButton";

const Index = () => {
  const [title, setTitle] = useState("");
  const [sessions, setSessions] = useState<number>(0);
  const [longBreak, setLongBreak] = useState<number>(0);
  const [shortBreak, setShortBreak] = useState<number>(0);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
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

        <View style={styles.timeContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Date</Text>
            <CustomInput
              onChangeText={setTitle}
              value={title}
              placeholder={"Date"}
              isPassword={false}
              rightIcon={calender}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Start Time</Text>
            <CustomInput
              onChangeText={setTitle}
              value={title}
              placeholder={"Start Time"}
              isPassword={false}
              rightIcon={time}
            />
          </View>
        </View>

        <View>
          <Text style={styles.label}>Select Category</Text>
          <CustomInput
            onChangeText={setTitle}
            value={title}
            placeholder={"Category"}
            isPassword={false}
          />
        </View>

        <View>
          <Text style={styles.label}>Working Sessions</Text>
          <Text>{Math.round(sessions)}</Text>
          <Slider
            style={{ height: 40 }}
            minimumValue={0}
            maximumValue={8}
            minimumTrackTintColor={colors.primary}
            maximumTrackTintColor="#DDD"
            value={sessions}
            onValueChange={setSessions}
          />
        </View>

        <View>
          <Text style={styles.label}>Short Break</Text>
          <Text>{Math.round(longBreak)}</Text>
          <Slider
            style={{ height: 40 }}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor={colors.primary}
            maximumTrackTintColor="#DDD"
            value={longBreak}
            onValueChange={setLongBreak}
          />
        </View>

        <View>
          <Text style={styles.label}>Long Break</Text>
          <Text>{Math.round(shortBreak)}</Text>
          <Slider
            style={{ height: 40 }}
            minimumValue={0}
            maximumValue={30}
            minimumTrackTintColor={colors.primary}
            maximumTrackTintColor="#DDD"
            value={shortBreak}
            onValueChange={setShortBreak}
          />
        </View>

        <CustomButton title="Create New Task" onClick={() => {}} />
      </ScrollView>
      <View style={{ height: 20 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    // justifyContent: "space-between",
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
  timeContainer: {
    flexDirection: "row",
    gap: 24,
  },
});

export default Index;
